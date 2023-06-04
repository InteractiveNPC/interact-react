import styles from '../styles/info.css';
import $ from 'jquery';

export default function Help(props){
    //const back = 'image/Investigation/Talk/Background/FairyNWoodcutter/illust_FairyNWoodcutter_office_back.png';
    const fadeT = 2000;

    const btn = 'image/Help/setting-credit/Setting_X.png';
    const info1='image/Help/start-help/Background_help_info01.png';
    const info2='image/Help/start-help/Background_help_info02.png';
    const info3='image/Help/start-help/Background_help_info03.png';
    
    const arrow1 = 'image/Help/start-help/help_info_arrow01.png';
    const arrow2 = 'image/Help/start-help/help_info_arrow02.png';
    const arrow3 = 'image/Help/start-help/help_info_arrow03.png';

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <div id='startH'>
                <div id='infoH'></div>
                <img src={btn} className='close' onClick={()=>{
                    $('div#startH').fadeOut({fadeT});
                    setTimeout(()=>{
                        $('div#step1').fadeIn({fadeT});
                    }, 1000);
                }}></img>
                <p className='textH0'>선녀의 원통함을 풀어주기 위한 수사를 진행하세요.</p>
            </div>
            <div id='step1' className='display-none' onClick={()=>{
                $('div#step1').fadeOut({fadeT});
                setTimeout(()=>{
                    $('div#step2').fadeIn({fadeT});
                }, 1000);
            }}>
                <img src={info1} className='infoWindow'></img>
                <img src={arrow1} id='arrow1'/>
                <p className='text1'>장소이동<br/>장소 이동 화살표나 드롭다운 버튼을 이용해 장소를 이동할 수 있습니다.</p>
            </div>

            <div id='step2' className='display-none' onClick={()=>{
                $('div#step2').fadeOut({fadeT});
                setTimeout(()=>{
                    $('div#step3').fadeIn({fadeT});
                }, 1000);
            }}>
                <img src={info2} className='infoWindow'></img>
                <img src={arrow2} id='arrow2'/>
                <p className='text2'>수사 기록<br/>수사의 진행도 및 등장인물들의 관계와 증거물에 대한 정보를 확인할 수 있습니다.</p>
                <p className='text3'>공소 작성<br/>수사 후, 수사 기록을 토대로 사건에 따른 죄목을 매칭하여 공소장을 작성할 수 있습니다. 공소장 작성 후 제출 시 재판 결과를 확인할 수 있습니다.</p>
            </div>

            <div id='step3' className='display-none' onClick={()=>{
                $('div#step3').fadeOut({fadeT});
            }}>
                <img src={info3} className='infoWindow'></img>
                <img src={arrow3} id='arrow3'/>
                <p className='text4'>도움말<br/>원활한 진행을 돕는 설명을 제공합니다.</p>
                <p className='text5'>환경설정<br/>소리 조절, 크레딧을 확인할 수 있습니다.</p>
            </div>
            
        </div>
    );
}