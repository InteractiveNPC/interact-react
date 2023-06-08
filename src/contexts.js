import { createContext } from "react";
import axios from "axios";

export const ContextProvider = ({ children, volumeData }) => {
    const [volume, setVolume] = volumeData;

    return (
        <VolumeContext.Provider value={[volume, setVolume]}>
            {children}
        </VolumeContext.Provider>
    )
};

export const VolumeContext = createContext([0.5, 0.5, 0.5], () => {});