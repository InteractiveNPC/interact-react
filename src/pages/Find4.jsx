import { useRef } from 'react';
import { gsap, Power1 } from 'gsap';
import axios from 'axios';
import styles from '../styles/temp.css';
import $ from 'jquery';

export default function Find(props){
    const boxRef = useRef(null);

  const handleClick = () => {
    gsap.to('#box', {duration: 3}, {
        bezier:[
            {left:100, top:250},
            {left:200, top:0},
            {left:300, top:100}
        ], ease:Power1.easeInOut, repeat: -1, yoyo: true
    });
  };

    return (
        <div>
            <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
            <img id="find" src="/image/clothes/cloth_00.png" style={{ position: "absolute", top:"641px", left:"1327px"}} ></img>
            <button onClick={handleClick}>클릭</button>
            <div id="box">
            <span class="inner front">앞</span>
            <span class="inner back">뒤</span>
            </div>
        </div>
    );
}