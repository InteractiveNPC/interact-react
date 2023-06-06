import { createContext } from "react";
import axios from "axios";

export const ContextProvider = ({ children, volumeData, chapterData }) => {
    const [volume, setVolume] = volumeData;
    const [chapter, setChapter] = chapterData;
    const chapterStart = (idx) => {
        if (chapter === idx) return;
        if (idx != 1) resetChapterSession(1);
        if (idx != 3) resetChapterSession(3);
        setChapter(idx);
    };

    return (
        <VolumeContext.Provider value={[volume, setVolume]}>
        <ChapterContext.Provider value={[chapter, chapterStart]}>
            {children}
        </ChapterContext.Provider>
        </VolumeContext.Provider>
    )
};

export const VolumeContext = createContext([0.5, 0.5, 0.5], () => {});

export const ChapterContext = createContext(0, () => {}); // 진행 중인 chapter를 저장한다.

const resetChapterSession = (chapter) => {
    return new Promise((resolve) =>
      axios
        .get(`/reset/${chapter}`)
        .then(({ data }) => {
          console.log(data);
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          resolve();
        })
    );
}