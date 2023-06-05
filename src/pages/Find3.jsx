import React, { useState } from 'react';
import axios from 'axios';
import { useBGM, effectPlay } from "../services/audioManager";
import styles from '../styles/findClue3.css';
import $ from 'jquery';

const fadeT = 2000;

export default function Find3(props) {
    //const back = 'image/Investigation/Talk/Background/TwoSisters/illust_TwoSisters_pond.png';
    const pack = '/image/evidence/cloth_Background.png';    //배경아이템
    const pack2 = '/image/evidence/cloth.png'; //비녀x
    const handle = '/image/evidence/cloth_handle.png';
    const binyeo = '/image/evidence/hairpin.png';

    const popup = '/image/Investigation/Talk/UI/proof_find_info_background.png';
    const button = '/image/Investigation/Talk/UI/proof_find_info_button_normal.png';
    const hButton = '/image/Investigation/Talk/UI/proof_find_info_button_click.png';
    
    const clue = "연못에서 누군가의 보따리 속 비녀를 획득했습니다.";
    const explain = "수사를 계속하더라도, 수사실로 가면 언제든 홍련에게 비녀에 대해 물어볼 수 있습니다.";

    const [f3Click, setF3Click] = useState(false);

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img id='pack' src={pack} style={{ position: "absolute", top:"750px", left:"1500px"}} onClick={()=>{
              $('img#pack').fadeOut({fadeT});
              $('div#step1').fadeIn({fadeT});
            }}></img>

            <div id='step1' className='display-none'>
                <img src={pack2} className='bigPack'></img>
                <img id='shine' src={binyeo} className='hairPin'
                    onMouseOver={()=>{
                        $('img#shine').addClass("shining");
                    }} onMouseLeave={()=>{
                            $('img#shine').removeClass("shining");
                    }} onClick={()=>{
                        effectPlay("coin");
                        $('img#shine').addClass('shining2');
                        $('img#handle').fadeOut({fadeT});
                        setTimeout(()=>{
                            $('img#shine').animate({top:'159px', left:'822px'}, 500);
                        }, 1000);
                        setTimeout(()=>{
                            $('div#step1').fadeOut({fadeT});
                        }, 2500);
                        axios.get('/meet/3/8');
                        setTimeout(()=>{
                            $('div#step2').fadeIn({fadeT});
                        }, 3500);
                }}></img>
                <img id='handle' src={handle} className='handleC'></img>
            </div>

            <div id='step2' className='display-none'>
                <img src={popup}  className='banner'></img>
                <div id='btnFirst'>
                    <img src={button} className="btn1"></img>
                    <img id='hov1' className='display-none btn1' src={hButton}></img>
                    <p className='button-txt'>홍련에게 가기</p>
                    <div id='fBtn1' onMouseDown={()=>{
                            $('img#hov1').removeClass('display-none');
                        }} onMouseLeave={()=>{
                            $('img#hov1').addClass('display-none');
                        }} onClick={()=>{
                            props.goOffice();
                        }}></div>
                </div>
                <div id='btnSecond'>
                    <img src={button} className="btn2"></img>
                    <img id='hov2' className='display-none btn2' src={hButton}></img>
                    <p className='button-txt2'>수사 계속하기</p>
                        <div id='fBtn2' onMouseDown={()=>{
                            $('img#hov2').removeClass('display-none');
                        }} onMouseLeave={()=>{
                            $('img#hov2').addClass('display-none');
                        }} onClick={()=>{
                            if(!f3Click){
                                setF3Click(!f3Click);
                                $('div#step2').fadeOut({fadeT});
                            }
                        }}></div>
                </div>          
                <p className='banner-txt1'>{clue}</p>
                <p className='banner-txt2'>{explain}</p>
            </div>
        </div>
    );
}