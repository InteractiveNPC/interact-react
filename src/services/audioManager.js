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
    const effectElements = document.querySelectorAll("#effect");
    for(let e of effectElements) {
        if(e.volume) e.volume = volume[1];
    }
    const voiceElements = document.querySelectorAll("#voice");
    for(let e of voiceElements) {
        if(e.volume) e.volume = volume[2];
    }
}