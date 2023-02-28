# interact-react

[@HeoJiye](@HeoJiye)

- [x] 화면 반응형 비율 고정
  - [index.css](./src/index.css)
  - [App.js](./src/App.js)
- [x] 드래그 구현

  - [module/DragEvent.js](./src/module/DragEvent.js)
  - SampleFile: [dragEventExample.jsx](./src/components/DragEventExample.jsx)

  ```javascript
  import { setDragEvent } from "../module/DragEvent";
  /**
   * @param {element} 드래그를 할 요소 (position: absolute)
   * @param {element} 드래그를 마칠 목표 위치에 있는 요소 (position: absolute)
   * @param {function()} 드래그를 성공했을 때 실행할 callback 함수
   * @param {boolean} true 설정 시 드래그 성공 인식하는 위치 표시하기 (생략 가능 default false)
   */

  // class component에서 componentDidMount() 함수 내에 작성
  // (dragEventExample.jsx 참고)
  setDragEvent(object, target, callback, [debug]);
  ```

- [ ] 장소 이동
  - [components/LocationMove.jsx](./src/components/LocationMove.jsx)
- [ ] 설정창
  - [components/Setting.jsx](./src/components/Setting.jsx)
