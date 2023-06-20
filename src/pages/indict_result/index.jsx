import { useState, useEffect } from "react";
import styles from './paperResult.module.css';
import Axios from "axios";
import $ from 'jquery';

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

export default function Indict_Result(props) {
    const $contents = document.getElementById('contents')

    const background = '/image/IndictResult/background/background-long.png';
    const background_top = '/image/IndictResult/background/background_top.png';
    const background_bottom = '/image/IndictResult/background/background_bottom.png';
    const document_FairyNWoodcutter_long = '/image/IndictResult/source/document_FairyNWoodcutter_long-1.png';
    const prevbutton_click = '/image/IndictResult/ui/Paper_result_prevbutton_click.png';
    const prevbutton_normal = '/image/IndictResult/ui/Paper_result_prevbutton_normal.png';
    const go_court_click = '/image/IndictResult/ui/Paper_result_go_court_click.png';
    const go_court_normal = '/image/IndictResult/ui/Paper_result_go_court_normal.png';
    const stamp_link = '/image/IndictResult/source/stamp.png';
    const stamp_webp_link = '/image/IndictResult/source/paper_result_stamp.webp';

    const [prevbutton_src, click_prevbutton] = useState(prevbutton_normal);
    const [go_court_src, click_go_court] = useState(go_court_normal);

    let data;
    let [accused, setAccused] = useState('');
    let [accused_job, setAccused_job] = useState('');
    let [accused_address, setAccused_address] = useState('');

    let [sin_src, setSin_src] = useState(['', '', '']);
    let [sin_summary, setSin_summary] = useState(['', '', '']);
    let [sin_name, setSin_name] = useState(['', '', '']);
    let [sin_relative, setSin_relative] = useState(['', '', '']);
    let [sin_title, setSin_title] = useState(['', '', '']);
    let [sin_detail, setSin_detail] = useState(['', '', '']);
    let [sin_result, setSin_result] = useState(['', '', '']);

    let [content_1, setContent1] = useState(['', '', '']);
    let [content_2, setContent2] = useState(['', '', '']);
    let [content_3, setContent3] = useState(['', '', '']);
    let [content_4, setContent4] = useState(['', '', '']);

    let [sin_name_1, setSin_name_1] = useState('');
    let [sin_name_2, setSin_name_2] = useState('');
    let [sin_name_3, setSin_name_3] = useState('');

    let [Loop, setLoop] = useState(0);
    let [select_list, set_select_list] = useState([]);
    let [content, setContent] = useState([]);


    let accused_info = [];
    let crime_list = [];
    let name_list = [];
    let select_keySet = [];
    // let select_list = [];

    function setImageLink(sinName, idx) {
        if (sinName == '재물손괴죄') {
            sin_src[idx] = `/image/IndictResult/source/document_FairyMWoodcutter_01.png`;
        } else if (sinName == '감금죄') {
            sin_src[idx] = `/image/IndictResult/source/document_FairyMWoodcutter_02.png`;
        } else if (sinName == '추행 등 목적 약취 유인죄') {
            sin_src[idx] = `/image/IndictResult/source/document_FairyMWoodcutter_03.png`;
        }
    }

    function setSinList() {
        crime_list = data['crime'];
        select_list = data['selectedCrime'];
        name_list = data['nameList'];

        for (let i = 0; i < Object.keys(select_list).length; i++) {
            select_keySet.push(Object.keys(select_list)[i]);
        }

        console.log(select_list);
        console.log(select_keySet);

        let sinName;
        let flag;
        
        for (let i = 0; i < Object.keys(select_list).length; i++) {
            flag = Object.keys(select_list)[i];
            // console.log(flag);
            sinName = select_list[select_keySet[i]];
            console.log("죄목은 " + sinName);

            if (i == 0) {
                setSin_name_1(sinName);
                setImageLink(sinName, i);
                sin_summary[i] = name_list[flag];
                sin_relative[i] = crime_list[sinName]['relative'];
                sin_title[i] = crime_list[sinName]['title'];
                sin_detail[i] = crime_list[sinName]['detail'];
                sin_result[i] = crime_list[sinName]['result'];
            //     // sin_content[i] = crime_list[sinName]['content'];
            }
            else if (i == 1) {
                setSin_name_2(sinName);
                setImageLink(sinName, i);
                sin_summary[i] = name_list[flag];
                sin_relative[i] = crime_list[sinName]['relative'];
                sin_title[i] = crime_list[sinName]['title'];
                sin_detail[i] = crime_list[sinName]['detail'];
                sin_result[i] = crime_list[sinName]['result'];
                // sin_content[i] = crime_list[sinName]['content'];
            }
            else {
                setSin_name_3(sinName);
                setImageLink(sinName, i);
                sin_summary[i] = name_list[flag];
                sin_relative[i] = crime_list[sinName]['relative'];
                sin_title[i] = crime_list[sinName]['title'];
                sin_detail[i] = crime_list[sinName]['detail'];
                sin_result[i] = crime_list[sinName]['result'];
                // sin_content[i] = crime_list[sinName]['content'];
            }
        }

        console.log(sin_summary);
        setLoop(Object.keys(select_list).length);
        console.log("loop length is" + Loop)
        if (Loop == 1) {
            $(document).find("#sinContainer2").hide();
            $(document).find("#sinContainer3").hide();
        } else if (Loop == 2) {
            $(document).find("#sinContainer3").hide();
        }
    }

    function setData() {
        //if chapter == 1
        setAccused('나무꾼');
        accused_info = data['accused']['나무꾼']['info'].split(', ');
        setAccused_job(accused_info[0]);
        setAccused_address(accused_info[1]);
        console.log(accused_address);
        
        setSinList();  
    }

    //axios
    const chapter = 1;

    useEffect(() => {
        Axios.get('/document/result/' + chapter)
            .then(response => {
                data = response.data;
                console.log(data);
                console.log(data['accused'])
                setData();
            })
            .catch(error => console.log(error))
    });

    //event function
    function onClick_prev() {
        click_prevbutton(prevbutton_click);
        props.onPrev();
    }

    function onClick_go_court() {
        click_go_court(go_court_click);
        props.onSubmit();
    }

    $('#document_container').scroll(function(){
        var scrT = $('#document_container').scrollTop();
        // console.log(scrT); //스크롤 값 확인용
        if(scrT >= 1300){
            //스크롤이 끝에 도달했을때 실행될 이벤트
            $("#stamp").on("load", function () {
                  setTimeout(function () {
                    $("#stamp").off("load");
                    $("#stamp").attr("src", '/image/IndictResult/source/stamp.png');
                  }, 200);
                });
            $("#stamp").attr("src", '/image/IndictResult/source/paper_result_stamp.webp');

            $('#document_container').off("scroll");
        }
    })

    return (
        <div>
            <div className={styles.container}>
                <img src={background} className={styles.background} />
            </div>
            <img src={prevbutton_src} className={styles.prevbutton} onClick={onClick_prev}/>
            <img src={go_court_src} className={styles.go_court} onClick={onClick_go_court}/>
            <div className={styles.wrap}>
            <div className={styles.barWrap}><div class={styles.bar}></div></div>
            <div className={styles.document_container} id="document_container">
                <img src={background_top} className={styles.topSpace} />
                <img src={document_FairyNWoodcutter_long} className={styles.document_FairyWoodcutter}/>
                <div className={styles.position_setting}>
                    <div className={styles.title}>공소장</div>
                    <div className={styles.receiver}>수신자 한양중앙지방법원<br/>검사는 아래와 같이 공소를 제기합니다</div>
                    <div className={styles.subtitle0}>0. 공소 내용</div>
                    <div className={styles.event1}>{sin_summary[0]}</div>
                    <div className={styles.event2}>{sin_summary[1]}</div>
                    <div className={styles.event3}>{sin_summary[2]}</div>
                    <img src={sin_src[0]} className={styles.sin1} />
                    <img src={sin_src[1]} className={styles.sin2} />
                    <img src={sin_src[2]} className={styles.sin3} />
                    <div className={styles.subtitle1}>1. 피고인 관련사항</div>
                    <div className={styles.th1}>피고인</div>
                    <div className={styles.td1}>{accused} <br/><br/>{accused_address}<br/><br/>{accused_job}</div>
                    <div className={styles.th2}>죄명</div>
                    <div className={styles.th3}>적용법조</div>

                    <div className={styles.td2Container}>
                        <div className={styles.td2_1}>{sin_name_1}</div>
                        <div className={styles.td2_2}>{sin_name_2}</div>
                        <div className={styles.td2_3}>{sin_name_3}</div>
                    </div>
                    <div className={styles.td3Container}>
                        <div className={styles.td3_1}>{sin_relative[0]}</div>
                        <div className={styles.td3_2}>{sin_relative[1]}</div>
                        <div className={styles.td3_3}>{sin_relative[2]}</div>
                    </div>

                    <div className={styles.subtitle2}>2. 공소 사실</div>
                    <div className={styles.subtitle2_1}>범죄 사실</div>
                    <div className={styles.sinWrap}>

                    {/* <div id="contents"></div> */}
                    <div className={styles.sinContainer} id="sinContainer1">
                        <div className={styles.sinSubContainer}>
                            <div className={styles.sin_related_1}>1. 피고인 {accused}의 {sin_name_1}</div>
                            <div className={styles.sin_detail_1}>피고인 {accused}은 xxxx.xx.x일 아래와 같이 {sin_result[0]}</div>
                        </div>
                        <div className={styles.sinSubContainer}>
                            <div>가. {sin_title[0]}</div>
                            <div className={styles.sinDetail}>피고인 {accused}은 {sin_detail[0]}<br/><br/>이로써 피고인 {accused}은 {sin_result[0]}</div>
                        </div>
                    </div>
                    <div className={styles.sinContainer} id="sinContainer2">
                        <div className={styles.sinSubContainer}>
                            <div className={styles.sin_related_2}>2. 피고인 {accused}의 {sin_name_2}</div>
                            <div className={styles.sin_detail_2}>피고인 {accused}은 xxxx.xx.x일 아래와 같이 {sin_result[1]}</div>
                        </div>
                        <div className={styles.sinSubContainer}>
                            <div>가. {sin_title[1]}</div>
                            <div className={styles.sinDetail}>피고인 {accused}은 {sin_detail[1]}<br/><br/>이로써 피고인 {accused}은 {sin_result[1]}</div>
                        </div>
                    </div>
                    <div className={styles.sinContainer} id="sinContainer3">
                        <div className={styles.sinSubContainer}>
                            <div className={styles.sin_related_3}>3. 피고인 {accused}의 {sin_name_3}</div>
                            <div className={styles.sin_detail_3}>피고인 {accused}은 xxxx.xx.x일 아래와 같이 {sin_result[2]}</div>
                        </div>
                        <div className={styles.sinSubContainer}>
                            <div>가. {sin_title[2]}</div>
                            <div className={styles.sinDetail}>피고인 {accused}은 {sin_detail[2]}<br/><br/>이로써 피고인 {accused}은 {sin_result[2]}</div>
                        </div>
                    </div>
                    </div>
                    <img src='' className={styles.stamp} id="stamp"/>
                    <div className={styles.end}>피고인 {accused}에게 위와 같은 죄명으로 공소를 제기합니다.</div>
                    <img src={background_bottom} className={styles.bottomSpace} />
                </div>
            </div>
            </div>
        </div>
    );
}
