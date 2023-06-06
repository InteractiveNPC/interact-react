import React, { useState } from "react";
import styles from '../styles/eventRecord1.css';
import { getMainNodes, getNodes, visitMainNode, visitNode } from "components/Record/hook";

export default function Record(){
    const background = 'image/Record/Background/Background.png'

    const node1 = ['image/Record/Source/TwoSisters/Corpsepaper_node_dark.png', 'image/Record/Source/TwoSisters/Corpsepaper_node_glow.png', 'image/Record/Source/TwoSisters/Corpsepaper_node_normal.png']
    const node2 = ['image/Record/Source/TwoSisters/Hairpin_node_dark.png', 'image/Record/Source/TwoSisters/Hairpin_node_glow.png', 'image/Record/Source/TwoSisters/Hairpin_node_normal.png']
    const node3 = ['image/Record/Source/TwoSisters/Hongryeon_node_dark.png', 'image/Record/Source/TwoSisters/Hongryeon_node_glow.png', 'image/Record/Source/TwoSisters/Hongryeon_node_normal.png']
    const node4 = ['image/Record/Source/TwoSisters/Jangsoe_Mother_node_dark.png', 'image/Record/Source/TwoSisters/Jangsoe_node_glow.png', 'image/Record/Source/TwoSisters/Jangsoe_node_normal.png']
    const node5 = ['image/Record/Source/TwoSisters/Maid_node_dark.png', 'image/Record/Source/TwoSisters/Maid_node_glow.png', 'image/Record/Source/TwoSisters/Maid_node_normal.png']
    const node6 = ['image/Record/Source/TwoSisters/Mr.Bae_node_dark.png', 'image/Record/Source/TwoSisters/Mr.Bae_node_glow.png', 'image/Record/Source/TwoSisters/Mr.Bae_node_normal.png']
    const node7 = ['image/Record/Source/TwoSisters/Mrs.Heo_node_dark.png', 'image/Record/Source/TwoSisters/Mrs.Heo_node_glow.png', 'image/Record/Source/TwoSisters/Mrs.Heo_node_normal.png']
    const node8 = ['image/Record/Source/TwoSisters/Pack_node_dark.png', 'image/Record/Source/TwoSisters/Pack_node_glow.png', 'image/Record/Source/TwoSisters/Pack_node_normal.png']
    const node9 = ['image/Record/Source/TwoSisters/Tiger_node_dark.png', 'image/Record/Source/TwoSisters/Tiger_node_glow.png', 'image/Record/Source/TwoSisters/Tiger_node_normal.png']

    // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가
    // 획득한 노드 획득 시 이미지 변경(glow->normal)
    const [sessionValue, setSessionValue] = useState(true);
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
  
    return (
        
      <div>
        <div>
          <img id="backgroud" src="image/Record/Background/Background.png" style={{ position: "absolute"}}></img>
        </div>
        
        <div>
        <img src={node1[currentImageIndex]} style={{ position: "absolute", top:"988px", left:"1953px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node2[currentImageIndex]} style={{ position: "absolute", top:"413px", left:"119px"}} onClick={handleClickImage} />
        <button onClick={() => getMainNodes('have')}></button>

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