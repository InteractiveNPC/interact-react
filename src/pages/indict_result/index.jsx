import { useState, useEffect } from "react";
import styles from './paperResult.module.css';
import Axios from "axios";
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

export default function Indict_Result() {
    const background = '/image/IndictResult/background/background-long.png';
    const document_FairyNWoodcutter_long = '/image/IndictResult/source/document_FairyNWoodcutter_long-1.png';
    const prevbutton_click = '/image/IndictResult/ui/Paper_result_prevbutton_click.png';
    const prevbutton_normal = '/image/IndictResult/ui/Paper_result_prevbutton_normal.png';
    const go_court_click = '/image/IndictResult/ui/Paper_result_go_court_click.png';
    const go_court_normal = '/image/IndictResult/ui/Paper_result_go_court_normal.png';
    const sin1_1 = '/image/IndictResult/source/document_FairyMWoodcutter_01.png';
    const sin1_2 = '/image/IndictResult/source/document_FairyMWoodcutter_02.png';
    const sin1_3 = '/image/IndictResult/source/document_FairyMWoodcutter_03.png';
    const sin2_1 = '/image/IndictResult/source/document_TwoSisters_01.png';
    const sin2_2 = '/image/IndictResult/source/document_TwoSisters_02.png';
    const sin2_3 = '/image/IndictResult/source/document_TwoSisters_03.png';

    const [prevbutton_src, click_prevbutton] = useState(prevbutton_normal);
    const [go_court_src, click_go_court] = useState(go_court_normal);

    let data;
    let [accused, setAccused] = useState('');
    let [accused_job, setAccused_job] = useState('');
    let [accused_address, setAccused_address] = useState('');

    let [sin_src, setSin_src] = useState(['', '', '']);
    let [sin_summary, setSin_summary] = useState(['', '', '']);
    let [sin_name_1, setSin_name_1] = useState('');
    let [sin_name_2, setSin_name_2] = useState('');
    let [sin_name_3, setSin_name_3] = useState('');
    let [sin_relative_1, setSin_relative_1] = useState('');
    let [sin_relative_2, setSin_relative_2] = useState('');
    let [sin_relative_3, setSin_relative_3] = useState('');
    let [sin_title_1, setSin_title_1] = useState('');
    let [sin_title_2, setSin_title_2] = useState('');
    let [sin_title_3, setSin_title_3] = useState('');
    let [sin_detail_1, setSin_detail_1] = useState('');
    let [sin_detail_2, setSin_detail_2] = useState('');
    let [sin_detail_3, setSin_detail_3] = useState('');
    let [sin_result_1, setSin_result_1] = useState('');
    let [sin_result_2, setSin_result_2] = useState('');
    let [sin_result_3, setSin_result_3] = useState('');
    let [sin_related_1, setSin_related_1] = useState('');
    let [sin_related_2, setSin_related_2] = useState('');
    let [sin_related_3, setSin_related_3] = useState('');
    let [sin_content_1, setSin_content_1] = useState('');
    let [sin_content_2, setSin_content_2] = useState('');
    let [sin_content_3, setSin_content_3] = useState('');

    let [Loop, setLoop] = useState();
    let [select_list, set_select_list] = useState([]);


    let accused_info = [];
    let crime_list = [];
    // let select_list = [];

    function setImageLink(name, idx) {
        if (name == '재물손괴죄') {
            sin_src[idx] = `/image/IndictResult/source/document_FairyMWoodcutter_01.png`;
            sin_summary[idx] = `공소사건 0${idx + 1}. 갑자기 사라진 선녀의 날개옷`;
        } else if (name == '감금죄') {
            sin_src[idx] = `/image/IndictResult/source/document_FairyMWoodcutter_02.png`;
            sin_summary[idx] = `공소사건 0${idx + 1}. 밤새 내내 갇혀있던 선녀`;
        } else if (name == '추행등목적약취유인죄') {
            sin_src[idx] = `/image/IndictResult/source/document_FairyMWoodcutter_03.png`;
            sin_summary[idx] = `공소사건 0${idx + 1}. 나무꾼에게 강요받아 이루어진 결혼`;
        }
    }

    function setSinList() {
        crime_list = data['crime'];
        select_list = data['selectedCrime'];
        console.log("crime_list" + Object.keys(select_list).length);

        let sinName;
        let flag;
        for (let i = 0; i < Object.keys(select_list).length; i++) {
            flag = Object.keys(select_list)[i];
            console.log(flag);
            sinName = select_list[flag];
            console.log(sinName);

            if (i == 0) {
                setSin_name_1(sinName);
                setImageLink(sinName, i);
                setSin_relative_1(crime_list[sinName]['relative']);
                setSin_title_1(crime_list[sinName]['title']);
                setSin_detail_1(crime_list[sinName]['detail']);
                setSin_result_1(crime_list[sinName]['result']);
                setSin_content_1(crime_list[sinName]['content']);
                // setSin_related_1(crime_list[Object.keys(crime_list)[i]]['related']);
                // console.log(sin_related_1);
            }
            else if (i == 1) {
                setSin_name_2(sinName);
                setImageLink(sinName, i);
                setSin_relative_2(crime_list[sinName]['relative']);
                setSin_title_2(crime_list[sinName]['title']);
                setSin_detail_2(crime_list[sinName]['detail']);
                setSin_result_2(crime_list[sinName]['result']);
                setSin_content_2(crime_list[sinName]['content']);
                // setSin_related_2(crime_list[Object.keys(crime_list)[i]]['related']);
            }
            else {
                setSin_name_3(sinName);
                setImageLink(sinName, i);
                setSin_relative_3(crime_list[sinName]['relative']);
                setSin_title_3(crime_list[sinName]['title']);
                setSin_detail_3(crime_list[sinName]['detail']);
                setSin_result_3(crime_list[sinName]['result']);
                setSin_content_3(crime_list[sinName]['content']);
                // setSin_related_3(crime_list[Object.keys(crime_list)[i]]['related']);
            }
        } 
        if(Object.keys(select_list).length == 1) {
            console.log(1111);
            setLoop(() => {
                return(
                    <div className={styles.sinContainer}>
                        <div className={styles.sinSubContainer}>
                            <div className={styles.sin_related_1}>1. 피고인 {accused}의 {sin_name_1}</div>
                            <div className={styles.sin_detail_1}>피고인 {accused}은 xxxx.xx.x일 아래와 같이 {sin_result_1}</div>
                        </div>
                        <div className={styles.sinSubContainer}>
                            <div>가. {sin_title_1}</div>
                            <div className={styles.sinDetail}>피고인 {accused}은 {sin_detail_1}<br/><br/>이로써 피고인 {accused}은 {sin_result_1}</div>
                        </div>
                    </div>
                );
            });
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
    useEffect(() => {
        Axios.get('/document/result/1')
        .then(response => {
            data = response.data;
            console.log(data);
    
            setData();
        })
    }, []);

    //event function
    function onClick_prev() {
        click_prevbutton(prevbutton_click);
    }

    function onClick_go_court() {
        click_go_court(go_court_click);
    }

    return (
        <div>
            <div className={styles.container}>
                <img src={background} className={styles.background} />
            </div>
            <img src={prevbutton_src} className={styles.prevbutton} onClick={onClick_prev}/>
            <img src={go_court_src} className={styles.go_court} onClick={onClick_go_court}/>
            <div className={styles.wrap}>
            <div className={styles.barWrap}><div class={styles.bar}></div></div>
            <div className={styles.document_container}>
                <img src={document_FairyNWoodcutter_long} className={styles.document_FairyWoodcutter}/>
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

                <div className={styles.td2_1}>{sin_name_1}</div>
                <div className={styles.td2_2}>{sin_name_2}</div>
                <div className={styles.td2_3}>{sin_name_3}</div>

                <div className={styles.th3}>적용법조</div>
                <div>
                    <div className={styles.td3_1}>{sin_relative_1}</div>
                    <div className={styles.td3_2}>{sin_relative_2}</div>
                    <div className={styles.td3_3}>{sin_relative_3}</div>
                </div>
                <div className={styles.subtitle2}>2. 공소 사실</div>
                <div className={styles.subtitle2_1}>범죄 사실</div>
                <div className={styles.sinWrap}>
                <Loop />
                {/* <div className={styles.sinContainer}>
                    <div className={styles.sinSubContainer}>
                        <div className={styles.sin_related_1}>1. 피고인 {accused}의 {sin_name_1}</div>
                        <div className={styles.sin_detail_1}>피고인 {accused}은 xxxx.xx.x일 아래와 같이 {sin_result_1}</div>
                    </div>
                    <div className={styles.sinSubContainer}>
                        <div>가. {sin_title_1}</div>
                        <div className={styles.sinDetail}>피고인 {accused}은 {sin_detail_1}<br/><br/>이로써 피고인 {accused}은 {sin_result_1}</div>
                    </div>
                </div>
                <div className={styles.sinContainer}>
                    <div className={styles.sinSubContainer}>
                        <div className={styles.sin_related_2}>2. 피고인 {accused}의 {sin_name_2}</div>
                        <div className={styles.sin_detail_2}>피고인 {accused}은 xxxx.xx.x일 아래와 같이 {sin_result_2}</div>
                    </div>
                    <div className={styles.sinSubContainer}>
                        <div>가. {sin_title_2}</div>
                        <div className={styles.sinDetail}>피고인 {accused}은 {sin_detail_2}<br/><br/>이로써 피고인 {accused}은 {sin_result_2}</div>
                    </div>
                </div>
                <div className={styles.sinContainer}>
                    <div className={styles.sinSubContainer}>
                        <div className={styles.sin_related_3}>3. 피고인 {accused}의 {sin_name_3}</div>
                        <div className={styles.sin_detail_3}>피고인 {accused}은 xxxx.xx.x일 아래와 같이 {sin_result_3}</div>
                    </div>
                    <div className={styles.sinSubContainer}>
                        <div>가. {sin_title_3}</div>
                        <div className={styles.sinDetail}>피고인 {accused}은 {sin_detail_3}<br/><br/>이로써 피고인 {accused}은 {sin_result_3}</div>
                    </div>
                </div> */}
                </div>
                <div className={styles.end}>피고인 {accused}에게 위와 같은 죄명으로 공소를 제기합니다.</div>
            </div>
            </div>
        </div>
    );
}
