import React, { useState,  useEffect } from "react";
import Move from '../../pages/chapter/Document/index'
import { effectPlay } from "../../services/audioManager";
import axios from 'axios';
import $ from 'jquery';

import styles from '../../styles/indict.css';

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

const chapter = "1_0"
function Indict(props){
  const [ data, setData] = useState(
    {"chapter":1_0, "scene": 35, "name":"", "item": [{}, {}],
     "court":"", "script": "", "found": "", "met": ""}
  ) // 초기화

   
  useEffect(() => {
    axios.get('/document?chapter=' + chapter + '&scene=35')
    .then(res => {
      setData({"chapter": res.data.chapter, "scene": res.data.scene,
                "name": res.data.name, "item": [res.data.item4, res.data.item5],
                "court": res.data.court, "script": res.data.script,
                "found": res.data.found, "met": res.data.met
              })
    })
    .catch(error => console.log(error))
    
    
  }, []);  //json에서 데이터 불러옴

  if(data.met == null) {
    $(document).find("#sister").hide();
    $(document).find("#deer").hide();
    $(document).find(".proof1_0").hide();
    $(document).find(".proof2_0").hide();
  }

    const session_bulgiso = () => {
      axios.get('/document/1_0/false')
    }
    
    const session_crime = (giso) => {
      console.log(isCheck1, isCheck2, isCheck3, giso);
      if(isCheck1 == 1 && giso == 1)
        axios.get('/document/1_0?crime=' + "재물손괴죄")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      if(isCheck2 == 1 && giso == 1)
        axios.get('/document/1_0?crime=' + "감금죄")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      if(isCheck3 == 1 && giso == 1)
        axios.get('/document/1_0?crime=' + "추행 등 목적 약취 유인죄")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      }

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   try {
    //     const response = await fetch(`/document/${chapter}?crime=${crime}`, {
    //       method: 'GET', 
    //     });
    //     //const data = await response.text();
      
    //   } catch (error) {
    //     console.error('Error');
    //   }
    // };


  const [paper, setPaper] = useState(
    {"chapter": 35, "scene": 35, "crime": "" }
  )

  //////////// 세션값 서버에 전달///////////////
  // useEffect(() => {
  //   // 세션에 저장할 데이터
  //     const chapter = '1_0';
  //     const scene = 35;
  //     let crime = '';

  //     if(isCheck1 == 1) {
  //       crime = "재물손괴죄";
  //     }
  //     else if(isCheck2 == 1) {
  //       crime = "감금죄";
  //     }
  //     else if(isCheck3 == 1) {
  //       crime = "추행 등 목적 약취, 유인죄";
  //     }
    
    
  //   // 서버에 세션 데이터 저장 요청 보내기
  //   axios.get('/document', {
  //     params: {
  //       chapter,
  //       scene,
  //       crime
  //     },
  //     withCredentials: true, // 세션을 유지하기 위해 withCredentials 옵션 사용
  //   })
  //     .then((response) => {
  //       console.log("성공")
       
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("실패")
  //       console.error(error);
  //     });
  // }, []);

///////////////////////////////////////////////////
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


  const background = '/image/indict/illust_indictbg.png';
  const CrimeScenebg = '/image/indict/CrimeScene_picture.png';
  const crime01 = '/image/indict/CrimeScene_picture_FairyNWoodcutter01.png';
  const sister = '/image/indict/proof_sister.png'
  const deer = '/image/indict/proof_deer.png'
  const mom = '/image/indict/proof_mom.png'
  const cloth = '/image/indict/proof_cloth.png'
  const book = '/image/indict/book.png';

  const proofpic = '/image/indict/proof_picture.png';
  const prooftextimg = '/image/indict/proof_text.png';
  const crimenormal = '/image/indict/crime_normal.png';
  const checkbox = '/image/indict/checkbox.png'
  const check = '/image/indict/check.png'


  const indict_normal = '/image/indict/indict_normal.png'
  const indict_click = '/image/indict/indict_click.png'
  const crime_click = '/image/indict/crime_click.png'
  const title = "공소사건 01. 갑자기 사라진 선녀의 날개옷";
  const proof1 = "(임시 텍스트입니다. 최대 3줄입니다.) 나무꾼은 사건 장소에 우연히 갔다고 주장하지만, 선녀 언니의 증언으로 사건 장소는 숨겨진 장소로 우연히 갈 수 없는 장소라는 사실이 밝혀졌습니다.";

  
  
  const crimeTitle1 = "재물손괴죄";
  const crimeTitle2 = "감금죄";
  const crimeTitle3 = "추행등목적약취유인죄";
  const giso = "기소"
  const bulgiso = "불기소"
  const crime1 = data.court["재물손괴죄"];
  const crime2 = data.court["감금죄"];
  const crime3 = data.court["추행 등 목적 약취 유인죄"];
 // const item4_info = data.item4["info"]; //state
  //const item4info = data.item4.info;
  
 
  return (
    <div className="Indict">
      
      <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
      <div className="title" >
        <p>{data.name}</p>
      </div>


       <div className="proof1_0" >
        <p>{data.item[1].info}</p>
      </div> 
      <div className="proof2_0">
        <p>{data.item[0].info}</p>
      </div>

      <div className="sageonseosul" dangerouslySetInnerHTML={ {__html: data.script} }>
        {/* <p>{data.script}</p> */}
      </div>


{/* 
      <img src={indict_click} 
        onClick={() => {
          effectPlay("paperbutton");
          decreaseOpacity('indict_click'); } }
        className="my-image"
        data-id="indict_click"
         id="indict_click">
         </img> */}

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
        onClick={() => {
          handleClick_change();
          session_crime(1);
          props.onSubmit() 
        }}
        
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
        <div className="crimeTitle3_0_">
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
        decreaseOpacity('check1', 'crimenormal1');
        handleChecked(1);
        session_crime(1);
        } }
        data-id="check1"
        className="my-image"
        id="check1" />
        
        <img src={check} 
        onClick={() => {
          effectPlay("paperbutton");
          decreaseOpacity('check2'); 
          handleChecked(2);
          session_crime(1);
        } }
        className="my-image"
        data-id="check2"
         id="check2">
         </img>

         <img src={check}
        onClick={() => {decreaseOpacity('check3');
        effectPlay("paperbutton");
        handleChecked(3);
        session_crime(1);
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


        <img src={sister} id="sister" />
        <img src={deer} id="deer" />
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
          handleGiso(1);
          handleClick();
          
          }}>
        </img>

        <img src={getImageSource2()} id = "indict_normal2"
        alt={isImageChanged2 ? 'Changed Image' : 'Original Image'}
        onClick={()=> {
          effectPlay("paperbutton");
          session_bulgiso();
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

