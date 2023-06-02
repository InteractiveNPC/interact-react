import React, { useState } from 'react';
import styles from '../styles/findClue3.css';
import $ from 'jquery';

const fadeT = 2000;

export default function Find3() {
    const back = 'image/Investigation/Talk/Background/TwoSisters/illust_TwoSisters_pond.png';
    const pack = '/image/evidence/cloth_Background.png';    //배경아이템
    const pack2 = '/image/evidence/cloth.png'; //비녀x
    const handle = '/image/evidence/cloth_handle.png';
    const binyeo = '/image/evidence/hairpin.png';

    const popup = '/image/Investigation/Talk/UI/proof_find_info_background.png';
    const button = '/image/Investigation/Talk/UI/proof_find_info_button_normal.png';
    const hButton = '/image/Investigation/Talk/UI/proof_find_info_button_click.png';
    
    const clue = "연못에서 누군가의 보따리 속 비녀를 획득했습니다.";
    const explain = "수사를 계속하더라도, 수사실로 가면 언제든 홍련에게 비녀에 대해 물어볼 수 있습니다.";

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img src={back} style={{ position: "absolute"}}></img>
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
                        $('img#handle').fadeOut({fadeT});
                        $('img#shine').addClass("shining");
                        setTimeout(()=>{
                            $('img#shine').animate({top:'159px', left:'822px'});
                        }, 1000);
                        setTimeout(()=>{
                            $('div#step1').fadeOut({fadeT});
                        }, 2000);
                        setTimeout(()=>{
                            $('div#step2').fadeIn({fadeT});
                        }, 3000);
                }}></img>
                <img id='handle' src={handle} className='handleC'></img>
            </div>

            <div id='step2' className='display-none'>
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
                        }} onClick={()=>{
                          $('div#step2').fadeOut({fadeT})
                        }}>수사 계속하기</h2>
                </div>          
                <p className='banner-txt1'>{clue}</p>
                <p className='banner-txt2'>{explain}</p>
            </div>
        </div>
    );
}