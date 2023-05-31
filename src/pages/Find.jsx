
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

    const clothPos2 = useSpring({x:0, y:0});
    const bindClothPos2 = useDrag((params)=>{
        clothPos2.x.set(params.offset[0]);
        clothPos2.y.set(params.offset[1]);
    });
    const clothPos3 = useSpring({x:0, y:0});
    const bindClothPos3 = useDrag((params)=>{
        clothPos3.x.set(params.offset[0]);
        clothPos3.y.set(params.offset[1]);
    });
    const clothPos4 = useSpring({x:0, y:0});
    const bindClothPos4 = useDrag((params)=>{
        clothPos4.x.set(params.offset[0]);
        clothPos4.y.set(params.offset[1]);
    });
    const clothPos5 = useSpring({x:0, y:0});
    const bindClothPos5 = useDrag((params)=>{
        clothPos5.x.set(params.offset[0]);
        clothPos5.y.set(params.offset[1]);
    });
    /*
    const saveNote = (data) => {
        alert(data);
    }
    */

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png" style={{ position: "absolute"}}></img>
            <img id="find" src="/image/clothes/cloth_00.png" style={{ position: "absolute", top:"641px", left:"1327px"}} onClick={()=>{
                $('div#background').removeClass("display-none");
                $('div#background').addClass("active");
                $('img#find').addClass("display-none");
            }}></img>
            <div className='etc' onClick={()=>{
                    $('div#pop').removeClass("display-none");
                }}>
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

            <div id="background" className="display-none App">
                <div id="step1">
                <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png"></img>
                    <img src="/image/clothes/Fairyclothes.png" className="clue" onClick={()=>{
                            $('div#step1').removeClass("active");
                            $('div#step1').addClass("display-none");
        
                            $('div#step2').removeClass("display-none");
                            $('div#step2').addClass("active");
                    }}></img>
                    <animated.div {...bindClothPos2()} className="obj3" style={{
                        x: clothPos2.x,
                        y: clothPos2.y
                    }}>
                        <img src={cloth3} className="App-logo" />
                    </animated.div>
                    <animated.div {...bindClothPos3()} className="obj4" style={{
                        x: clothPos3.x,
                        y: clothPos3.y
                    }}>
                        <img src={cloth4} className="App-logo" />
                    </animated.div>
                    <animated.div {...bindClothPos4()} className="obj5" style={{
                        x: clothPos4.x,
                        y: clothPos4.y
                    }}>
                        <img src={cloth5} className="App-logo" />
                    </animated.div>
                    <animated.div {...bindClothPos5()} className="obj2" style={{
                        x: clothPos5.x,
                        y: clothPos5.y
                    }}>
                        <img src={cloth2} className="App-logo" />
                    </animated.div>
                </div>
                <div id="step2" className="display-none">
                <img src="image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_Woodcutter_room.png"></img>
                    <img src="/image/clothes/Fairyclothes.png" alt="find" className="clue" 
                    onClick={()=>{
                        $('div#background').removeClass("active");
                        $('div#background').addClass("display-none");

                        $('div#result').removeClass("display-none");
                        $('div#result').addClass("active");
                    }}></img>
                </div>
                
            </div>
            <div id='result' className="display-none">
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
                            $('div#result').removeClass('active');
                            $('div#result').addClass("display-none");
                    }}>수사 계속하기</h2>
                </div>          
                <p className='banner-txt1'>{clue}</p>
                <p className='banner-txt2'>{explain}</p>
            </div>
        </div>
    );
}