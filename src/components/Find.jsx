import {useSpring, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';
import styles from '../styles/findClue.css';

import $ from 'jquery';

export default function Find(){
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
            <img src="/image/clothes/collar.png" style={{ position: "absolute", top:"60%", left:"20%"}} onClick={()=>{
                $('div#background').removeClass("display-none");
                $('div#background').addClass("active");
            }}></img>

            <div id="background" className="display-none">
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
                    <img src="/image/clothes/ClothesEvidence.png" alt="find" className="clue" onClick={()=>{saveNote('선녀의 날개옷');}}></img>
                </div>
            </div>
        </div>
    );
}

/*

            <div id="background" className="display-none">
                <div id="step1">
                    <img src="/image/clothes/ClothesEvidence.png" className="clue" onClick={()=>{
                            $('div#step1').removeClass("active");
                            $('div#step1').addClass("display-none");
        
                            $('div#step2').removeClass("display-none");
                            $('div#step2').addClass("active");
                    }}></img>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="box, obj" >
                            <div><img src="/image/clothes/Clothes01.png"></img></div>
                        </div>
                    </Draggable>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="box, obj" >
                            <div><img src="/image/clothes/Clothes02.png"></img></div>
                        </div>
                    </Draggable>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="box, obj" >
                            <div><img src="/image/clothes/Clothes03.png"></img></div>
                        </div>
                    </Draggable>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="box, obj" >
                            <div><img src="/image/clothes/Clothes04.png"></img></div>
                        </div>
                    </Draggable>
                    <Draggable onDrag={(e, data) => trackPos(data)} >
                        <div className="box, obj" >
                            <div><img src="/image/clothes/Clothes05.png"></img></div>
                        </div>
                    </Draggable>
                    
                </div>
                <div id="step2" className="display-none">
                        <img src="/image/clothes/ClothesEvidence.png" alt="find" className="clue" onClick={()=>{
                            saveNote('선녀의 날개옷');
                        }}></img>
                </div>
            </div>
*/