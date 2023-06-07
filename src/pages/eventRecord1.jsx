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

    /*
    1. 선녀
    2. 나무꾼 엄마
    3. 나무꾼
    4. 사슴
    5. 선녀 언니
    6. 비단 옷
    */
    const node = [['','image/Record/Source/FairyNWoodcutter/Fairy_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairy_node_normal.png'],
                  ['image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_Mother_node_normal.png'],
                  ['image/Record/Source/FairyNWoodcutter/Woodcutter_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Woodcutter_node_normal.png'],
                  ['image/Record/Source/FairyNWoodcutter/Deer_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Deer_node_normal.png'],
                  ['image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairy_Sister_node_normal.png'],
                  ['image/Record/Source/FairyNWoodcutter/Fairyclothes_node_dark.png', 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_glow.png', 'image/Record/Source/FairyNWoodcutter/Fairyclothes_node_normal.png']];
   
    const subNode = ['image/Record/UI/node_glow.png', 'image/Record/UI/node_normal.png'];

    const infoNode = [['image/Record/UI/information_01_glow.png', 'image/Record/UI/information_01_normal.png'],
                      ['image/Record/UI/information_02_glow.png', 'image/Record/UI/information_02_normal.png'],
                      ['image/Record/UI/information_03_glow.png', 'image/Record/UI/information_03_normal.png'],
                      ['image/Record/UI/information_04_glow.png', 'image/Record/UI/information_04_normal.png'],
                      ['image/Record/UI/information_05_glow.png', 'image/Record/UI/information_05_normal.png']];

    // 노드 획득 시 이미지 변경(pre->glow), 이름표 추가, 선 추가
    // 획득한 노드 획득 시 이미지 변경(glow->normal)

    // 새로고침마다 적용 useEffect 안에 넣기
    // 예외처리
    const [mainNodes, setMainNodes] = useState({});
    const [subNodes, setSubNodes] = useState({});
  
    useEffect(() => {
        (async () => {
            const mainNodes = await getMainNodes(1);
            const subNodes = await getNodes(1);

            setMainNodes(mainNodes);
            setSubNodes(subNodes);

            console.log("mainNodes", mainNodes);
            console.log("test1", mainNodes[1].content);
            console.log("subNodes", subNodes);
            console.log("test2", subNodes["1_1"].content);
        })();
    });

    const mainNodeChange = (id) => {
      return node[0][0];
      // let img_src = "";

      // console.log("error : " + id, mainNodes[id]);

      // if (mainNodes[id].have && mainNodes[id].visit)
      //   img_src = node[id - 1][2];
      // else if (mainNodes[id].have && !mainNodes[id].visit)
      //   img_src = node[id - 1][1];
      // else
      //   img_src = node[id - 1][0];

      // return img_src;
    }

    const subNodeChange = (id) => {
      let img_src = subNode[0];

      if (subNodes[id].have && subNodes[id].visit)
        img_src = subNode[1];
      else if (subNodes[id].have && !subNodes[id].visit)
        img_src = subNode[0];

      return img_src;
    }

    const infoNodeChange = (node_id, img_id) => {
      let img_src = "";

      if (mainNodes[node_id].have && mainNodes[node_id].visit)
        img_src = infoNode[img_id][1];
      else 
        img_src = infoNode[img_id][0];

      return img_src;
    }

    const [message, setMessage] = useState('');
    const clickPreNode  = (num, id) => {
      if (num === 0) {
        setMessage('이 노드는 ' + '에 있습니다<br>\n해당 장소로 이동하여 노드를 획득해보세요.');
        }
    };

    const clickPreSubNode = (num, id) => {
        setMessage('이 노드는 ' + '에 있습니다<br>\n해당 장소로 이동하여 노드를 획득해보세요.');
      }

    return (
      <> { (Object.keys(mainNodes).length > 0 && Object.keys(subNodes).length > 0 ) &&   
        <div style={{ position: "absolute", width: "1920px", height: "1080px", zIndex: "3000"}}> 
        <div>
          <img id="backgroud" src="image/Record/Background/Background.png"></img>
        </div>

        <div>
        <img src={mainNodeChange(4)} style={{ position: "absolute", top:"360px", left:"1425px"}} />
        <button onClick={() => {visitMainNode(1, 4); clickPreNode(0, 1);}}></button>
          <div className="node1_behind">
          <img src={tape} className="tape1_1"></img>
          <img src={tape} className="tape1_2"></img>
          <img src={nameUI} className="name_ui_1"></img>
          <p className="name_1">사슴</p>

          <img src={infoNodeChange(3, 4)} className="node1_info"></img>
          <p className="node1_info_content">{mainNodes[4].content}</p>
          <img src={subNodeChange("4_1")} className="node1_1"/>
          <button onClick={() => visitNode(1, "4_1")}></button>
          <p className="node1_1_title">{subNodes["4_1"].name}</p>
          <p className="node1_1_content">{subNodes["4_1"].content}</p>
          <img src={subNodeChange("4_2")} className="node1_2" />
          <button onClick={() => visitNode(1, "4_2")}></button>
          <p className="node1_2_title">{subNodes["4_2"].name}</p>
          <p className="node1_2_content">{subNodes["4_2"].content}</p>
          <img src={subNodeChange("4_3")} className="node1_3"/>
          <button onClick={() => visitNode(1, "4_3")}></button>
          <p className="node1_3_title">{subNodes["4_3"].name}</p>
          <p className="node1_3_content">{subNodes["4_3"].content}</p>
          </div></div>

        <div>
        <img src={mainNodeChange(1)} style={{ position: "absolute", width: "137px",
height: "182px", top:"198px", left:"438px"}} onClick={() => {visitMainNode(1, 1); clickPreNode(0);}}/>
          <img src={tape} className="tape2_1"></img>
          <img src={tape} className="tape2_2"></img>
          <img src={nameUI} className="name_ui_2"></img>
          <p className="name_2">선녀</p>
          <img src={infoNodeChange(1, 1)} className="node2_info"></img>
          <p className="node2_info_content">{mainNodes[1].content}</p>

          <div className="node2_behind">
          <img src={subNodeChange("1_1")} className="node2_1"/>
          <button onClick={() => visitNode(1, "1_1")}></button>
          <p className="node2_1_title">{subNodes["1_1"].name}</p>
          <p className="node2_1_content">{subNodes["1_1"].content}</p>
          <img src={subNodeChange("1_2")} className="node2_2"/>
          <button onClick={() => visitNode(1, "1_2")}></button>
          <p className="node2_1_title">임시</p>
          <p className="node2_1_content">임시</p>
          <img src={subNodeChange("1_3")} className="node2_3"/>
          <button onClick={() => visitNode(1, "1_3")}></button>
          <p className="node2_1_title">임시</p>
          <p className="node2_1_content">임시</p>
        </div></div>

        <div>
        <img src={mainNodeChange(5)} style={{ position: "absolute", top:"28px", left:"1192px"}}/>
        <button onClick={() => {visitMainNode(1, 5); clickPreNode(0);}}></button>
        <div className="node3_behind">
          <img src={tape} className="tape3_1"></img>
            <img src={nameUI} className="name_ui_3"></img>
            <p className="name_3">선녀 언니</p>

            <img src={infoNodeChange(2, 3)} className="node3_info"></img>
            <p className="node3_info_content">임시</p>
            <img src={subNodeChange("3_1")} className="node3_1"/>
          <button onClick={() => visitNode(1, "5_1")}></button>
          <p className="node3_1_title">임시</p>
          <p className="node3_1_content">임시</p>
            <img src={subNodeChange("3_1")} className="node3_2"/>
          <button onClick={() => visitNode(1, "5_2")}></button>
          <p className="node3_2_title">임시</p>
          <p className="node3_2_content">임시</p>
        </div></div>

        <div>
        <img src={mainNodeChange(2)} style={{ position: "absolute", top:"502px", left:"371px"}} />
        {/* <button onClick={() => {visitMainNode(1, 2); clickPreNode(0);}}></button> */}
        <div className="node4_behind">
          <img src={tape} className="tape4_1"></img>
            <img src={nameUI} className="name_ui_4"></img>
            <p className="name_4">나무꾼 어머니</p>

            <img src={infoNodeChange(4, 2)} className="node4_info"></img>
            <p className="node4_info_content">임시</p>
            <img src={subNodeChange("2_1")} className="node4_1" />
          <button onClick={() => visitNode(1, "2_1")}></button>
          <p className="node4_1_title">임시</p>
          <p className="node4_1_content">임시</p>
            <img src={subNodeChange("2_2")} className="node4_2" />
          <button onClick={() => visitNode(1, "2_2")}></button>
          <p className="node4_2_title">임시</p>
          <p className="node4_2_content">임시</p>
            <img src={subNodeChange("2_3")} className="node4_3" />
          <button onClick={() => visitNode(1, "2_3")}></button>
          <p className="node4_3_title">임시</p>
          <p className="node4_3_content">임시</p>
        </div></div>

        <div>
        <img src={mainNodeChange(3)} style={{ position: "absolute", top:"379px", left:"672px"}}/>
        <button onClick={() => {visitMainNode(1, 3); clickPreNode(0);}}></button>
        <div className="node5_behind">
          <img src={tape} className="tape5_1"></img>
            <img src={nameUI} className="name_ui_5"></img>
            <p className="name_5">나무꾼</p>

            <img src={infoNodeChange(0, 5)} className="node5_info"></img>
            <p className="node5_info_content">임시</p>
            <img src={subNodeChange("3_1")} className="node5_1"/>
          <button onClick={() => visitNode(1, "3_1")}></button>
          <p className="node5_1_title">임시</p>
          <p className="node5_1_content">임시</p>
            <img src={subNodeChange("3_2")} className="node5_2" />
          <button onClick={() => visitNode(1, "3_2")}></button>
          <p className="node5_2_title">임시</p>
          <p className="node5_2_content">임시</p>
            <img src={subNodeChange("3_3")} className="node5_3"/>
          <button onClick={() => visitNode(1, "3_3")}></button>
          <p className="node5_3_title">임시</p>
          <p className="node5_3_content">임시</p>
        </div></div>

        <div>
        <img src={mainNodeChange(6)} style={{ position: "absolute", top:"900px", left:"1060px"}} />
        <button onClick={() => {visitMainNode(1, 6); clickPreNode(0);}}></button>
        <div className="node6_behind">
          <img src={tape} className="tape6_1"></img>
            <img src={nameUI} className="name_ui_6"></img>
            <p className="name_6">비단옷</p>

            <img src={infoNodeChange(4, 6)} className="node6_info"></img>
            <p className="node6_info_content">임시</p>
            <img src={subNodeChange("6_1")} className="node6_1" />
          <button onClick={() => visitNode(1, "6_1")}></button>
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
}
    </>
    )
}