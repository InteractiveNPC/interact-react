import { getFrameScale } from "../responsiveFrame";

const find_absoluteStandard = (element) => {
  let parent = element.parentNode;
  while (
    (parent.position === "static" || parent.position === "") &&
    parent != document.body
  ) {
    parent = parent.parentNode;
  }
  return parent;
};

/**
 * @param {element} 드래그를 할 요소 (position: absolute)
 * @param {element} 드래그를 마칠 목표 위치에 있는 요소 (position: absolute)
 * @param {function()} 드래그를 성공했을 때 실행할 callback 함수
 * @param {boolean} true 설정 시 드래그 성공 인식하는 위치 표시 (생략 가능 default false)
 */
const create_targetListener = (target, debug) => {
  const targetStyles = window.getComputedStyle(target);
  const opacity = debug ? 0.5 : 0;

  const listener = document.createElement("div");
  listener.style.cssText = `
    position: absolute; 
    background: green;
    border-radius: 50%;
    opacity: ${opacity};
    width: ${targetStyles.width};
    height: ${targetStyles.height};
    top: ${targetStyles.top};
    left: ${targetStyles.left};
    z-index: 1001;`;
  find_absoluteStandard(target).append(listener);

  return listener;
};

export const setDragEvent = (object, target, callback, debug) => {
  const initPosition = {
    x: object.style.top,
    y: object.style.left,
    z: object.style.zIndex,
  };
  const initObject = () => {
    object.style.top = initPosition.x;
    object.style.left = initPosition.y;
    object.style.zIndex = initPosition.z;
  };

  let is_dragging = false;

  const standard = find_absoluteStandard(object);
  standard.addEventListener("mousemove", (event) => {
    const standardClient = standard.getBoundingClientRect();
    const scale = getFrameScale();
    console.log(object.clientWidth * scale);
    if (is_dragging) {
      object.style.left = `${
        event.clientX / scale - standardClient.left - object.clientWidth / 2
      }px`;
      object.style.top = `${
        event.clientY / scale - standardClient.top - object.clientHeight / 2
      }px`;
    }
  });

  const listener = create_targetListener(target, debug);
  listener.addEventListener("mouseup", () => {
    if (is_dragging) callback();

    is_dragging = false;
    initObject();
  });

  document.body.addEventListener("mouseup", () => {
    is_dragging = false;
    initObject();
  });
  object.onmousedown = () => {
    is_dragging = true;
    object.style.zIndex = "1000";
  };
};
