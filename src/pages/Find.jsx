
import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';
import styles from '../styles/findClue.css';
import $ from 'jquery';

export default function Find(){
    const popup = '/image/Investigation/Talk/UI/NoticeBackground.png';
    const button = '/image/Investigation/Talk/UI/ButtonNormal.png';
    const hButton = '/image/Investigation/Talk/UI/ButtonClick.png';
    const popup2 = '/image/Investigation/Talk/UI/ScriptBackground.png';
    const name = '/image/Investigation/Talk/UI/Namebox_02.png';
    const clue = "나무꾼의 방에서 값비싸보이는 비단옷을 획득했습니다.";
    const explain = "수사를 계속하더라도, 수사실로 오면 언제든 선녀에게 비단옷에 대해 물어볼 수 있습니다.";

    const cloth2 = '/image/clothes/cloth_01.png';
    const cloth3 = '/image/clothes/cloth_02.png';
    const cloth4 = '/image/clothes/cloth_03.png';
    const cloth5 = '/image/clothes/cloth_04.png';
    const [fCloth, setfCloth] = useState("/image/clothes/Fairyclothes.png");

    var c2X, c2Y;
    var c3X, c3Y;
    var c4X, c4Y;
    var c5X, c5Y;

    const clothPos2 = useSpring({x:0, y:0});
    const [pos2, setPos2] = useState({x:clothPos2.x, y:clothPos2.y});
    const bindClothPos2 = useDrag((params)=>{
        clothPos2.x.set(params.offset[0]);
        clothPos2.y.set(params.offset[1]);

        c2X = params.offset[0];
        c2Y = params.offset[1];
    });
    const clothPos3 = useSpring({x:0, y:0});
    const [pos3, setPos3] = useState({x:clothPos3.x, y:clothPos3.y});
    const bindClothPos3 = useDrag((params)=>{
        clothPos3.x.set(params.offset[0]);
        clothPos3.y.set(params.offset[1]);

        c3X = params.offset[0];
        c3Y = params.offset[1];
    });
    const clothPos4 = useSpring({x:0, y:0});
    const [pos4, setPos4] = useState({x:clothPos4.x, y:clothPos4.y});
    const bindClothPos4 = useDrag((params)=>{
        clothPos4.x.set(params.offset[0]);
        clothPos4.y.set(params.offset[1]);

        c4X = params.offset[0];
        c4Y = params.offset[1];
    });
    const clothPos5 = useSpring({x:0, y:0});
    const [pos5, setPos5] = useState({x:clothPos5.x, y:clothPos5.y});
    const bindClothPos5 = useDrag((params)=>{
        clothPos5.x.set(params.offset[0]);
        clothPos5.y.set(params.offset[1]);
        
        c5X = params.offset[0];
        c5Y = params.offset[1];
    });
    
    const [showClue, setShowClue] = useState(false);
    const [fadeInOut, setFadeInOut] = useState('');
    const [showClue2, setShowClue2] = useState(false);
    const [fadeInOut4, setFadeInOut4] = useState('');

    const [showClothes, setShowClothes] = useState(false);
    const [fadeInOut2, setFadeInOut2] = useState('');

    const [showPopup, setShowPopup] = useState(false);
    const [fadeInOut3, setFadeInOut3] = useState('');

    const gettingPos=()=>{
        //const elem = document.getElementById("c2");
        //const rect = elem.getBoundingClientRect();

        setPos2({x:c2X, y:c2Y});
        setPos3({x:c3X, y:c3Y});
        setPos4({x:c4X, y:c4Y});
        setPos5({x:c5X, y:c5Y});
    }

    const showClueImg = () => {
        if (showClue) {
          setFadeInOut('fade-out');
          setTimeout(() => {
            setShowClue(!showClue);
          }, 1000);
        } else {
          setFadeInOut('fade-in');
          setTimeout(() => {
            setShowClue(!showClue);
          }, 100);
        }
    };

    const showClue2Img = () => {
        setFadeInOut4('fade-out');
        setTimeout(() => {
            setfCloth("/image/clothes/emptyImg.png");
        }, 1000);
    };

    const showClothesImg = () => {
        if (showClothes) {
          setFadeInOut2('fade-out');
          setTimeout(() => {
            setShowClothes(!showClothes);
          }, 1000);
        } else {
          setFadeInOut2('fade-in');
          setTimeout(() => {
            setShowClothes(!showClothes);
          }, 100);
        }
    };

    const showPopupImg = () => {
        if (showPopup) {
          setFadeInOut3('fade-out');
          setTimeout(() => {
            setShowPopup(!showPopup);
            $('div#result').removeClass('display-none');
          }, 1000);
        } else {
          setFadeInOut3('fade-in');
          setTimeout(() => {
            setShowPopup(!showPopup);
          }, 100);
        }
    };

    const Clue = () => {
        return (
            <div className={'clue-img ' + fadeInOut}>
              <img src={fCloth} className="clue" onClick={()=>{
                    gettingPos();
                    $('div#step2').removeClass('display-none');
                    showClothesImg();
                    $('div#clue').addClass('display-none');
              }}></img>
            </div>
        );
    };

    const Clue2 = () => {
        return (
            <div className={'clue-img2 ' + fadeInOut4}>
              <img src={fCloth} className="clue" onClick={()=>{
                showClue2Img();
                setTimeout(() => {
                    showPopupImg();
                  }, 2000);
              }}></img>
            </div>
        );
    };

    const Clothes = () => {
        return (
          <div className={'clothes-img ' + fadeInOut2}>
            <animated.div {...bindClothPos2()} className="obj3" style={{
                x: pos2.x,
                 y: pos2.y
            }}>
                <img id='c3' src={cloth3} className="App-logo" />
            </animated.div>
            <animated.div {...bindClothPos3()} className="obj4" style={{
                x: pos3.x,
                y: pos3.y
            }}>
                <img id='c4' src={cloth4} className="App-logo" />
            </animated.div>
            <animated.div {...bindClothPos4()} className="obj5" style={{
                x: pos4.x,
                y: pos4.y
            }}>
                <img id='c5' src={cloth5} className="App-logo" />
            </animated.div>
            <animated.div {...bindClothPos5()} className="obj2" style={{
                x: pos5.x,
                y: pos5.y
            }}>
                <img id='c2' src={cloth2} className="App-logo" style={{x:pos2.x, y:pos2.y}}/>
            </animated.div>
          </div>
        );
    };

    const Pop = () => {
        return (
            <div className={'popup-img ' + fadeInOut3}>
                <img src={popup}  className='banner'></img>
                <div id='btnFirst'>
                    <img src={button} className="btn1" onMouseOver={()=>{
                            $('img#hov1').removeClass('display-none');
                        }} onMouseLeave={()=>{
                            $('img#hov1').addClass('display-none');
                    }}></img>
                    <img id='hov1' className='display-none btn1' src={hButton}></img>
                    <h2 className='button-txt' onMouseOver={()=>{
                            $('img#hov1').removeClass('display-none');
                        }} onMouseLeave={()=>{
                            $('img#hov1').addClass('display-none');
                    }}>선녀에게 가기</h2>
                </div>
                <div id='btnSecond'>
                    <img src={button} className="btn2" onMouseOver={()=>{
                            $('img#hov2').removeClass('display-none');
                        }} onMouseLeave={()=>{
                            $('img#hov2').addClass('display-none');
                    }}></img>
                    <img id='hov2' className='display-none btn2' src={hButton}></img>
                    <h2 className='button-txt2' onMouseOver={()=>{
                            $('img#hov2').removeClass('display-none');
                        }} onMouseLeave={()=>{
                            $('img#hov2').addClass('display-none');
                        }} onClick={()=>{
                            $('div#etc').removeClass('display-none');
                            showPopupImg();
                        }}>
                        수사 계속하기</h2>
                </div>          
                <p className='banner-txt1'>{clue}</p>
                <p className='banner-txt2'>{explain}</p>
            </div>
        );
    };

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png" style={{ position: "absolute"}}></img>
            <div id="background" className="App">
                <div id="step1">
                    <img id="find" src="/image/clothes/cloth_00.png" style={{ position: "absolute", top:"641px", left:"1327px"}} onClick={()=>{
                        $('img#find').addClass('display-none');
                        $('div#etc').addClass('display-none');
                        showClueImg();
                        showClothesImg();
                    }}></img>
                    <div id='clue'>
                        <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png"></img>
                        {showClue ? <Clue onClick={showClueImg} /> : null}
                    </div>
                    {showClothes ? <Clothes onClick={showClothesImg} /> : null}
                </div>
            
                <div id="step2" className="display-none">
                    <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png"></img>
                    <Clue2 onClick={showClue2Img}/>
                </div>
                <div id='result'>
                    <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png"></img>
                    {showPopup ? <Pop onClick={showPopupImg} /> : null}
                </div>

                <div id='etc' className='etc' onClick={()=>{$('div#pop').removeClass("display-none");}}>
                    <h2></h2>
                </div>
                <div id='pop' className='display-none'>
                    <div onClick={()=>{
                        $('div#pop').addClass("display-none");
                    }}>
                        <img src={popup2} className='banner2'></img>
                        <img src={name} className='namePos'></img>
                        <h2 className='banner-txtA'>검사</h2>
                        <h2 className='banner-txtB'>나무꾼의 방에 있는 서랍장이다. 잡동사니들이 잔뜩 들어있다.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*
div id="step2" className="display-none">
                <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png"></img>
                <img src="/image/clothes/Fairyclothes.png" className="clue" onClick={()=>{
                    $('div#step2').addClass('display-none');
                    showPopupImg();
                }}></img>
            </div>
*/