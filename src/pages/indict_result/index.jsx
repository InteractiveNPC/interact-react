import { useState } from "react";
import styles from './paperResult.module.css';
import Axios from "axios";


export default function Indict_Result() {
    const $sinContainer = document.getElementById('sinContainer');

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

    let [sin_name_1, setSin_name_1] = useState('');
    let [sin_name_2, setSin_name_2] = useState('');
    let [sin_name_3, setSin_name_3] = useState('');
    let [sin_relative_1, setSin_relative_1] = useState('');
    let [sin_relative_2, setSin_relative_2] = useState('');
    let [sin_relative_3, setSin_relative_3] = useState('');

    let accused_info = [];
    let crime_list = [];
    let sin_list = '';

    function setSinList() {
        crime_list = data['crime'];
        console.log(Object.keys(crime_list).length);

        for (let i = 0; i < Object.keys(crime_list).length; i++) {
            if (i == 0) {
                setSin_name_1(Object.keys(crime_list)[i]);
                setSin_relative_1(crime_list[Object.keys(crime_list)[i]]['relative']);
            }
            else if (i == 1) {
                setSin_name_2(Object.keys(crime_list)[i]);
                setSin_relative_2(crime_list[Object.keys(crime_list)[i]]['relative']);
            }
            else {
                setSin_name_3(Object.keys(crime_list)[i]);
                setSin_relative_3(crime_list[Object.keys(crime_list)[i]]['relative']);
            }
        }
        console.log(sin_list);
    }

    function setData() {
        console.log(data);
        
        //if chapter == 1
        setAccused('나무꾼');
        accused_info = data['accused']['나무꾼']['info'].split(', ');
        setAccused_job(accused_info[0]);
        setAccused_address(accused_info[1]);
        
        setSinList();   
    }

    //axios
    Axios.get('document/result/1', {
    }).then(function (response) {
        console.log(JSON.stringify(response.data));
        data = response.data;
        setData()
    })

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
            <div className={styles.document_container}>
                <img src={document_FairyNWoodcutter_long} className={styles.document_FairyWoodcutter}/>
                <div className={styles.title}>공소장</div>
                <div className={styles.receiver}>수신자 한양중앙지방법원<br/>검사는 아래와 같이 공소를 제기합니다</div>
                <div className={styles.subtitle0}>0. 공소 내용</div>
                <div className={styles.event1}>공소 사건 01. 갑자기 사라진 선녀의 날개옷</div>
                <div className={styles.event2}>사건2. 사라진 날개옷</div>
                <div className={styles.event3}>사건3. 사라진 날개옷</div>
                <img src={sin1_1} className={styles.sin1} />
                <img src={sin1_2} className={styles.sin2} />
                <img src={sin1_3} className={styles.sin3} />
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
                <div className={styles.sinDetail}>json 내용이 들어갈 쟈ㅏ리이비낟</div>
            </div>
            
        </div>
    );
}
