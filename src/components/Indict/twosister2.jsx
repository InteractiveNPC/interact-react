import React, { useState,  useEffect } from "react";
import { effectPlay } from "../../services/audioManager";
import Indict2 from './index2'
import axios from 'axios';
import $ from 'jquery';

import styles from '../../styles/twosister2.css';
let isCheck1 = 0;
let isCheck2 = 0;
let isCheck3 = 0;

let giso = 0;
let bulgiso = 0;

const handleGiso = (id) => {
  if (id == 1) {
    if(giso == 0)
      {giso = 1;
        console.log(giso)
        console.log(bulgiso)} 
    else if (giso == 1) {
      giso = 0;
      console.log(giso)
      console.log(bulgiso)
      } 
    }
  else if (id == 0) {
    if(bulgiso == 0) {
      bulgiso = 1;
      console.log(giso)
      console.log(bulgiso)
    }
    else if(bulgiso == 1) {
      bulgiso = 0;
      console.log(giso)
      console.log(bulgiso)
    }
      
  }
}

const handleChecked = (checkid) => {
  if (checkid == 1) {
    if(isCheck1 == 0)
      isCheck1 = 1;
    else if(isCheck1 == 1)
      isCheck1 = 0;

    console.log("isCheck1: " + isCheck1)
    console.log("isCheck2: " + isCheck2)
    console.log("isCheck3: " + isCheck3)
  }
  if (checkid == 2) {
    if(isCheck2 == 0)
        isCheck2 = 1;
    else if(isCheck2 == 1)
        isCheck2 = 0;

    console.log("isCheck1: " + isCheck1)
    console.log("isCheck2: " + isCheck2)
    console.log("isCheck3: " + isCheck3)
  }
  if (checkid == 3) {
    if(isCheck3 == 0)
        isCheck3 = 1;
    else if(isCheck3 == 1)
        isCheck3 = 0;
    
    console.log("isCheck1: " + isCheck1)
    console.log("isCheck2: " + isCheck2)
    console.log("isCheck3: " + isCheck3)
  }
}

function Indict(props){
  const chapter = "3_1"
  const [ data, setData] = useState(
    {"chapter":3_1, "scene": 35, "name":"", "item": [{}, {}],
     "court":"", "script": "", "met": ""}
  )

  useEffect(() => {
    axios.get('/document?chapter=' + chapter + '&scene=36')
    .then(res => {
      console.log(res.data)
      setData({"chapter": res.data.chapter, "scene": res.data.scene,
                "name": res.data.name,"item": [res.data.item6, res.data.item4],
                "court": res.data.court, "script": res.data.script, "met": res.data.met
              })
      

    })
    .catch(error => console.log(error))
  }, []);

  const session_crime = (giso) => {
    if(isCheck1 == 1 && giso == 1)
      axios.get('/document/3_1?crime=' + "아동복지법위반죄")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    if(isCheck2 == 1 && giso == 1)
      axios.get('/document/3_1?crime=' + "살인교사죄")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    if(isCheck3 == 1 && giso == 1)
      axios.get('/document/3_1?crime=' + "살인죄")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    if(data.met == null) {
      $(document).find("#maid0").hide();
      $(document).find("#bae0").hide();
      $(document).find(".proof1_0").hide();
      $(document).find(".proof2_0").hide();
    }

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

    const session_bulgiso = () => {
      axios.get('/document/3_1/false')
    }

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

      function checkDuplicate(checkid) {
        //체크
        if (checkid == 1) {
          if (isCheck1 == 1) return true;  //체크 -> 체크해제
          else {
            console.log("check 1 check Duplicatie")
            if (isCheck2 == 1 || isCheck3 == 1) {
              alert('죄목은 하나만 선택할 수 있습니다.');
              return false;
            }
            return true;
          }
        } else if (checkid == 2) {
          if (isCheck2 == 1) return true;
          else {
            console.log("check 2 check Duplicatie")
            if (isCheck1 == 1 || isCheck3 == 1) {
              alert('죄목은 하나만 선택할 수 있습니다.');
              return false;
            }
            return true;
          }
        } else if (checkid == 3) {
          if (isCheck3 == 1) return true;
          else {
            console.log("check 3 check Duplicatie")
            if (isCheck1 == 1 || isCheck2 == 1) {
              alert('죄목은 하나만 선택할 수 있습니다.');
              return false;
            }
            return true;
          }
        }
      }

      const [buttonOnClick, setButtonOnClick]=useState(false);
      const [buttonOnClick2, setButtonOnClick2]=useState(false); 

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
  const title = data.name;

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

      <div className="title2">
        <p>{title}</p>
      </div>
      <div className="proof1_0">
      <p>{data.item[0].info}</p>
      </div>
      <div className="proof2_0">
      <p>{data.item[1].info}</p>
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
        onClick={() => {
          handleClick_change();
          //session_crime(1);
          props.onSubmit() 
          
        }}
      />
    </div>
    <div className="sageonseosul" dangerouslySetInnerHTML={ {__html: data.script} }>
        {/* <p>{data.script}</p> */}
      </div>
      <div className="giso">
        <p>{giso}</p>
      </div>
      <div className="bulgiso">
        <p>{bulgiso}</p>
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
        onClick={() => { 
          let check = checkDuplicate(1);
          if (check) {
            effectPlay("paperbutton");
            decreaseOpacity('check1', 'crimenormal1');
            handleChecked(1);
            //session_crime(1);
          }
        } }
        data-id="check1"
        className="my-image"
        id="check1" />
        
        <img src={check} 
        onClick={() => {
          let check = checkDuplicate(2);
          if (check) {
            effectPlay("paperbutton");
            decreaseOpacity('check2'); 
            handleChecked(2);
            //session_crime(1);
          }
        } }
        className="my-image"
        data-id="check2"
         id="check2">
         </img>

         <img src={check}
        onClick={() => {
          let check = checkDuplicate(3);
          if (check) {
            decreaseOpacity('check3');
            effectPlay("paperbutton");
            handleChecked(3);
           // session_crime(1);
          }
        }}
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


        <img src={maid} id="maid0" />
        <img src={bae} id="bae0" />

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
        onClick={()=> { //buttonOnClick
          if(!buttonOnClick2 && !buttonOnClick){  //둘 다 안 눌림
            setButtonOnClick(!buttonOnClick);
            session_crime(1);
            effectPlay("paperbutton");
            handleGiso(1);
            handleClick();
            //여기 기소
            }else if(!buttonOnClick2 && buttonOnClick){  //불기소 안 눌리고 기소 눌림
              setButtonOnClick(!buttonOnClick);
              effectPlay("paperbutton");
              handleClick();
              session_crime(1);
            }
          }}>
        </img> 

        <img src={getImageSource2()} id = "indict_normal2"
        alt={isImageChanged2 ? 'Changed Image' : 'Original Image'}
        onClick={()=> { //buttonOnClick2
          if(!buttonOnClick && !buttonOnClick2){
            setButtonOnClick2(!buttonOnClick2);
            effectPlay("paperbutton");
            session_bulgiso();
            handleClick2();
            //여기 불기소
          } else if(!buttonOnClick && buttonOnClick2){  //불기소만 눌림
            setButtonOnClick2(!buttonOnClick2);
            effectPlay("paperbutton");
            handleClick2();
            session_bulgiso();
          }
          
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

