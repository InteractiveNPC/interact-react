import styles from '../styles/info.css';
import $ from 'jquery';

export default function Help(props){
    //const back = 'image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_office_back.png';
    const fadeT = 2000;
    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <div id='beforeInfoH'>
                <div id='beforeH' onMouseOver={()=>{
                    setTimeout(()=>{
                        $('div#beforeInfoH').fadeIn({fadeT});
                    }, 2000);
                }}></div>
                <p className='infoTextH'>수사실에 누군가 찾아왔습니다.</p>
            </div>
        </div>
    );
}