import {useSpring, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';
import styles from '../styles/findClue.css';
import $ from 'jquery';

export default function Find(){
    const result = '/image/clothes/ResultPage_NextButton.png';
    const clue = "나무꾼의 방에서 값비싸보이는 비단옷을 획득했습니다.";
    const explain = "수사를 계속하더라도, 수사실로 오면 언제든 선녀에게 비단옷에 대해 물어볼 수 있습니다.";

    const cloth2 = '/image/clothes/Clothes02.png';
    const cloth3 = '/image/clothes/Clothes03.png';
    const cloth4 = '/image/clothes/Clothes04.png';
    const cloth5 = '/image/clothes/Clothes05.png';

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

    const saveNote = (data) => {
        alert(data);
    }

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img src="image/clothes/WoodcuttterRoom.png" style={{ position: "absolute"}}></img>
            <img id="find" src="/image/clothes/collar.png" style={{ position: "absolute", top:"71%", left:"16%"}} onClick={()=>{
                $('div#background').removeClass("display-none");
                $('div#background').addClass("active");
            }}></img>

            <div id="background" className="display-none App">
                <div id="step1">
                    <img src="/image/clothes/ClothesEvidence.png" className="clue" onClick={()=>{
                            $('div#step1').removeClass("active");
                            $('div#step1').addClass("display-none");
        
                            $('div#step2').removeClass("display-none");
                            $('div#step2').addClass("active");
                    }}></img>
                    <animated.div {...bindClothPos2()} className="obj" style={{
                        x: clothPos2.x,
                        y: clothPos2.y
                    }}>
                        <img src={cloth2} className="App-logo" />
                    </animated.div>
                    <animated.div {...bindClothPos3()} className="obj" style={{
                        x: clothPos3.x,
                        y: clothPos3.y
                    }}>
                        <img src={cloth3} className="App-logo" />
                    </animated.div>
                    <animated.div {...bindClothPos4()} className="obj" style={{
                        x: clothPos4.x,
                        y: clothPos4.y
                    }}>
                        <img src={cloth4} className="App-logo" />
                    </animated.div>
                    <animated.div {...bindClothPos5()} className="obj" style={{
                        x: clothPos5.x,
                        y: clothPos5.y
                    }}>
                        <img src={cloth5} className="App-logo" />
                    </animated.div>
                </div>
                <div id="step2" className="display-none">
                    <img src="/image/clothes/ClothesEvidence.png" alt="find" className="clue" 
                    onClick={()=>{
                        $('div#background').removeClass("active");
                        $('div#background').addClass("display-none");

                        $('div#result').removeClass("display-none");
                        $('div#result').addClass("active");
                    }}></img>
                </div>
                
            </div>
            <div id='result' className="display-none">
                <div className='banner'>
                        <img src={result} className="btn1"></img>
                        <div className='button-txt'>
                            <h2>선녀에게 가기</h2>
                        </div>
                        <img src={result} className="btn2" onClick={()=>{
                            $('div#result').removeClass('active');
                            $('div#result').addClass("display-none");
                            $('img#find').addClass("display-none");
                        }}></img>
                        <div className='button-txt2'>
                            <h2 onClick={()=>{
                            $('div#result').removeClass('active');
                            $('div#result').addClass("display-none");
                            $('img#find').addClass("display-none");
                        }}>수사 계속하기</h2>
                        </div>
                    <div className='banner-txt'>                
                        <p className='important'>{clue}</p>
                        <p>{explain}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}