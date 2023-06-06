// import React, { useState } from "react";
// import styles from '../styles/eventRecord1.css';
// import { getMainNodes, getNodes, visitMainNode, visitNode } from "components/Record/hook";

// export default function Record(){
//     const background = 'image/Record/Background/Background.png'

//     const node1 = ['image/Record/Source/FairyNWoodcutter/Deer_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_normal.png']
//     const node2 = ['image/Record/Source/FairyNWoodcutter/Fairy_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Fairy_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairy_node_normal.png']
//     const node3 = ['image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_normal.png']
//     const node4 = ['image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_normal.png']
//     const node5 = ['image/Record/Source/FairyNWoodcutter/Woodcutter_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_normal.png']
//     const node6 = ['image/Record/Source/FairyNWoodcutter/Fairyclothes_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_normal.png']
   
//     // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가
//     // 획득한 노드 획득 시 이미지 변경(glow->normal)
//     const [sessionValue, setSessionValue] = useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//     const visitMainNode = (have) => {
//       if (have === true) {
//         setSessionValue(true);
//       } else {
//         setSessionValue(false);
//       }
//     };
  
//     const handleClickImage = () => {
//       if (visitMainNode) {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
//       } 
//     };
  
//     return (
        
//       <div>
//         <div>
//           <img id="backgroud" src="public\image\Record\Background\Background.png"></img>
//         </div>
        
//         <div>
//         <img src={node1[currentImageIndex]} style={{ position: "absolute", top:"360px", left:"1425px"}} onClick={handleClickImage} />
//         <button onClick={() => visitMainNode(have)}></button>

//         <img src={node2[currentImageIndex]} style={{ position: "absolute", top:"198px", left:"438px"}} onClick={handleClickImage} />
//         <button onClick={() => visitMainNode(have)}></button>

//         <img src={node3[currentImageIndex]} style={{ position: "absolute", top:"28px", left:"1192px"}} onClick={handleClickImage} />
//         <button onClick={() => visitMainNode(have)}></button>

//         <img src={node4[currentImageIndex]} style={{ position: "absolute", top:"502px", left:"371px"}} onClick={handleClickImage} />
//         <button onClick={() => visitMainNode(have)}></button>

//         <img src={node5[currentImageIndex]} style={{ position: "absolute", top:"379px", left:"672px"}} onClick={handleClickImage} />
//         <button onClick={() => visitMainNode(have)}></button>

//         <img src={node6[currentImageIndex]} style={{ position: "absolute", top:"900px", left:"1060px"}} onClick={handleClickImage} />
//         <button onClick={() => visitMainNode(have)}></button>
//       </div>
//       </div>
//     )
// }