import React, { useState } from 'react';
import styles from '../styles/findClue3.css';
import $ from 'jquery';

export default function Find3() {
    const pack = '/image/temp/temp.png';
    const binyeo = '/image/temp/temp2.png';

    const popup = '/image/Investigation/Talk/UI/NoticeBackground.png';
    const button = '/image/Investigation/Talk/UI/ButtonNormal.png';
    const hButton = '/image/Investigation/Talk/UI/ButtonClick.png';
    const clue = "연못에서 누군가의 보따리 속 비녀를 획득했습니다.";
    const explain = "수사를 계속하더라도, 수사실로 가면 언제든 홍련에게 비녀에 대해 물어볼 수 있습니다.";

    const [showPack, setShowPack] = useState(false);
    const [fadeInOut, setFadeInOut] = useState('');
    const [showPopUp, setShowPopUp] = useState(false);
    const [fadeInOut2, setFadeInOut2] = useState('');

    const showPackImg = () => {
        if (showPack) {
          setFadeInOut('fade-out');
          setTimeout(() => {
            setShowPack(!showPack);
          }, 1000);
        } else {
          setFadeInOut('fade-in');
          setTimeout(() => {
            setShowPack(!showPack);
          }, 100);
        }
    };

    const showPopUpImg = () => {
        if (showPopUp) {
          setFadeInOut2('fade-out');
          setTimeout(() => {
            setShowPopUp(!showPopUp);
          }, 1000);
        } else {
          setFadeInOut2('fade-in');
          setTimeout(() => {
            setShowPopUp(!showPopUp);
          }, 100);
        }
    };

    const MyPack = () => {
        return (
          <div className={'pack-img ' + fadeInOut}>
            <img src={pack} style={{ position: "absolute", top: "30%", left: "40%"}}></img>
            <img id='shine' src={binyeo} style={{ position: "absolute", top: "30%", left: "45%"}} onMouseOver={()=>{
                    $('img#shine').addClass("shining");
                }} onMouseLeave={()=>{
                    $('img#shine').removeClass("shining");
                }} onClick={showPopUpImg}></img>
          </div>
        );
    };

    const PopUp = () => {
        return (
            <div className={'popup-img ' + fadeInOut2}>
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
                    }}>홍련에게 가기</h2>
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
                        }} onClick={showPopUpImg}>수사 계속하기</h2>
                </div>          
                <p className='banner-txt1'>{clue}</p>
                <p className='banner-txt2'>{explain}</p>
            </div>
        );
    }

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png" style={{ position: "absolute"}}></img>
            <img src={pack} style={{ position: "absolute", top:"750px", left:"1500px"}} onClick={showPackImg}></img>
            {showPack ? <MyPack onClick={showPackImg} /> : null}
            {showPopUp ? <PopUp onClick={showPopUpImg} /> : null}
        </div>
    );
}
/*

*/