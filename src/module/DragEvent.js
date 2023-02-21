class DragEvent {
  constructor(object, target, callback) {
    this.object = object;
    this.target = target;

    let is_dragging = false;
    const initX = this.object.style.top;
    const initY = this.object.style.left;

    const App = document.querySelector("#App");
    App.addEventListener("mousemove", (event) => {
      if (is_dragging) {
        this.object.style.left = `${event.clientX - this.object.clientWidth}px`;
        this.object.style.top = `${
          event.clientY - this.object.clientHeight / 2
        }px`;
      }
    });
    App.addEventListener("mouseup", (event) => {
      if (is_dragging) {
        if (
          this.object.style.left >
            this.target.style.left - this.target.clientWidth / 2 &&
          this.object.style.left <
            this.target.style.left + this.target.clientWidth / 2 &&
          this.object.style.top >
            this.target.style.top - this.target.clientHeight / 2 &&
          this.object.style.top <
            this.target.style.top + this.target.clientHeight / 2
        ) {
          callback();
        }
      }
      is_dragging = false;
      this.object.style.top = initX;
      this.object.style.left = initY;
    });

    this.object.onmousedown = () => {
      is_dragging = true;
      this.object.style.zIndex = "1000";
    };
  }
}

export default DragEvent;
