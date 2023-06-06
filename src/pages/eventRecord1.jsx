import React, { useState } from "react";
import axios from 'axios';
import styles from '../styles/eventRecord1.css';
import { getMainNodes, getNodes, visitMainNode, visitNode } from "components/Record/hook";

export default function Record(){
    const background = 'image/Record/Background/Background.png'

    const nameUI = 'image/Record/UI/name_ui.png';
    const tape = 'image/Record/UI/tape.png';
    const pin = 'image/Record/UI/FairyNWoodcutter/pin.png';

    const node1 = ['image/Record/Source/FairyNWoodcutter/Deer_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_normal.png']
    const node2 = ['image/Record/Source/FairyNWoodcutter/Fairy_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairy_node_normal.png']
    const node3 = ['image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_normal.png']
    const node4 = ['image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_normal.png']
    const node5 = ['image/Record/Source/FairyNWoodcutter/Woodcutter_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_normal.png']
    const node6 = ['image/Record/Source/FairyNWoodcutter/Fairyclothes_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_normal.png']
   
    const subNode = ['image/Record/UI/node_glow.png', 'image/Record/UI/node_normal.png'];

    const infoNode1 = ['image/Record/UI/information_01_glow.png', 'image/Record/UI/information_01_normal.png'];
    const infoNode2 = ['image/Record/UI/information_02_glow.png', 'image/Record/UI/information_02_normal.png'];
    const infoNode3 = ['image/Record/UI/information_03_glow.png', 'image/Record/UI/information_03_normal.png'];
    const infoNode4 = ['image/Record/UI/information_04_glow.png', 'image/Record/UI/information_04_normal.png'];
    const infoNode5 = ['image/Record/UI/information_05_glow.png', 'image/Record/UI/information_05_normal.png'];

    // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가
    // 획득한 노드 획득 시 이미지 변경(glow->normal)
    const [sessionValue, setSessionValue] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const getMainNodes = (have) => {
      if (have === true) {
        setSessionValue(true);
      } else {
        setSessionValue(false);
      }
    };
  
    const handleClickImage = () => {
      if (sessionValue) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
      } 
    };
  

    // json data 불러오기
    const [data, setData] = useState(null);

    useEffect(() => {
      axios.get('/item/getItems/1')
        .then(response => {
          console.log(res.data)
          setData({"name": res.data.name, "kind": res.data.kind,
          "id": res.data.id, "script": res.data.chapter
        });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        
      <div>
        <div>
          <img id="backgroud" src="image/Record/Background/Background.png"></img>
        </div>

        <div>
        <img src={node1[currentImageIndex]} style={{ position: "absolute", top:"360px", left:"1425px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
          <div className="node1_behind">
          <img src={tape} className="tape1_1"></img>
          <img src={tape} className="tape1_2"></img>
          <img src={nameUI} className="name_ui_1"></img>
          <p className="name_1">사슴</p>

          <img src={infoNode4[currentImageIndex]} className="node1_info"></img>
          <img src={subNode[currentImageIndex]} className="node1_1"></img>
          <img src={subNode[currentImageIndex]} className="node1_2"></img>
          <img src={subNode[currentImageIndex]} className="node1_3"></img>
          </div></div>

        <div>
        <img src={node2[currentImageIndex]} style={{ position: "absolute", top:"198px", left:"438px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
        <div className="node2_behind">
          <img src={tape} className="tape2_1"></img>
          <img src={tape} className="tape2_2"></img>
          <img src={nameUI} className="name_ui_2"></img>
          <p className="name_2">선녀</p>

          <img src={infoNode2[currentImageIndex]} className="node2_info"></img>
          <img src={subNode[currentImageIndex]} className="node2_1"></img>
          <img src={subNode[currentImageIndex]} className="node2_2"></img>
          <img src={subNode[currentImageIndex]} className="node2_3"></img>
        </div></div>

        <div>
        <img src={node3[currentImageIndex]} style={{ position: "absolute", top:"28px", left:"1192px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
        <div className="node3_behind">
          <img src={tape} className="tape3_1"></img>
            <img src={nameUI} className="name_ui_3"></img>
            <p className="name_3">선녀 언니</p>

            <img src={infoNode3[currentImageIndex]} className="node3_info"></img>
            <img src={subNode[currentImageIndex]} className="node3_1"></img>
            <img src={subNode[currentImageIndex]} className="node3_2"></img>
        </div></div>

        <div>
        <img src={node4[currentImageIndex]} style={{ position: "absolute", top:"502px", left:"371px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
        <div className="node4_behind">
          <img src={tape} className="tape4_1"></img>
            <img src={nameUI} className="name_ui_4"></img>
            <p className="name_4">나무꾼 어머니</p>

            <img src={infoNode5[currentImageIndex]} className="node4_info"></img>
            <img src={subNode[currentImageIndex]} className="node4_1"></img>
            <img src={subNode[currentImageIndex]} className="node4_2"></img>
            <img src={subNode[currentImageIndex]} className="node4_3"></img>
        </div></div>

        <div>
        <img src={node5[currentImageIndex]} style={{ position: "absolute", top:"379px", left:"672px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
        <div className="node5_behind">
          <img src={tape} className="tape5_1"></img>
            <img src={nameUI} className="name_ui_5"></img>
            <p className="name_5">나무꾼</p>

            <img src={infoNode1[currentImageIndex]} className="node5_info"></img>
            <img src={subNode[currentImageIndex]} className="node5_1"></img>
            <img src={subNode[currentImageIndex]} className="node5_2"></img>
            <img src={subNode[currentImageIndex]} className="node5_3"></img>
        </div></div>

        <div>
        <img src={node6[currentImageIndex]} style={{ position: "absolute", top:"900px", left:"1060px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
        <div className="node6_behind">
          <img src={tape} className="tape6_1"></img>
            <img src={nameUI} className="name_ui_6"></img>
            <p className="name_6">비단옷</p>

            <img src={infoNode5[currentImageIndex]} className="node6_info"></img>
            <img src={subNode[currentImageIndex]} className="node6_1"></img>
        </div>
      </div>

      <div className="line">
        <div className="lines01">
          <img src="image/Record/UI/FairyNWoodcutter/line_01.png" className="line1"></img>
          <img src={pin} className="pin1_1"></img>
          <img src={pin} className="pin1_2"></img>
          <img src={pin} className="pin1_3"></img>
        </div>
        <div className="lines02">
          <img src="image/Record/UI/FairyNWoodcutter/line_02.png" className="line2"></img>
          <img src={pin} className="pin2_1"></img>
          <img src={pin} className="pin2_2"></img>
        </div>
        <img src="image/Record/UI/FairyNWoodcutter/line_03.png" className="line3"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_04.png" className="line4"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_05.png" className="line5"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_06.png" className="line6"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_07.png" className="line7"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_08.png" className="line8"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_09.png" className="line9"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_10.png" className="line10"></img>
        <img src="image/Record/UI/FairyNWoodcutter/line_11.png" className="line11"></img>


      </div>
      </div>
    )
}