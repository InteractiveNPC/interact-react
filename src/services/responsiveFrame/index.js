import "./style.css";

/**
 * @param {number} 원본 화면의 width (px 단위)
 * @param {number} 원본 화면의 height (px 단위)
 * @return {function()} 현재 화면의 크기대로 frame을 조정하는 함수
 */
export const getResizeEventListener = (standardWidth, standardHeight) => {
  const setFrames = () => {
    const root = document.querySelector("#root");
    const app = document.querySelector("#App");

    let width = root.clientWidth;
    let height = width * (standardHeight / standardWidth);
    app.style.zoom = height / standardHeight;

    if (height > root.clientHeight) {
      height = root.clientHeight;
      width = height * (standardWidth / standardHeight);
      app.style.zoom = width / standardWidth;
    }

    app.style.width = `${standardWidth}px`;
    app.style.height = `${standardHeight}px`;
  };

  return () => {
    setFrames();
  };
};

/**
 * @return {number} 원본 화면 크기와 현재 화면 크기 비율 (현재 화면 크기 / 원본 화면 크기)
 */
export const getFrameScale = () => {
  return document.querySelector("#App").style.zoom;
};
