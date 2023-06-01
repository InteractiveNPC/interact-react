import React, { useState, useEffect } from 'react';
import Home from "../HomeUI/Home";
import $ from 'jquery';
import axios from 'axios';
import './Dialogue.css';

function Dialogue(props) {
  const [ show, setShow ] = useState(true);
  const [ home, setHome ] = useState(false);
  const [ data, setData ] = useState({"id":1, "scene":0, "flag":0, "index":0, "len":1,
                                      "name": "", "content": "", "image": "", "choice": null});
  var size = {1:[0, 2, 4, 6, 8, 108, 109, 110],
              3:[0, 2, 4, 6, 8, 10, 11, 114, 115, 116]}

  useEffect(() => {
    if(props.idx != null) {
      $("#dialogue_container").hide().fadeIn(500);
      setData({"id":props.idx, "scene":props.scene, "flag":props.flag, "index":props.index})
      chapterHandler(props.idx, props.scene, props.flag, props.index, 2)
    } else {
      chapterHandler(data.id, data.scene, data.flag, data.index, data.len)
    }
    if($("#dialogue_container").css("display") == "none") {
      $("#dialogue_container").fadeIn(500);
    }
  }, []);

  const endCheck = (id, scene) => {
    for(var i=0; i<size[id].length-1; i++) {
      if(size[id][i]<scene && size[id][i+1]>=scene) {
        return size[id][i+1];
      }
    }
    return -1;
  }

  const clickHandler = (event) => {
    switch(event.data.code) {
      case -1:
        $("#dialogue_container").fadeOut(1000);
        setTimeout(function() {
          $("#dialogue").off("click").on("click", dialogueHandler);
          setShow(false);
          setHome(true);
        }, 2000);
        break;
      case 0:
        $("#dialogue_container").fadeOut(500);
        $("#dialogue").off("click").on("click", dialogueHandler);
        setTimeout(function() {
          props.onClose();
        }, 500);
        break
      default:
        break;
    }
  }

  const chapterHandler = (id, scene, flag, index, size) => {
    var end = endCheck(id, scene)
    if(size == -1) {
      clickHandler({"data":{"code":0}});
      return;
    }
    axios.get('/chapter?id=' + id + "&scene=" + scene + "&flag=" + flag + "&index=" + index)
    .then(res => {
      console.log(res);
      setData({"id": res.data.chapter, "scene": res.data.scene,
                "flag": res.data.flag, "index": res.data.index,
                "name": res.data.name, "content": res.data.content,
                "image": decodeURI(res.data.image), "choice": res.data.choice,
                "len": res.data.len
              })
      if(res.data.chapter == -1) {
        $("#dialogue").off("click").on("click", {code: -1}, clickHandler);
      }
      if(size <= index) {
        if(res.data.scene == end) {
          $("#dialogue").off("click").on("click", {code: 0}, clickHandler);
        }
      }
    })
    .catch(error => console.log(error))
  }

  const dialogueHandler = () => {
    chapterHandler(data.id, data.scene, data.flag, data.index, data.len)
  }

  const answerHandler = (idx) => {
    var s = 0;
    Object.values(data.choice).map((val, key) => { s++; });
    var i = idx === 0 ? 1 : 0;
    var l = idx === s-1 ? -1 : data.len;
    chapterHandler(data.id, data.scene, idx, i, l)
  }

  const answerId = (idx) => {
    return "answer" + idx;
  }

  if (data.choice == null) {
    return (
      <div id="dialogue_container">
        {show ? (
          <div id="dialogue" onClick={dialogueHandler}>
            <img id="character" src={data.image}/>
            <div id="dialogue_bg"></div>
            <div className="dialogue_name"><span>{data.name}</span></div>
            <div className="dialogue_content">{data.content}</div>
          </div>
        ) : ( home ? <Home idx={data.scene} res={data.flag}/> : null ) }
       </div>
    )
  } else {
    return (
      <div id="dialogue_container">
        {show ? (
          <div id="dialogue">
            <img id="character" src={data.image}/>
            <div className="blur"></div>
            <div className="question"></div>
            {data.choice && Object.values(data.choice).map((entrie, idx) => 
              <div className="answer" id={answerId(idx)} key={answerId(idx)} onClick={() => answerHandler(idx)}>
                <span>{entrie}</span>
              </div>
            )}
          </div>
        ) : ( home ? <Home idx={data.scene} res={data.flag}/> : null ) }
      </div>
    )
  }

};

export default Dialogue;