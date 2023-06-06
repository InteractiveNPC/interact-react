import React, { useState, useEffect } from 'react';
import Home from "../HomeUI/Home";
import $ from 'jquery';
import axios from 'axios';
import './Dialogue.css';

import { setChoiceData } from './hook';
import { useVolumeSetting } from "../../services/audioManager";

function Dialogue(props) {
  useVolumeSetting();
  
  const [ show, setShow ] = useState(true);
  const [ home, setHome ] = useState(false);
  const [ hold, setHold ] = useState(false);
  const [ voice, setVoice ] = useState("");
  const [ data, setData ] = useState({"id":1, "scene":0, "flag":0, "index":0, "len":1,
                                      "name": "", "content": "", "image": "", "choice": null});
  var size = {1:[0, 2, 4, 6, 8, 108, 109, 110],
              3:[0, 2, 4, 6, 8, 10, 11, 114, 115, 116]}

  useEffect(() => {
    if(props.idx != null) {
      $("#dialogue_container").hide().fadeIn(500);
      setData({"id":props.idx, "scene":props.scene, "flag":props.flag, "index":props.index});
      chapterHandler(props.idx, props.scene, props.flag, props.index, 2);
    } else {
      chapterHandler(data.id, data.scene, data.flag, data.index, data.len);
    }
  }, []);

  const endCheck = (id, scene) => {
    if (!size[id]) return -1;
    if (scene == size[id][0]) return size[id][0];
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
          props.onClose();
        }, 2000);
        break;
      case 0:
        if(event.data.scene == 0) {
          $("#hero").trigger("hero");
          props.onInit();
        }
        $("#dialogue_container").fadeOut(500);
        $("#dialogue").off("click").on("click", dialogueHandler);
        setTimeout(function() {
          props.onClose();
          setHold(false);
        }, 500);
        break
      default:
        break;
    }
  }

  const chapterHandler = (id, scene, flag, index, size) => {
    var end = endCheck(id, scene)
    if(size == -1) {
      clickHandler({"data":{"code":0, scene: scene}});
      return;
    }
    if(hold != true) {
      axios.get("/chapter?id=" + id + "&scene=" + scene + "&flag=" + flag + "&index=" + index)
      .then(async (res) => {
        console.log(res);

        let choice = null;
        if (res.data.choice) {
          choice = await setChoiceData(id, scene, res.data.choice);
        }

        setData({"id": res.data.chapter, "scene": res.data.scene,
                  "flag": res.data.flag, "index": res.data.index,
                  "name": res.data.name, "content": res.data.content,
                  "image": decodeURI(res.data.image), "choice": choice,
                  "len": res.data.len
                });

        if(res.data.chapter == -1) {
          $("#dialogue").off("click").on("click", {code: -1}, clickHandler);
        }
        if(size < index && res.data.scene >= end) {
          $("#dialogue").off("click").on("click", {code: 0, scene: scene}, clickHandler);
        }
        if((
            (scene == 0 && res.data.index == 0) ||
            (scene == 7 && res.data.index == 0 && flag == 0)
          ) && size+1 >= res.data.len) {
          $("#dialogue").off("click").on("click", {code: 0, scene: scene}, clickHandler);
          setHold(true);
        }
        
        for(var i=1; i<6; i++) {
          $(".dialogue_name").removeClass("name"+i);
        }
        setTimeout(function() {
           if(res.data.name == "검사") {
            $(".dialogue_name").addClass("name1");
          } else {
            if(res.data.name.length > 4) {
                $(".dialogue_name").addClass("name5");
            } else {
                $(".dialogue_name").addClass("name" + res.data.name.length);
            }
          }
        }, 5);

        var voice_src = "image/Investigation/Talk/Sound/dubbing/" + (id==1 ? "FairyNWoodcutter" : "TwoSisters") + "/voice_" + id + "_" + scene + "_" + flag + "_" + index + ".mp3";
        var voice_audio = '<audio id="voice" autoplay>' + 
          '<source id="voice_src" src="' + voice_src + '" type="audio/mp3"/>' +
          '</audio>';
        $.get(voice_src)
        .done(function() {
          setVoice(voice_audio);
        }).fail(function() {
          setVoice(null);
        });
      })
      .catch(error => console.log(error));
    }
  }

  const dialogueHandler = () => {
    chapterHandler(data.id, data.scene, data.flag, data.index, data.len)
  }

  const answerHandler = (idx) => {
    var btn = "#answer" + idx;
    $(btn).css({"background": 'url("image/Investigation/Talk/UI/UI_optionbox_click.png")'});
    var s = 0;
    Object.values(data.choice).map((val, key) => { s++; });
    var i = idx === 0 ? 1 : 0;
    var l = idx === s-1 ? -1 : data.len;
    var s = data.scene;
    if(data.scene === -1) {
      s = 0;
      i = 0;
    }
    setTimeout(function() {
      $(btn).css({"background": 'url("image/Investigation/Talk/UI/UI_optionbox_normal.png")'});
      chapterHandler(data.id, s, idx, i, l);
    }, 500);
  }

  const answerId = (idx) => {
    return "answer" + idx;
  }

  if (data.choice == null) {
    return (
      <div id="dialogue_container">
        {show ? (
          <div id="dialogue" onClick={dialogueHandler}>
            {
              (data.scene != 0
                && data.scene != -1
                && data.scene != -2
                && !( data.scene == 1 && data.index == 0 )
                && !( data.id == 1 && ( data.scene == 9 || data.scene == 10 ) )
                && !( data.id == 3 && ( data.scene == 11 || data.scene == 12 ) )
              ) && <div className="blur"></div>
            }
            <img id="character" src={data.image}/>
            <div id="dialogue_bg"></div>
            <div className="dialogue_name"><span>{data.name}</span></div>
            <div className="dialogue_content">{data.content}</div>
            <div className="voice" dangerouslySetInnerHTML={{__html: voice}}></div>
            <img id="point" src="/image/Investigation/Talk/UI/ScriptButton.png"/>
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
            {data.choice && data.choice.map(({content, visited}, idx) => (
              <div className="answer" id={answerId(idx)} onClick={() => answerHandler(idx)}>
                {visited && <img src="/image/Investigation/Talk/UI/optionbox_check.png"/>}
                <span>{content}</span>
              </div>
            ))}
          </div>
        ) : ( home ? <Home idx={data.scene} res={data.flag}/> : null ) }
      </div>
    )
  }

};

export default Dialogue;