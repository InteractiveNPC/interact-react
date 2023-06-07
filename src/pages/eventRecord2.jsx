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
    const nodeIndex = [0, 0, 1, 0, 0, 0, 0, 0, 0];

    // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가
    // 획득한 노드 획득 시 이미지 변경(glow->normal)
  
    const [mainNodes, setMainNodes] = useState({});
    const [subNodes, setSubNodes] = useState({});

    useEffect(() => {
        (async () => {
            const mainNodes = await getMainNodes(3);
            const subNodes = await getNodes(3);

            setMainNodes(mainNodes);
            setSubNodes(subNodes);

            console.log("mainNodes", mainNodes);
            console.log("subNodes", subNodes);
        })();
    });
  
    const [message, setMessage] = useState('');
    const clickPreNode  = (num, id) => {
      if (num === 0) {
        const place = mainNodes[id].place;
        setMessage('이 노드는 ' + place  + '에 있습니다<br>\n해당 장소로 이동하여 노드를 획득해보세요.');
      }
    };
  
    return (
      <> { (Object.keys(mainNodes) > 0 && Object.keys(subNodes) > 0 ) &&    
      <div>
        <div>
          <img id="backgroud" src="image/Record/Background/Background.png" style={{ position: "absolute"}}></img>
        </div>
        
        <div>
        <img src={node1[nodeIndex[0]]} style={{ position: "absolute", top:"988px", left:"1953px"}} />
        <button onClick={() => visitMainNode(3, 7) && clickPreNode(nodeIndex[0])}></button>
          <div className="node1_behind">
          <img src={nameUI} className="name_ui_1"></img>
          <p className="name_1">사체 부검결과서</p>

          <img src={infoNode3[0]} className="node1_info"></img>
          <p className="node1_info_content">임시</p>
          <img src={subNode[0]} className="node1_1" />
          <button onClick={() => visitNode(3, 7_1)}></button>
          <p className="node1_1_title">임시</p>
          <p className="node1_1_content">임시</p>
          </div></div>

        <div>
        <img src={node2[nodeIndex[1]]} style={{ position: "absolute", top:"413px", left:"119px"}} />
        <button onClick={() => visitMainNode(3, 8) && clickPreNode(nodeIndex[0])}></button>
        <div className="node2_behind">
          <img src={nameUI} className="name_ui_2"></img>
          <p className="name_1">보따리 속 비녀</p>

          <img src={infoNode3[0]} className="node1_info"></img>
          <p className="node2_info_content">임시</p>
          <img src={subNode[0]} className="node2_1"/>
          <button onClick={() => visitNode(3, 8_1)}></button>
          <p className="node2_1_title">임시</p>
          <p className="node2_1_content">임시</p>
          </div></div>

        <div>
        <img src={node3[nodeIndex[2]]} style={{ position: "absolute", top:"184px", left:"896px"}}  />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node4[nodeIndex[3]]} style={{ position: "absolute", top:"783px", left:"942px"}} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node5[nodeIndex[4]]} style={{ position: "absolute", top:"43px", left:"1532px"}} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node6[nodeIndex[5]]} style={{ position: "absolute", top:"410px", left:"1898px"}} />
        <button onClick={() => getMainNodes('have')}></button>

        <img src={node7[nodeIndex[6]]} style={{ position: "absolute", top:"420px", left:"1026px"}}  />
        <button onClick={() => getMainNodes('have')}></button>
        
        <img src={node8[nodeIndex[7]]} style={{ position: "absolute", top:"904px", left:"164px"}} />
        <button onClick={() => getMainNodes('have')}></button>
        
        <img src={node9[nodeIndex[8]]} style={{ position: "absolute", top:"1100px", left:"874px"}}  />
        <button onClick={() => getMainNodes('have')}></button>
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
      }
      </>
    )
}