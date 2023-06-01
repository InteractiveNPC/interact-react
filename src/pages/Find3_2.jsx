import {useSpring, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';
import styles from '../styles/findClue3_2.css';
import $ from 'jquery';
//fade 적용x버전

export default function Find(){
    const back = 'image/Investigation/Talk/Background/TwoSisters/illust_TwoSisters_police_room.png';
    const fadeT = 2000;

    const popup = '/image/Investigation/Talk/UI/proof_find_info_background.png';
    const button = '/image/Investigation/Talk/UI/proof_find_info_button_normal.png';
    const hButton = '/image/Investigation/Talk/UI/proof_find_info_button_click.png';
    const popup2 = '/image/Investigation/Talk/UI/ScriptBackground.png';
    const name = '/image/Investigation/Talk/UI/Namebox_02.png';
    const clue = "시체 검안서처럼 보입니다. 장화의 이름이 쓰여있습니다.";
    const paper2 = '/image/evidence/paper_01.png';
    const paper3 = '/image/evidence/paper_02.png';
    const paper4 = '/image/evidence/paper_03.png';
    const paper5 = '/image/evidence/paper_04.png';

    const paperPos2 = useSpring({x:0, y:0});
    const bindPaperPos2 = useDrag((params)=>{
        paperPos2.x.set(params.offset[0]);
        paperPos2.y.set(params.offset[1]);
    });
    const paperPos3 = useSpring({x:0, y:0});
    const bindPaperPos3 = useDrag((params)=>{
        paperPos3.x.set(params.offset[0]);
        paperPos3.y.set(params.offset[1]);
    });
    const paperPos4 = useSpring({x:0, y:0});
    const bindPaperPos4 = useDrag((params)=>{
        paperPos4.x.set(params.offset[0]);
        paperPos4.y.set(params.offset[1]);
    });
    const paperPos5 = useSpring({x:0, y:0});
    const bindPaperPos5 = useDrag((params)=>{
        paperPos5.x.set(params.offset[0]);
        paperPos5.y.set(params.offset[1]);
    });
    
    const openStep2 = () => {
        $('div#step1').addClass('display-none');
        $('div#step2').removeClass('display-none');
    }

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img src={back} style={{ position: "absolute"}}></img>
            <img id="find" src="/image/evidence/desk_paper.png" className='desk' onClick={()=>{
                $('div#background').fadeIn({fadeT});
                $('div#etc').addClass('display-none');
                $('img#find').fadeOut({fadeT});
            }}></img>
            
            <div id="background" className="display-none App">
                <div id="step1">
                    <img src={back}></img>
                    <img id='findE' src="/image/evidence/Certificatepaper.png" className="clue" onMouseOver={()=>{
                                $('img#findE').addClass('find');
                            }} onMouseLeave={()=>{
                                $('img#findE').removeClass('find');
                            }} onClick={()=>{
                                $('div#step1_1').fadeOut({fadeT});
                                setTimeout(() => {
                                    openStep2();
                                }, 2000);
                    }}></img>
                    <div id='step1_1'>
                        <animated.div {...bindPaperPos5()} className="obj5" style={{
                            x: paperPos5.x,
                            y: paperPos5.y
                        }}>
                            <img src={paper5} className="App-logo p5" />
                        </animated.div>
                        <animated.div {...bindPaperPos2()} className="obj2" style={{
                            x: paperPos2.x,
                            y: paperPos2.y
                        }}>
                            <img src={paper2} className="App-logo p2" />
                        </animated.div>
                        
                        <animated.div {...bindPaperPos4()} className="obj4" style={{
                            x: paperPos4.x,
                            y: paperPos4.y
                        }}>
                            <img src={paper4} className="App-logo p4" />
                        </animated.div>
                        <animated.div {...bindPaperPos3()} className="obj3" style={{
                            x: paperPos3.x,
                            y: paperPos3.y
                        }}>
                            <img src={paper3} className="App-logo p3" />
                        </animated.div>
                    </div>
                </div>
                    <img src={back}></img>
                <div id="step2" className="display-none">
                    <img src="/image/evidence/Certificatepaper.png" id="findE2" className="clue"
                        onMouseOver={()=>{
                            $('img#findE2').addClass('find');
                        }} onMouseLeave={()=>{
                            $('img#findE2').removeClass('find');
                        }} onClick={()=>{
                            $('div#step2').fadeOut({fadeT});
                            setTimeout(()=>{
                                $('div#result').fadeIn({fadeT});
                            }, 1000);
                    }}></img>
                </div>
                
            </div>
            <div id='result' className="display-none">
                <img src={back} style={{position:'absolute'}}></img>
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
                    }}>확인</h2>
                    <p className='banner-txt1'>{clue}</p>
                </div>
            </div>
            <div id='etc' className='etc' onClick={()=>{
                    $('div#pop').removeClass("display-none");
            }}>
            </div>
            <div id='pop' className='display-none'>
                <div onClick={()=>{
                    $('div#pop').addClass("display-none");
                }}>
                    <img src={popup2} className='banner2'></img>
                    <img src={name} className='namePos'></img>
                    <h2 className='banner-txtA'>검사</h2>
                    <h2 className='banner-txtB'>평범한 병풍이다. 뒤에는 아무것도 없는 듯하다.</h2>
                </div>
            </div>
        </div>
    );
}