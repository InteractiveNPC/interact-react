import React, { useState,  useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Indict2 from './index2'
import axios from 'axios';

import styles from '../../styles/twsister1.css';

function Indict(){
  const [ data, setData] = useState(
    {"chapter":1_0, "scene": 35, "name":"", "item": "",
     "court":"", "script": ""}
  )

  // useEffect( () => {
  //   axios.get('/chapter')
  //   .then(res => {
  //     console.log(res.data)
  //     setData({})
  //   })
  // })

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

  const background = '/image/indict/illust_indictbg.png';
  const CrimeScenebg = '/image/indict/CrimeScene_picture.png';
  const crime01 = '/image/indict/CrimeScene_picture_TwoSisters01.png';
  const hairpin = '/image/indict/proof_Hairpin.png'
  const maid = '/image/indict/Maid.png'
  const corpse = '/image/indict/proof_Corpsepaper.png'
  const tiger = '/image/indict/proof_tiger.png'
  const bae = '/image/indict/proof_Mr.Bae.png'
  const book = '/image/indict/book.png';
  const proofpic = '/image/indict/proof_picture.png';
  const prooftextimg = '/image/indict/proof_text.png';
  const crimenormal = '/image/indict/crime_normal.png';
  const checkbox = '/image/indict/checkbox.png'
  const check = '/image/indict/check.png'

  const indict_normal = '/image/indict/indict_normal.png'
  const indict_click = '/image/indict/indict_click.png'
  const crime_click = '/image/indict/crime_click.png'
  const title = "공소사건 01. 홍련의 의문스러운 자살";
  const proof1 = "(임시 텍스트입니다. 최대 3줄입니다.) 나무꾼은 사건 장소에 우연히 갔다고 주장하지만, 선녀 언니의 증언으로 사건 장소는 숨겨진 장소로 우연히 갈 수 없는 장소라는 사실이 밝혀졌습니다.";
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

      <div className="title" >
        <p>{title}</p>
      </div>
      <div className="proof1">
        <p>{proof1}</p>
      </div>
      <div className="proof2">
        <p>{proof2}</p>
      </div>
      {/* <div className="proof3">
        <p>{proof3}</p>
      </div>
      <div className="proof4">
        <p>{proof4}</p>
      </div> */}

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
        <img src={crime01} id="crime01"/>
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


        <img src={hairpin} id="sister" />
        <img src={tiger} id="deer" />
        <img src={proofpic} id="proofpic1"/>
        <img src={proofpic} id="proofpic2"/>

        <img src={prooftextimg} id = "prTextImg1"/>
        <img src={prooftextimg} id = "prTextImg2"/>
 
        <img src={crimenormal}
        data-id2="crimenormal" id = "crimenormal1"/>
        <img src={crimenormal} id = "crimenormal2"/>
        <img src={crimenormal} id = "crimenormal3"/>
        <img src={indict_normal} id = "indict_normal"/>
        <img src={indict_normal} id = "indict_normal2"/>
        <div className="bg">
          <img src={background} id="background" 
          style={{filter: "brightness(80%)",
          zIndex: 1}}/>
        </div>
      </div>

     </div>
   );


}

export default Indict;

