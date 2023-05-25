import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dialogue.css';

function Dialogue(props) {
  const [ data, setData ] = useState({"id":1, "scene":0, "flag":0, "index":0, "size":1,
                                      "name": "", "content": "", "image": "", "choice": null});
  useEffect(() => {
    axios.get('/chapter' + window.location.search)
    .then(res => {
      console.log(res.data)
      setData({"id": res.data.chapter, "scene": res.data.scene,
                "flag": res.data.flag, "index": res.data.index,
                "name": res.data.name, "content": res.data.content,
                "image": res.data.image, "choice": res.data.choice
              })
    })
    .catch(error => console.log(error))
  }, []);

  const dialogueHandler = () => {
    const dialogueData = {
      "id": data.id,
      "scene": data.scene,
      "flag": data.flag,
      "index": data.index
    };
    axios.get('/chapter?id=' + data.id + "&scene=" + data.scene + "&flag=" + data.flag + "&index=" + data.index)
    .then(res => {
      console.log(res);
      setData({"id": res.data.chapter, "scene": res.data.scene,
                "flag": res.data.flag, "index": res.data.index,
                "name": res.data.name, "content": res.data.content,
                "image": res.data.image, "choice": res.data.choice,
                "size": res.data.size
              })
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
                "image": res.data.image, "choice": res.data.choice,
                "size": res.data.size
              })
    })
    .catch(error => console.log(error))
  }

  const answerId = (idx) => {
    return "answer" + idx;
  }

  if (data.choice == null) {
    return (
        <div onClick={dialogueHandler}>
          <div id="dialogue"></div>
          <div className="dialogue_name"><span>{data.name}</span></div>
          <div className="dialogue_content">{data.content}</div>
          <image id="character" src={data.image}/>
        </div>
    )
  } else {
    return (
      <div>
        <div className="blur"></div>
        <div className="question"></div>
        {data.choice && Object.values(data.choice).map((entrie, idx) => 
        <div className="answer" id={answerId(idx)} onClick={() => answerHandler(idx)}>
          <span>{entrie}</span>
        </div>
        )}
      </div>
    )
  }

};

export default Dialogue;