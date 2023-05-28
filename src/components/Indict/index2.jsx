import React, { useState,  useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Indict2 from './index2'

import styles from '../../styles/indict2.css';

function Indict(){
  
  const [imageOpacity, setImageOpacity] = useState({ 
    check1: 0, check2: 0, check3: 0,
  crimenormal: 1 });

  useEffect(() => {
    const updateImageOpacity = () => {
      const images = document.querySelectorAll('.my-image');

      images.forEach((image) => {
        const id = image.getAttribute('data-id');
        const id2 = image.getAttribute('data-id2');
        image.style.opacity = imageOpacity[id];
        image.style.opacity = imageOpacity[id2];
      });
    };

    updateImageOpacity(); 

  }, [imageOpacity]);

    
    const decreaseOpacity = (id) => {
      if (imageOpacity[id] == 1) {
        setImageOpacity((prevOpacity) => ({
          ...prevOpacity,
          [id]: prevOpacity[id] - 1,
        }));
      }
  
      if (imageOpacity[id] == 0) {
        setImageOpacity((prevOpacity) => ({
          ...prevOpacity,
          [id]: prevOpacity[id] + 1,
        }));
      }
    };
 


  const selectComponent = {
    second: <Indict2 />
  };

  const background = '/image/indict/illust_공소장작성.png';
  const CrimeScenebg = '/image/indict/CrimeScene_picture.png';
  const crime01 = '/image/indict/info_사건현장_01.png';
  const sister = '/image/indict/proof_선녀언니.png'
  const deer = '/image/indict/proof_사슴.png'
  const mom = '/image/indict/proof_나무꾼엄마.png'
  const cloth = '/image/indict/proof_날개옷.png'
  const book = '/image/indict/책.png';
  const proofpic = '/image/indict/proof_picture.png';
  const prooftextimg = '/image/indict/proof_text.png';
  const crimenormal = '/image/indict/crime_normal.png';
  const checkbox = '/image/indict/checkbox.png'
  const check = '/image/indict/check.png'
  const gongso1 = '/image/indict/공소사건 01_click.png'
  const gongso2 = '/image/indict/공소사건 02_click.png'
  const gongso1_normal = '/image/indict/공소사건 01_normal.png'
  const gongso2_normal = '/image/indict/공소사건 02_normal.png'
  const indict_normal = '/image/indict/indict_normal.png'
  const indict_click = '/image/indict/indict_click.png'
  const crime_click = '/image/indict/crime_click.png'
  const title = "공소사건 01. 갑자기 사라진 선녀의 날개옷";
  const proof1 = "(임시 텍스트입니다. 최대 3줄입니다.)";
  const proof2 = "(임시 텍스트입니다. 최대 3줄입니다.)";
  const proof3 = "(임시 텍스트입니다. 최대 3줄입니다.)";
  const proof4 = "(임시 텍스트입니다. 최대 3줄입니다.)";
  const crimeTitle1 = "죄목1";
  const crimeTitle2 = "죄목2";
  const crimeTitle3 = "죄목3";
  const giso = "기소"
  const bulgiso = "불기소"
  const crime1 = "형법 제366조(재물손괴등) 타인의 재물, 문서 또는 전자기록등 특수매체기록을 손괴 또는 은닉 기타 방법으로 기 효용을 해한 자는 3년이하의 징역 또는 700만원 이하의 벌금에 처한다. 임시 텍스트입니다."
  const crime2 = "형법 제366조(재물손괴등) 타인의 재물, 문서 또는 전자기록등 특수매체기록을 손괴 또는 은닉 기타 방법으로 기 효용을 해한 자는 3년이하의 징역 또는 700만원 이하의 벌금에 처한다. 임시 텍스트입니다."
  const crime3 = "형법 제366조(재물손괴등) 타인의 재물, 문서 또는 전자기록등 특수매체기록을 손괴 또는 은닉 기타 방법으로 기 효용을 해한 자는 3년이하의 징역 또는 700만원 이하의 벌금에 처한다. 임시 텍스트입니다."
 
  return (
    <div className="Indict">

      <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
      <BrowserRouter>
        <Routes>
          <Route path="./index2" component={<Indict2 />} />
        </Routes>
          <Link to="./index2">
            <img src={gongso2}
            onClick={()=>{
              alert("공소사건 02를 클릭");
          }}   
            id="gongso2"/></Link>
      </BrowserRouter>
      <img src={gongso1_normal}  id="gongso1" />
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="proof1">
        <p>{proof1}</p>
      </div>
      <div className="proof2">
        <p>{proof2}</p>
      </div>
      <div className="proof3">
        <p>{proof3}</p>
      </div>
      <div className="proof4">
        <p>{proof4}</p>
      </div>

      <div className="giso">
        <p>{giso}</p>
      </div>
      <div className="bulgiso">
        <p>{bulgiso}</p>
      </div>

      <div className="crimeTexts">
        <div className="crime1">
        <p>{crime1}</p>
        </div>
        <div className="crime2">
        <p>{crime2}</p>
        </div>
        <div className="crime3">
        <p>{crime3}</p>
        </div>
      </div>

      <div className="crimeTitles">
        <div className="crimeTitle1">
        <p>{crimeTitle1}</p>
        </div>
        <div className="crimeTitle2">
        <p>{crimeTitle2}</p>
        </div>
        <div className="crimeTitle3">
        <p>{crimeTitle3}</p>
        </div>
      </div>

      {/* checkbox Event */}
      <div className="imgs">
        <img src={crime01} id="crime01" />
        <img src={CrimeScenebg} id="crimescene" />
        <img src={book} id="book" />

        <img src={checkbox} id="checkbox1" />
        <img src={checkbox} id="checkbox2" />
        <img src={checkbox} id="checkbox3" />

        <img src={check}  
        onClick={() => decreaseOpacity('check1', 'crimenormal1')}
        data-id="check1"
        className="my-image"
        id="check1" />
        
        <img src={crime_click}
        data-id="check1"
        className="my-image"
        id="crime_click1" />

        <img src={check} 
        onClick={() => decreaseOpacity('check2')}
        className="my-image"
        data-id="check2"
         id="check2">
         </img>

        <img src={crime_click}
        data-id="check2"
        className="my-image"
        id="crime_click2" />

        
        <img src={check}
        onClick={() => decreaseOpacity('check3')}
        className="my-image"
        data-id="check3"
        id="check3" />

        <img src={crime_click}
        data-id="check3"
        className="my-image"
        id="crime_click3" /> 

      {/* checkbox Event */}


        <img src={sister} id="sister" />
        <img src={deer} id="deer" />
        <img src={mom} id="mom" />
        <img src={cloth} id="cloth" />
        <img src={proofpic} id="proofpic1"/>
        <img src={proofpic} id="proofpic2"/>
        <img src={proofpic} id="proofpic3"/>
        <img src={proofpic} id="proofpic4"/>
        <img src={prooftextimg} id = "prTextImg1"/>
        <img src={prooftextimg} id = "prTextImg2"/>
        <img src={prooftextimg} id = "prTextImg3"/>
        <img src={prooftextimg} id = "prTextImg4"/>
        <img src={crimenormal}
        data-id2="crimenormal" id = "crimenormal1"/>
        <img src={crimenormal} id = "crimenormal2"/>
        <img src={crimenormal} id = "crimenormal3"/>
        <img src={indict_normal} id = "indict_normal"/>
        <img src={indict_normal} id = "indict_normal2"/>
        <div className="bg">
          <img src={background} id="background" />
        </div>
      </div>

     </div>
   );


}

export default Indict;

