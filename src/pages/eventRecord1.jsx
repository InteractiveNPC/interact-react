import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from '../styles/eventRecord1.css';
import { getMainNodes, getNodes, visitMainNode, visitNode } from "components/Record/hook";
import { useHaveItem } from "components/MoveUI/config";

export default function Record(){
    const background = 'image/Record/Background/Background.png'

    const nameUI = 'image/Record/UI/name_ui.png';
    const tape = 'image/Record/UI/tape.png';
    const pin = 'image/Record/UI/FairyNWoodcutter/pin.png';

    const node1 = ['image/Record/Source/FairyNWoodcutter/Deer_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_normal.png']
    const node2 = ['','image/Record/Source/FairyNWoodcutter/Fairy_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairy_node_normal.png']
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

    // 선녀는 시작부터 있으므로 1부터 시작
    const nodeIndex = [0, 1, 0, 0, 0, 0];

    // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가
    // 획득한 노드 획득 시 이미지 변경(glow->normal)

    // 새로고침마다 적용 useEffect 안에 넣기
    const [chapter, setChapter] = useState(1); 
    const maindata = getMainNodes(chapter);
    
    console.log(maindata);

  

    // useEffect() => {
    //     (async () => {
    //         const mainNodes = await getMainNodes();
    //         setMainNodes(mainNodes);

    //         mainNodes[id];

    //     })();
    // });

    const [message, setMessage] = useState('');
    const clickPreNode  = (num) => {
      if (num === 0) {
        setMessage('이 노드는 ' + '에 있습니다\n해당 장소로 이동하여 노드를 획득해보세요.');
      }
    };

    return (
        
      <div>
        <div>
          <img id="backgroud" src="image/Record/Background/Background.png"></img>
        </div>

        <div>
        <img src={node1[nodeIndex[0]]} style={{ position: "absolute", top:"360px", left:"1425px"}} />
        <button onClick={() => visitMainNode(1, 4) && clickPreNode(nodeIndex[0])}></button>
          <div className="node1_behind">
          <img src={tape} className="tape1_1"></img>
          <img src={tape} className="tape1_2"></img>
          <img src={nameUI} className="name_ui_1"></img>
          <p className="name_1">사슴</p>

          <img src={infoNode4[0]} className="node1_info"></img>
          <p className="node1_info_content">{maindata[4].content}</p>
          <img src={subNode[0]} className="node1_1"/>
          <button onClick={() => visitNode(1, 4_1)}></button>
          <p className="node1_1_title">임시</p>
          <p className="node1_1_content">임시</p>
          <img src={subNode[0]} className="node1_2" />
          <button onClick={() => visitNode(1, 4_2)}></button>
          <p className="node1_2_title">임시</p>
          <p className="node1_2_content">임시</p>
          <img src={subNode[0]} className="node1_3"/>
          <button onClick={() => visitNode(1, 4_3)}></button>
          <p className="node1_3_title">임시</p>
          <p className="node1_3_content">임시</p>
          </div></div>

        <div>
        <img src={node2[nodeIndex[1]]} style={{ position: "absolute", width: "137px",
height: "182px", top:"198px", left:"438px"}}/>
        <button onClick={() => visitMainNode(1, 1) && clickPreNode(nodeIndex[1])}></button>
          <img src={tape} className="tape2_1"></img>
          <img src={tape} className="tape2_2"></img>
          <img src={nameUI} className="name_ui_2"></img>
          <p className="name_2">선녀</p>
          <img src={infoNode2[0]} className="node2_info"></img>
          <p className="node2_info_content">{maindata[1].content}</p>

          <div className="node2_behind">
          <img src={subNode[0]} className="node2_1"/>
          <button onClick={() => visitNode(1, 1_1)}></button>
          <p className="node2_1_title">임시</p>
          <p className="node2_1_content">임시</p>
          <img src={subNode[0]} className="node2_2"/>
          <button onClick={() => visitNode(1, 1_2)}></button>
          <p className="node2_1_title">임시</p>
          <p className="node2_1_content">임시</p>
          <img src={subNode[0]} className="node2_3"/>
          <button onClick={() => visitNode(1, 1_3)}></button>
          <p className="node2_1_title">임시</p>
          <p className="node2_1_content">임시</p>
        </div></div>

        <div>
        <img src={node3[nodeIndex[2]]} style={{ position: "absolute", top:"28px", left:"1192px"}}/>
        <button onClick={() => visitMainNode(1, 5) && clickPreNode(nodeIndex[2])}></button>
        <div className="node3_behind">
          <img src={tape} className="tape3_1"></img>
            <img src={nameUI} className="name_ui_3"></img>
            <p className="name_3">선녀 언니</p>

            <img src={infoNode3[0]} className="node3_info"></img>
            <p className="node3_info_content">임시</p>
            <img src={subNode[0]} className="node3_1"/>
          <button onClick={() => visitNode(1, 5_1)}></button>
          <p className="node3_1_title">임시</p>
          <p className="node3_1_content">임시</p>
            <img src={subNode[0]} className="node3_2"/>
          <button onClick={() => visitNode(1, 5_2)}></button>
          <p className="node3_2_title">임시</p>
          <p className="node3_2_content">임시</p>
        </div></div>

        <div>
        <img src={node4[nodeIndex[3]]} style={{ position: "absolute", top:"502px", left:"371px"}} />
        <button onClick={() => visitMainNode(1, 2) && clickPreNode(nodeIndex[3])}></button>
        <div className="node4_behind">
          <img src={tape} className="tape4_1"></img>
            <img src={nameUI} className="name_ui_4"></img>
            <p className="name_4">나무꾼 어머니</p>

            <img src={infoNode5[0]} className="node4_info"></img>
            <p className="node4_info_content">임시</p>
            <img src={subNode[0]} className="node4_1" />
          <button onClick={() => visitNode(1, 2_1)}></button>
          <p className="node4_1_title">임시</p>
          <p className="node4_1_content">임시</p>
            <img src={subNode[0]} className="node4_2" />
          <button onClick={() => visitNode(1, 2_2)}></button>
          <p className="node4_2_title">임시</p>
          <p className="node4_2_content">임시</p>
            <img src={subNode[0]} className="node4_3" />
          <button onClick={() => visitNode(1, 2_3)}></button>
          <p className="node4_3_title">임시</p>
          <p className="node4_3_content">임시</p>
        </div></div>

        <div>
        <img src={node5[nodeIndex[4]]} style={{ position: "absolute", top:"379px", left:"672px"}}/>
        <button onClick={() => visitMainNode(1, 3) && clickPreNode(nodeIndex[4])}></button>
        <div className="node5_behind">
          <img src={tape} className="tape5_1"></img>
            <img src={nameUI} className="name_ui_5"></img>
            <p className="name_5">나무꾼</p>

            <img src={infoNode1[0]} className="node5_info"></img>
            <p className="node5_info_content">임시</p>
            <img src={subNode[0]} className="node5_1"/>
          <button onClick={() => visitNode(1, 3_1)}></button>
          <p className="node5_1_title">임시</p>
          <p className="node5_1_content">임시</p>
            <img src={subNode[0]} className="node5_2" />
          <button onClick={() => visitNode(1, 3_2)}></button>
          <p className="node5_2_title">임시</p>
          <p className="node5_2_content">임시</p>
            <img src={subNode[0]} className="node5_3"/>
          <button onClick={() => visitNode(1, 3_3)}></button>
          <p className="node5_3_title">임시</p>
          <p className="node5_3_content">임시</p>
        </div></div>

        <div>
        <img src={node6[nodeIndex[5]]} style={{ position: "absolute", top:"900px", left:"1060px"}} />
        <button onClick={() => visitMainNode(1, 6) && clickPreNode(nodeIndex[5])}></button>
        <div className="node6_behind">
          <img src={tape} className="tape6_1"></img>
            <img src={nameUI} className="name_ui_6"></img>
            <p className="name_6">비단옷</p>

            <img src={infoNode5[0]} className="node6_info"></img>
            <p className="node6_info_content">임시</p>
            <img src={subNode[0]} className="node6_1" />
          <button onClick={() => visitNode(1, 6_1)}></button>
          <p className="node6_1_title">임시</p>
          <p className="node6_1_content">임시</p>
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
      <div className="hideNodeNoti">
        <img></img>
        <p>{message}</p>
      </div>
      </div>
    )
}