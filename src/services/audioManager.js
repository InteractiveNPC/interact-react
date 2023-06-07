import { useContext, useEffect } from "react";
import { VolumeContext } from "../contexts";

export const useVolumeSetting = () => {
    const [volume, setVolume] = useContext(VolumeContext);
    useEffect(() => setAudioVolume(volume));
};

export const setAudioVolume = (volume) => {
    const bgmElements = document.querySelectorAll("#bgm");
    for(let e of bgmElements) {
        if(e.volume) e.volume = volume[0];
    }
    const videoElements = document.querySelectorAll("video");
    for(let e of videoElements) {
        if(e.volume) e.volume = volume[0];
    }
    document.querySelector("#effect").className = volume[1];
    const effectElements = document.querySelector("#effect").childNodes;
    for(let e of effectElements) {
        if(e.volume) e.volume = volume[1];
    }
    const voiceElements = document.querySelectorAll("#voice");
    for(let e of voiceElements) {
        if(e.volume) e.volume = volume[2];
    }
};

export const useBGM = (bgm) => {
    useEffect(()=>{
        const src = `/sound/bgm_${bgm}.mp3`;
        const audio = document.querySelector("#bgm");

        if(!audio.src.endsWith(src)) {
            audio.src = src
            audio.loop = true;

            audio.load();
        }
    });
};

export const effectPlay = (effect) => {  
    const src = `/sound/effect_${effect}.mp3`;
    const div = document.querySelector("#effect");

    const audio = new Audio(src);
    audio.volume = div.className;
    audio.autoplay = true;
    div.appendChild(audio);
    audio.onended = () => div.removeChild(audio);
};