import React, { useState,  useEffect } from "react";
import { effectPlay } from "../../services/audioManager";
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

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleClick_change = () => {
      setIsClicked(!isClicked);
    };
    
    const [isImageChanged, setIsImageChanged] = useState(false);
      const [isImageChanged2, setIsImageChanged2] = useState(false);
    
      const handleClick = () => {
        setIsImageChanged(prevState => !prevState);
      };

      const handleClick2 = () => {
        setIsImageChanged2(prevState => !prevState);
      };
      const getImageSource = () => {
        if (isImageChanged) {
          return '/image/indict/indict_click.png';
        } else {
          return '/image/indict/indict_normal.png';
        }
      };
      const getImageSource2 = () => {
        if (isImageChanged2) {
          return '/image/indict/indict_click.png';
        } else {
          return '/image/indict/indict_normal.png';
        }
      };


  const selectComponent = {
    second: <Indict2 />
  };

  const background = '/image/indict/illust_indictbg.png';
  const CrimeScenebg = '/image/indict/CrimeScene_picture.png';
  const crime01 = '/image/indict/CrimeScene_picture_TwoSisters02.png';
  const hairpin = '/image/indict/proof_Hairpin.png'
  const maid = '/image/indict/proof_Maid.png'
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
  const title = "공소사건 02. 자매를 지속해서 학대했던 허씨부인";
  const proof1 = "(임시 텍스트입니다. 최대 3줄입니다. 2222)";
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

      <div className="title2">
        <p>{title}</p>
      </div>
      <div className="proof1">
        <p>{proof1}</p>
      </div>
      <div className="proof2">
        <p>{proof2}</p>
      </div>
      
      <div>
      <img
        id = "paper_make"
        src={
          isClicked
            ? '/image/indict/paper_make_button_click.png'
            : isHovered
            ? '/image/indict/paper_make_button_hover.png'
            : '/image/indict/paper_make_button_normal.png'
        }
        //src={isHovered ? '/image/indict/paper_make_button_hover.png' : '/image/indict/paper_make_button_normal.png'}
        alt="Image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick_change}
      />
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
        <img src={crime01} id="crime02" />
        <img src={CrimeScenebg} id="crimescene" />
        <img src={book} id="book" />

        <img src={checkbox} id="checkbox1" />
        <img src={checkbox} id="checkbox2" />
        <img src={checkbox} id="checkbox3" />


        <img src={check}  
        onClick={() => { effectPlay("paperbutton");
        decreaseOpacity('check1', 'crimenormal1')
        } }
        data-id="check1"
        className="my-image"
        id="check1" />
        
        <img src={check} 
        onClick={() => {
          effectPlay("paperbutton");
          decreaseOpacity('check2'); } }
        className="my-image"
        data-id="check2"
         id="check2">
         </img>

         <img src={check}
        onClick={() => {decreaseOpacity('check3');
        effectPlay("paperbutton");}}
        className="my-image"
        data-id="check3"
        id="check3" />
        <img src={crime_click}
        data-id="check1"
        className="my-image"
        id="crime_click1" />



        <img src={crime_click}
        data-id="check2"
        className="my-image"
        id="crime_click2" />

        


        <img src={crime_click}
        data-id="check3"
        className="my-image"
        id="crime_click3" /> 

      {/* checkbox Event */}


        <img src={maid} id="sister" />
        <img src={bae} id="deer" />

        <img src={proofpic} id="proofpic1"/>
        <img src={proofpic} id="proofpic2"/>
 
        <img src={prooftextimg} id = "prTextImg1"/>
        <img src={prooftextimg} id = "prTextImg2"/>

        <img src={crimenormal}
        data-id2="crimenormal" id = "crimenormal1"/>
        <img src={crimenormal} id = "crimenormal2"/>
        <img src={crimenormal} id = "crimenormal3"/>
        <img src={getImageSource()} id = "indict_normal"
        alt={isImageChanged ? 'Changed Image' : 'Original Image'}
        onClick={()=> {
          effectPlay("paperbutton");
          handleClick();}}>
        </img>

        <img src={getImageSource2()} id = "indict_normal2"
        alt={isImageChanged2 ? 'Changed Image' : 'Original Image'}
        onClick={()=> {
          effectPlay("paperbutton");
          handleClick2();
          }}>
        </img>
        <div className="bg">
          <img src={background} id="background"
          style={{filter: "brightness(80%)",
          zIndex: 1}} />
        </div>
      </div>

     </div>
   );


}

export default Indict;

