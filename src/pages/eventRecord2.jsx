import React, { useState } from "react";
import axios from 'axios';
import styles from '../styles/eventRecord1.css';
import { getMainNodes, getNodes, visitMainNode, visitNode } from "components/Record/hook";

export default function Record(){
    const background = 'image/Record/Background/Background.png'

    const nameUI = 'image/Record/UI/name_ui.png';
    const tape = 'image/Record/UI/tape.png';
    const pin = 'image/Record/UI/FairyNWoodcutter/pin.png';

    const node1 = ['image/Record/Source/TwoSisters/Corpsepaper_node_dark.png', 'image/Record/Source/TwoSisters/Corpsepaper_node_glow.png', 'image/Record/Source/TwoSisters/Corpsepaper_node_normal.png']
    const node2 = ['image/Record/Source/TwoSisters/Hairpin_node_dark.png', 'image/Record/Source/TwoSisters/Hairpin_node_glow.png', 'image/Record/Source/TwoSisters/Hairpin_node_normal.png']
    const node3 = ['image/Record/Source/TwoSisters/Hongryeon_node_glow.png', 'image/Record/Source/TwoSisters/Hongryeon_node_normal.png']
    const node4 = ['image/Record/Source/TwoSisters/Jangsoe_Mother_node_dark.png', 'image/Record/Source/TwoSisters/Jangsoe_node_glow.png', 'image/Record/Source/TwoSisters/Jangsoe_node_normal.png']
    const node5 = ['image/Record/Source/TwoSisters/Maid_node_dark.png', 'image/Record/Source/TwoSisters/Maid_node_glow.png', 'image/Record/Source/TwoSisters/Maid_node_normal.png']
    const node6 = ['image/Record/Source/TwoSisters/Mr.Bae_node_dark.png', 'image/Record/Source/TwoSisters/Mr.Bae_node_glow.png', 'image/Record/Source/TwoSisters/Mr.Bae_node_normal.png']
    const node7 = ['image/Record/Source/TwoSisters/Mrs.Heo_node_dark.png', 'image/Record/Source/TwoSisters/Mrs.Heo_node_glow.png', 'image/Record/Source/TwoSisters/Mrs.Heo_node_normal.png']
    const node8 = ['image/Record/Source/TwoSisters/Pack_node_dark.png', 'image/Record/Source/TwoSisters/Pack_node_glow.png', 'image/Record/Source/TwoSisters/Pack_node_normal.png']
    const node9 = ['image/Record/Source/TwoSisters/Tiger_node_dark.png', 'image/Record/Source/TwoSisters/Tiger_node_glow.png', 'image/Record/Source/TwoSisters/Tiger_node_normal.png']

    const subNode = ['image/Record/UI/node_glow.png', 'image/Record/UI/node_normal.png'];

    const infoNode1 = ['image/Record/UI/information_01_glow.png', 'image/Record/UI/information_01_normal.png'];
    const infoNode2 = ['image/Record/UI/information_02_glow.png', 'image/Record/UI/information_02_normal.png'];
    const infoNode3 = ['image/Record/UI/information_03_glow.png', 'image/Record/UI/information_03_normal.png'];
    const infoNode4 = ['image/Record/UI/information_04_glow.png', 'image/Record/UI/information_04_normal.png'];
    const infoNode5 = ['image/Record/UI/information_05_glow.png', 'image/Record/UI/information_05_normal.png'];
    
    // 홍련은 시작부터 있으므로 1부터 시작
    const nodeIndex = [0, 1, 0, 0, 0, 0, 0, 0, 0];

    // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가
    // 획득한 노드 획득 시 이미지 변경(glow->normal)
    // const [sessionValue, setSessionValue] = useState(true);
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // const [message, setMessage] = useState('');
    // const clickPreNode  = (num) => {
    //   if (num === 0) {
    //     setMessage('획득할 수 있습니다');
    //   }
    // };
  
    return (
        
      <div>
        <div>
          <img id="backgroud" src="image/Record/Background/Background.png" style={{ position: "absolute"}}></img>
        </div>
        
        <div>
        <img src={node1[nodeIndex[0]]} style={{ position: "absolute", top:"988px", left:"1953px"}} onClick={handleClickImage} />
        <button onClick={() => visitMainNode(3, 7) && clickPreNode(nodeIndex[0])}></button>
          <div className="node1_behind">
          <img src={nameUI} className="name_ui_1"></img>
          <p className="name_1">사체 부검결과서</p>

          <img src={infoNode3[0]} className="node1_info"></img>
          <img src={subNode[0]} className="node1_1" onClick={handleClickImage} />
          <button onClick={() => visitNode(3, 7_1)}></button>
          </div></div>

        <div>
        <img src={node2[nodeIndex[1]]} style={{ position: "absolute", top:"413px", left:"119px"}} onClick={handleClickImage} />
        <button onClick={() => visitMainNode(3, 7) && clickPreNode(nodeIndex[0])}></button>
          <img src={nameUI} className="name_ui_1"></img>
          <p className="name_1">사체 부검결과서</p>

          <img src={infoNode3[0]} className="node1_info"></img>
          <div className="node2_behind">
          <img src={subNode[0]} className="node1_1" onClick={handleClickImage} />
          <button onClick={() => visitNode(3, 7_1)}></button>
          </div></div>

        <div>
        <img src={node3[currentImageIndex]} style={{ position: "absolute", top:"184px", left:"896px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node4[currentImageIndex]} style={{ position: "absolute", top:"783px", left:"942px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node5[currentImageIndex]} style={{ position: "absolute", top:"43px", left:"1532px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node6[currentImageIndex]} style={{ position: "absolute", top:"410px", left:"1898px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node7[currentImageIndex]} style={{ position: "absolute", top:"420px", left:"1026px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
        
        <img src={node8[currentImageIndex]} style={{ position: "absolute", top:"904px", left:"164px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
        
        <img src={node9[currentImageIndex]} style={{ position: "absolute", top:"1100px", left:"874px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>
      </div>
      </div>
    )
}