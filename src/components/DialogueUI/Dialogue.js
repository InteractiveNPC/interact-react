import React, { useState, useEffect } from 'react';
import Home from "../HomeUI/Home";
import $ from 'jquery';
import axios from 'axios';
import './Dialogue.css';

function Dialogue(props) {
  const [ show, setShow ] = useState(true);
  const [ home, setHome ] = useState(false);
  const [ data, setData ] = useState({"id":props.idx, "scene":0, "flag":0, "index":0, "size":1,
                                      "name": "", "content": "", "image": "", "choice": null});
  useEffect(() => {
     axios.get('/chapter?id=' + data.id + "&scene=" + data.scene + "&flag=" + data.flag + "&index=" + data.index)
    .then(res => {
      console.log(res.data)
      setData({"id": res.data.chapter, "scene": res.data.scene,
                "flag": res.data.flag, "index": res.data.index,
                "name": res.data.name, "content": res.data.content,
                "image": decodeURI(res.data.image), "choice": res.data.choice
              })
      if(res.data.chapter == -1) {
        $("#dialogue").fadeOut(2000);
        setTimeout(function() {
          setShow(false);
          setHome(true);
        }, 2000);
      }
    })
    .catch(error => console.log(error))
  }, []);

  const dialogueHandler = () => {
    axios.get('/chapter?id=' + data.id + "&scene=" + data.scene + "&flag=" + data.flag + "&index=" + data.index)
    .then(res => {
      console.log(res);
      setData({"id": res.data.chapter, "scene": res.data.scene,
                "flag": res.data.flag, "index": res.data.index,
                "name": res.data.name, "content": res.data.content,
                "image": decodeURI(res.data.image), "choice": res.data.choice,
                "size": res.data.size
              })
      if(res.data.chapter == -1) {
        $("#dialogue").fadeOut(2000);
        setTimeout(function() {
          setShow(false);
          setHome(true);
        }, 2000);
      }
    })
    .catch(error => console.log(error))
  }

  const answerHandler = (idx) => {
    var i = idx === 0 ? 1 : 0;
    axios.get('/chapter?id=' + data.id + "&scene=" + data.scene + "&flag=" + idx + "&index=" + i)
    .then(res => {
      console.log(res);
      setData({"id": res.data.chapter, "scene": res.data.scene,
                "flag": res.data.flag, "index": res.data.index,
                "name": res.data.name, "content": res.data.content,
                "image": decodeURI(res.data.image), "choice": res.data.choice,
                "size": res.data.size
              })
      if(res.data.chapter == -1) {
        $("#dialogue").fadeOut(2000);
        setTimeout(function() {
          setShow(false);
          setHome(true);
        }, 2000);
      }
    })
    .catch(error => console.log(error))
  }

  const answerId = (idx) => {
    return "answer" + idx;
  }

  if (data.choice == null) {
    return (
      <div>
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
      <div>
        {show ? (
          <div id="dialogue">
            <img id="character" src={data.image}/>
            <div className="blur"></div>
            <div className="question"></div>
            {data.choice && Object.values(data.choice).map((entrie, idx) => 
              <div className="answer" id={answerId(idx)} onClick={() => answerHandler(idx)}>
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