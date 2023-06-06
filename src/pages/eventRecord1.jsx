import { useState } from "react";
import styles from '../styles/eventRecord1.css';
import { getMainNodes, getNodes, visitMainNode, visitNode } from "components/Record/hook";

export default function Record(){
    const background = 'image/Record/Background/Background.png'

    const preNode1 = 'image/Record/Source/FairyNWoodcutter/Deer_node_dark.png';
    const preNode2 = 'image/Record/Source/FairyNWoodcutter/Fairy_node_dark.png';
    const preNode3 = 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_dark.png';
    const preNode4 = 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_dark.png';
    const preNode5 = 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_dark.png';
    const preNode6 = 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_dark.png';

    const glowNode1 = 'image/Record/Source/FairyNWoodcutter/Deer_node_glow.png';
    const glowNode2 = 'image/Record/Source/FairyNWoodcutter/Fairy_node_glow.png';
    const glowNode3 = 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_glow.png';
    const glowNode4 = 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_glow.png';
    const glowNode5 = 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_glow.png';
    const glowNode6 = 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_glow.png';

    const normalNode1 = 'image/Record/Source/FairyNWoodcutter/Deer_node_normal.png';
    const normalNode2 = 'image/Record/Source/FairyNWoodcutter/Fairy_node_normal.png';
    const normalNode3 = 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_normal.png';
    const normalNode4 = 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_normal.png';
    const normalNode5 = 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_normal.png';
    const normalNode6 = 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_normal.png';

    // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가

    // 획득한 노드 획득 시 이미지 변경(glow->normal)

    return (
      <div>
        <div>
          <img id="backgroud" src="public\image\Record\Background\Background.png"></img>
        </div>
        <div>
        <img id="node1" src="image/Record/Source/FairyNWoodcutter/Deer_node_dark.png" style={{ position: "absolute", top:"360px", left:"1425px"}}></img>
        <img id="node2" src="image/Record/Source/FairyNWoodcutter/Fairy_node_dark.png" style={{ position: "absolute", top:"198px", left:"438px"}}></img> 
        <img id="node3" src="image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_dark.png" style={{ position: "absolute", top:"28px", left:"1192px"}}></img>
        <img id="node4" src="image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_dark.png" style={{ position: "absolute", top:"502px", left:"371px"}}></img> 
        <img id="node5" src="image/Record/Source/FairyNWoodcutter/Woodcutter_node_dark.png" style={{ position: "absolute", top:"379px", left:"672px"}}></img>
        <img id="node6" src="image/Record/Source/FairyNWoodcutter/Fairyclothes_node_dark.png" style={{ position: "absolute", top:"900px", left:"1060px"}}></img>
      </div>
      </div>
    )
}