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

const create_targetListener = (target) => {
  const targetStyles = window.getComputedStyle(target);

  const listener = document.createElement("div");
  listener.style.cssText = `
    position: absolute; 
    border-radius: 50%;
    opacity: 0;
    width: ${targetStyles.width};
    height: ${targetStyles.height};
    top: ${targetStyles.top};
    left: ${targetStyles.left};
    z-index: 1001;`;
  find_absoluteStandard(target).append(listener);

  return listener;
};

export const setDragEvent = (object, target, callback) => {
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
    if (is_dragging) {
      object.style.left = `${
        event.clientX - standardClient.left - object.clientWidth / 2
      }px`;
      object.style.top = `${
        event.clientY - standardClient.top - object.clientHeight / 2
      }px`;
    }
  });

  const listener = create_targetListener(target);
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
