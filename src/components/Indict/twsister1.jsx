import React, { useState,  useEffect } from "react";
import { effectPlay } from "../../services/audioManager";
import Indict2 from './index2'
import axios from 'axios';

import styles from '../../styles/twsister1.css';

function Indict(){
  const chapter = "3_0"
  const [ data, setData] = useState(
    {"chapter":3_0, "scene": 35, "name":"", "item": [{}, {}],
     "court":"", "script": ""}
  )

  useEffect(() => {
    axios.get('/document?chapter=' + chapter + '&scene=35')
    .then(res => {
      console.log(res.data)
      setData({"chapter": res.data.chapter, "scene": res.data.scene,
                "name": res.data.name,"item": [res.data.item5, res.data.item8],
                "court": res.data.court, "script": res.data.script
              })
      

    })
    .catch(error => console.log(error))
  }, []);

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
  const crimeTitle1 = "아동복지법위반죄";
  const crimeTitle2 = "살인교사죄";
  const crimeTitle3 = "살인죄";

  const giso = "기소"
  const bulgiso = "불기소"
  const crime1 = data.court["아동복지법위반죄"];
  const crime2 = data.court["살인교사죄"];
  const crime3 = data.court["살인죄"];
 
  return (
    <div className="Indict">

      <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

      <div className="title" >
        <p>{title}</p>
      </div>
      <div className="proof1_0">
        <p>{data.item[1].info}</p>
      </div>
      <div className="proof2_0">
        <p>{data.item[0].info}</p>
      </div>
      {/* <div className="proof3">
        <p>{proof3}</p>
      </div>
      <div className="proof4">
        <p>{proof4}</p>
      </div> */}
    <div className="sageonseosul" dangerouslySetInnerHTML={ {__html: data.script} }>
        {/* <p>{data.script}</p> */}
      </div>
      <div className="giso">
        <p>{giso}</p>
      </div>
      <div className="bulgiso">
        <p>{bulgiso}</p>
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

    <div className="crimeTexts">
        <div className="crime1_0" dangerouslySetInnerHTML={ {__html: crime1} }>
        {/* <p>{crime1}</p> */}
        </div>
        <div className="crime2_0" dangerouslySetInnerHTML={ {__html: crime2} }>
        {/* <p>{crime2}</p> */}
        </div>
        <div className="crime3_0" dangerouslySetInnerHTML={ {__html: crime3} }>
        {/* <p>{crime3}</p> */}
        </div>
      </div>

      <div className="crimeTitles">
        <div className="crimeTitle1_0">
        <p>{crimeTitle1}</p>
        </div>
        <div className="crimeTitle2_0">
        <p>{crimeTitle2}</p>
        </div>
        <div className="crimeTitle3_0">
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
          zIndex: 1}}/>
        </div>
      </div>

     </div>
   );


}

export default Indict;

