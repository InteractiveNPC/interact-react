import { useState, useEffect } from "react";
import { prefetch } from "remotion";

export const usePreload = ( files ) => {
    const [ done, setDone ] = useState(false);
    const [ idx, setIdx ] = useState(0);

    useEffect(() => {
        if(idx < files.length) {
            const { waitUntilDone } = prefetch(files[idx]);
            waitUntilDone()
                .then(() => {
                    setIdx(idx + 1);
                })
                .catch(() => {
                    console.log("loadFail: " + files[idx]);
                    setIdx(idx + 1);
                })
            } else {
            setDone(true);
        }
    });

    return [done, `${Math.floor((idx/files.length)*100)+1}%`];
}