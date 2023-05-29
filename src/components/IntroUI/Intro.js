import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Home from "../HomeUI/Home";
import './intro.css';

function Intro(props) {
  const [ show, setShow ] = useState(true);

  useEffect(() => {
    $("#start").hide();
    $("#info").hide();
    $("#begin").hide();

    $("#background").click(function() {
      $("#start").fadeIn(2000).fadeOut(2000).hide();
      $("#info").fadeIn(2000).fadeOut(2000).hide();
      $("#background").off("click").click(next);
      setTimeout(next, 5000);
    });

    function next() {
      $("#background").off("click");
      $("video").fadeIn(2000);
      setTimeout(function() {
        $("video").get(0).play();
        setTimeout(function() {
          $("#begin").fadeIn(1000);
          var blink = setInterval(function(){
            $("#begin").fadeOut(1000).fadeIn(1000);
          }, 2000);
          $("#background").click(function() {
            $("#background").fadeOut(2000);
            clearInterval(blink);
            setTimeout(function() {
              setShow(false);
            }, 2000);
          })
        }, 3000);
      }, 2000);
    }

  }, []);

  return (
    <div>
      {show ? (
        <div id="background">
          <div id="start">무원(無寃) 이란 '원통함, 억울함이 없게 하다'라는 뜻으로,<br/>원통한 일이 없도록 사건수사에 도움이 되는 법의학적 실무지식을 수집, 정리한 책이 '무원록'입니다.<br/>전래동화 속 원통한 일을 겪은 인물들을 만나 수사를 진행하며 당신만의 무원록을 완성하십시오.</div>
          <div id="info">* 본 컨텐츠는 전래동화 속 범죄를 수사하는 컨텐츠로,<br/>기존의 전래동화를 바탕으로 일부의 상상력을 보태어 만들어졌으며, 수사에 있어서 검찰의 공식적인 절차와 다를 수 있음을 알려드립니다.</div>
          <video preload="auto">
            <source type="video/mp4" src="image/Intro/title.mp4"/>
          </video>
          <div id="begin">클릭하여 시작하세요</div>
        </div>
      ) : <Home init="true"/> }
    </div>
  )

};

export default Intro;