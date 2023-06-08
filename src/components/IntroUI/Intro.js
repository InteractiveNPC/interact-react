import React, { useState, useEffect } from "react";
import $ from "jquery";
import Home from "../HomeUI/Home";
import "./intro.css";

function Intro(props) {
  const [show, setShow] = useState(true);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    $("#start").hide();
    $("#info").hide();
    $("#begin").hide();

    $(".background").click(function () {
      $(".introClick").css('display', 'none');

      $(".background").off("click");
      $("video").fadeIn(2000);
      $("video").get(0).play();
      $("video").on("click", () => {
        next();
      });
      setTimeout(next, 10000);
    });

    function next() {
      setAudio(true);
      setTimeout(function () {
        $("#begin").fadeIn(1000);
        var blink = setInterval(function () {
          $("#begin").fadeOut(1000).fadeIn(1000);
        }, 2000);
        $(".background").click(function () {
          $(".background").fadeOut(2000);
          clearInterval(blink);
          setTimeout(function () {
            setShow(false);
          }, 2000);
        });
      }, 3000);
    }
  }, []);

  return (
    <div>
      {show ? (
        <div className="background">
          <div className="introClick">화면을 클릭하면 시작합니다.</div>
          { audio &&
            <audio id="bgm" src="/sound/bgm_intro.mp3" autoPlay/>
          }
          <video preload="auto">
            <source type="video/mp4" src="image/Intro/title.mp4" />
          </video>
          <div id="begin">클릭하여 시작하세요</div>
        </div>
      ) : (
        <Home init="true" />
      )}
    </div>
  );
}

export default Intro;
