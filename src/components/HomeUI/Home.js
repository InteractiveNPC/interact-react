import React, { useState, useEffect } from 'react';
import Dialogue from "../DialogueUI/Dialogue";
import $ from 'jquery';
import axios from 'axios';
import './home.css';

function Home(props) {
  const [ data, setData ] = useState({"chapter1": 0, "chapter2": 0, "chapter3": 0});
  const [ next, setNext ] = useState(1);
  const [ show, setShow ] = useState(true);

  useEffect(() => {
    axios.get('/intro' + window.location.search)
    .then(res => {
      console.log(res.data)
      setData({"chapter1": res.data.chapter1, "chapter2": res.data.chapter2, "chapter3": res.data.chapter3})
      new Map([["#res1", res.data.chapter1], ["#res2", res.data.chapter2], ["#res3", res.data.chapter3]])
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
    })
    .catch(error => console.log(error))

    console.log(props)
    console.log(data)

    if(props.idx != null) {
      switch(props.idx) {
        case 1:
          setData({"chapter1": props.res})
          break;
        case 2:
          setData({"chapter2": props.res})
          break;
        case 3:
          setData({"chapter3": props.res})
          break;
      }

      var name = "#res"+props.idx
      console.log(data)
      console.log(name)
      $(name).removeClass("rotate");
      $(name).position({
        of: $(name).parent(),
        my: 'left top',
        at: 'left top',
        offset: '-75 -75'
      });
      switch(props.res) {
        case 1:
          $(name).on("load", function() {
            setTimeout(function() {
              $(name).off("load");
              $(name).attr("src", "image/Home/Source/Stamp_bad.png");
              $(name).addClass("rotate");
              $(name).position({
                of: $(name).parent(),
                my: 'left top',
                at: 'left top',
                offset: '75 75'
              });
            }, 400);
          })
          $(name).attr("src", "image/Home/Source/Stamp_bad.webp");
          break;
        case 2:
          $(name).on("load", function() {
            setTimeout(function() {
              $(name).off("load");
              $(name).attr("src", "image/Home/Source/Stamp_average.png");
              $(name).addClass("rotate");
              $(name).position({
                of: $(name).parent(),
                my: 'left top',
                at: 'left top',
                offset: '75 75'
              });
            }, 400);
          })
          $(name).attr("src", "image/Home/Source/Stamp_average.webp");
          break;
        case 3:
          $(name).on("load", function() {
            setTimeout(function() {
              $(name).off("load");
              $(name).attr("src", "image/Home/Source/Stamp_good.png");
              $(name).addClass("rotate");
              $(name).position({
                of: $(name).parent(),
                my: 'left top',
                at: 'left top',
                offset: '75 75'
              });
            }, 400);
          })
          $(name).attr("src", "image/Home/Source/Stamp_good.webp");
          break;
      }
    }

    if(props.init != null) {
      $("#ch1").on("load", function() {
        setTimeout(function() {
          $("#ch1").off("load");
          $("#ch1").attr("src", "image/Home/Source/Title_FairyNWoodcutter.png");
        }, 400);
      })
      $("#ch1").attr("src", "image/Home/Source/Title_FairyNWoodcutter.webp");
      $("#ch2").attr("src", "image/Home/Source/Title_scroll.png");
      $("#ch3").attr("src", "image/Home/Source/Title_scroll.png");

      setTimeout(function() {
        $("#ch3").on("load", function() {
          setTimeout(function() {
            $("#ch3").off("load");
            $("#ch3").attr("src", "image/Home/Source/Title_TwoSisters.png");
          }, 400);
        })
        $("#ch3").attr("src", "image/Home/Source/Title_TwoSisters.webp");
      }, 750);
      setTimeout(function() {
        $("#ch2").on("load", function() {
          setTimeout(function() {
            $("#ch2").off("load");
            $("#ch2").attr("src", "image/Home/Source/Title_Rabbitorgan.png");
          }, 400);
        })
        $("#ch2").attr("src", "image/Home/Source/Title_Rabbitorgan.webp");
      }, 1500);
    }

    $("#ch1").click(function() {
      $("#background").fadeOut(2000);
      setTimeout(function() {
        setNext(1);
        setShow(false);
      }, 2000);
    });
    $("#ch3").click(function() {
      $("#background").fadeOut(2000);
      setTimeout(function() {
        setNext(3);
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
          <img id="res1" className="rotate" src="image/Home/Source/None.png"/>
          <img id="res2" className="rotate" src="image/Home/Source/None.png"/>
          <img id="res3" className="rotate" src="image/Home/Source/None.png"/>
        </div>
      ) : <Dialogue idx={next}/> }
    </div>
  )

};

export default Home;