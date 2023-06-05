import { useSpring, animated } from "react-spring";
import axios from 'axios';
import {useState} from 'react';
import { useDrag } from "react-use-gesture";
import { useBGM, effectPlay } from "../services/audioManager";
import styles from "../styles/findClue3_2.css";
import $ from "jquery";

export default function Find3_2(props) {
  //const back ="image/Investigation/Talk/Background/TwoSisters/illust_TwoSisters_police_room.png";
  const fadeT = 2000;

  const popup = "/image/Investigation/Talk/UI/proof_find_info_background.png";
  const button =
    "/image/Investigation/Talk/UI/proof_find_info_button_normal.png";
  const hButton =
    "/image/Investigation/Talk/UI/proof_find_info_button_click.png";
  const popup2 = "/image/Investigation/Talk/UI/ScriptBackground.png";
  const name = "/image/Investigation/Talk/UI/Namebox_01.png";
  const clue = "관아 안에서 사체부검서를 획득했습니다.";
  const explain = "수사기록을 확인해 새롭게 알아낸 정보를 확인해보세요.";
  const paper2 = "/image/evidence/paper_01.png";
  const paper3 = "/image/evidence/paper_02.png";
  const paper4 = "/image/evidence/paper_03.png";
  const paper5 = "/image/evidence/paper_04.png";

  const paperPos2 = useSpring({ x: 0, y: 0 });
  const bindPaperPos2 = useDrag((params) => {
    paperPos2.x.set(params.offset[0]);
    paperPos2.y.set(params.offset[1]);
  });
  const paperPos3 = useSpring({ x: 0, y: 0 });
  const bindPaperPos3 = useDrag((params) => {
    paperPos3.x.set(params.offset[0]);
    paperPos3.y.set(params.offset[1]);
  });
  const paperPos4 = useSpring({ x: 0, y: 0 });
  const bindPaperPos4 = useDrag((params) => {
    paperPos4.x.set(params.offset[0]);
    paperPos4.y.set(params.offset[1]);
  });
  const paperPos5 = useSpring({ x: 0, y: 0 });
  const bindPaperPos5 = useDrag((params) => {
    paperPos5.x.set(params.offset[0]);
    paperPos5.y.set(params.offset[1]);
  });

  const openStep2 = () => {
    $("div#step1").addClass("display-none");
    $("div#step2").removeClass("display-none");
  };

  const [f3_2Click, setF3_2Click]=useState(false);

  return (
    <div>
      <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
      <img
        id="find"
        src="/image/evidence/desk_paper.png"
        className="desk"
        onClick={() => {
          $("div#backgroundS").fadeIn({ fadeT });
          $("img#find").fadeOut({ fadeT });
        }} onMouseDown={()=>{effectPlay("sisterspaper");}}
      ></img>

      <div id="backgroundS" className="display-none App">
        <div id="step1">
          <img
            id="findE"
            src="/image/evidence/Certificatepaper.png"
            className="clueA"
            onMouseOver={() => {
              $("img#findE").addClass("find");
            }}
            onMouseLeave={() => {
              $("img#findE").removeClass("find");
            }} onMouseDown={()=>{effectPlay("sisterspaper");}}
            onClick={() => {
              $("div#step1_1").fadeOut({ fadeT });
              setTimeout(() => {
                openStep2();
              }, 2000);
            }}
          ></img>
          <div id="step1_1">
            <animated.div
              {...bindPaperPos5()}
              className="objD"
              style={{
                x: paperPos5.x,
                y: paperPos5.y,
              }} onMouseDown={()=>{effectPlay("sisterspaper");}}
            >
              <img src={paper5} className="App-logo p5" />
            </animated.div>
            <animated.div
              {...bindPaperPos2()}
              className="objA"
              style={{
                x: paperPos2.x,
                y: paperPos2.y,
              }} onMouseDown={()=>{effectPlay("sisterspaper");}}
            >
              <img src={paper2} className="App-logo p2" />
            </animated.div>

            <animated.div
              {...bindPaperPos4()}
              className="objC"
              style={{
                x: paperPos4.x,
                y: paperPos4.y,
              }} onMouseDown={()=>{effectPlay("sisterspaper");}}
            >
              <img src={paper4} className="App-logo p4" />
            </animated.div>
            <animated.div
              {...bindPaperPos3()}
              className="objB"
              style={{
                x: paperPos3.x,
                y: paperPos3.y,
              }} onMouseDown={()=>{effectPlay("sisterspaper");}}
            >
              <img src={paper3} className="App-logo p3" />
            </animated.div>
          </div>
        </div>
        <div id="step2" className="display-none">
          <img
            src="/image/evidence/Certificatepaper.png"
            id="findE2"
            className="clueA"
            onMouseOver={() => {
              $("img#findE2").addClass("find");
            }}
            onMouseLeave={() => {
              $("img#findE2").removeClass("find");
            }}
            onClick={() => {
              axios.get('/meet/3/7');
              $("div#step2").fadeOut({ fadeT });
              setTimeout(() => {
                $("div#result").fadeIn({ fadeT });
              }, 1000);
            }}
          ></img>
        </div>
      </div>
      <div id="result" className="display-none">
        <img src={popup} className="banner"></img>
        <div id='btnFirst'>
                    <img src={button} className="btn1" onMouseDown={()=>{
                            $('img#hov1').removeClass('display-none');
                        }} onMouseLeave={()=>{
                          $('img#hov1').addClass('display-none');
                      }}></img>
                    <img id='hov1' className='display-none btn1' src={hButton}></img>
                    <p className='button-txt' onMouseDown={()=>{
                            $('img#hov1').removeClass('display-none');
                        }} onClick={()=>{
                        //props.goOffice();
                    }} onMouseLeave={()=>{
                      $('img#hov1').addClass('display-none');
                  }}>수사기록 확인</p>
                    <div id='btnSecond'>
                        <img src={button} className="btn2" onMouseDown={()=>{
                                $('img#hov2').removeClass('display-none');
                            }} onMouseLeave={()=>{
                              $('img#hov2').addClass('display-none');
                          }}></img>
                        <img id='hov2' className='display-none btn2' src={hButton}></img>
                        <p className='button-txt2' onMouseDown={()=>{
                                $('img#hov2').removeClass('display-none');
                            }} onMouseLeave={()=>{
                              $('img#hov2').addClass('display-none');
                          }} onClick={()=>{
                                if(!f3_2Click){
                                    setF3_2Click(!f3_2Click);
                                    $('div#result').fadeOut({fadeT});
                                    $('div#etc').removeClass('display-none');
                                }
                        }}>수사 계속하기</p>
                    </div>          
          <p className="banner-txt1">{clue}</p>
          <p className='banner-txt2'>{explain}</p>
        </div>
      </div>
    </div>
  );
}
