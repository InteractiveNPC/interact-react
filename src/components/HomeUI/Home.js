import React, { useState, useEffect } from 'react';
import Dialogue from "../DialogueUI/Dialogue";
import $ from 'jquery';
import axios from 'axios';
import './home.css';

function Home(props) {
  const [ data, setData ] = useState({"chapter1": 0, "chapter2": 0, "chapter3": 0});
  const [ show, setShow ] = useState(true);
  const [ open, setOpen ] = useState(false);

  useEffect(() => {
    axios.get('/intro' + window.location.search)
    .then(res => {
      console.log(res.data)
      setData({"chapter1": res.data.chapter1, "chapter2": res.data.chapter2, "chapter3": res.data.chapter3})
    })
    .catch(error => console.log(error))

    if(open == false) {
      $("#ch1").on("load", function() {
        setTimeout(function() {
          $("#ch1").off("load");
          $("#ch1").attr("src", "image/Home/Source/Title_FairyNWoodcutter.png");
        }, 500);
      })
      $("#ch1").attr("src", "image/Home/Source/Title_FairyNWoodcutter.webp");
      $("#ch2").attr("src", "image/Home/Source/Title_scroll.png");
      $("#ch3").attr("src", "image/Home/Source/Title_scroll.png");

      setTimeout(function() {
        $("#ch3").on("load", function() {
          setTimeout(function() {
            $("#ch3").off("load");
            $("#ch3").attr("src", "image/Home/Source/Title_TwoSisters.png");
          }, 500);
        })
        $("#ch3").attr("src", "image/Home/Source/Title_TwoSisters.webp");
      }, 1000);
      setTimeout(function() {
        $("#ch2").on("load", function() {
          setTimeout(function() {
            $("#ch2").off("load");
            $("#ch2").attr("src", "image/Home/Source/Title_Rabbitorgan.png");
          }, 500);
        })
        $("#ch2").attr("src", "image/Home/Source/Title_Rabbitorgan.webp");
        setOpen(true);
      }, 2000);
    }

    new Map([["#res1", data.chapter1], ["#res2", data.chapter2], ["#res3", data.chapter3]])
    .forEach(function(value, key, map) {
      switch(value) {
        case 1:
          $(key).attr("src", "image/Home/Source/Stamp_bad.png");
          break;
        case 2:
          $(key).attr("src", "image/Home/Source/Stamp_average.png");
          break;
        case 3:
          $(key).attr("src", "image/Home/Source/Stamp_good.png");
          break;
      }
    });

    $("#ch1").click(function() {
      $("#background").fadeOut(2000);
      setTimeout(function() {
        setShow(false);
      }, 2000);
    });
    $("#ch3").click(function() {
      $("#background").fadeOut(2000);
      setTimeout(function() {
        setShow(false);
      }, 2000);
    });

  }, []);

  return (
    <div>
      {show ? (
        <div id="background" style={{ backgroundImage:'url("image/Home/Background/Background_illust.png")' }}>
          <img id="ch1" src="image/Home/Source/Title_FairyNWoodcutter.png"/>
          <img id="ch3" src="image/Home/Source/Title_TwoSisters.png"/>
          <img id="ch2" src="image/Home/Source/Title_Rabbitorgan.png"/>
          <img id="res1" src="image/Home/Source/None.png"/>
          <img id="res2" src="image/Home/Source/None.png"/>
          <img id="res3" src="image/Home/Source/None.png"/>
        </div>
      ) : <Dialogue /> }
    </div>
  )

};

export default Home;