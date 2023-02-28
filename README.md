# interact-react

[폴더 구조 참고 블로그](https://velog.io/@_seeul/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EC%A7%84%ED%96%89%ED%95%A0%EB%95%8C-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EC%9E%A1%EB%8A%94%EA%B2%83%EC%9D%B4-%EC%A2%8B%EC%9D%84%EA%B9%8C)

## HeoJiye

- [x] 화면 반응형 비율 고정

  > style (1920\*1080) 기준으로 작성 시 자동으로 화면 비율 조정.

  - [services/responsiveFrame](./src/services/responsiveFrame/)

  ```javascript
  import {
    getResizeEventListener,
    getFrameScale,
  } from "../services/responsiveFrame";

  /**
   * @param {number} 원본 화면의 width (px 단위)
   * @param {number} 원본 화면의 height (px 단위)
   * @return {function()} 현재 화면의 크기대로 frame을 조정하는 함수
   */
  getResizeEventListener(width, height);

  /**
   * @return {number} 원본 화면 크기와 현재 화면 크기 비율 (현재 화면 크기 / 원본 화면 크기)
   */
  getFrameScale();
  ```

- [x] 드래그 구현

  - [services/dragEvent](./src/services/dragEvent/)

  ```javascript
  import { setDragEvent } from "../services/dragEvent";
  /**
   * @param {element} 드래그를 할 요소 (position: absolute)
   * @param {element} 드래그를 마칠 목표 위치에 있는 요소 (position: absolute)
   * @param {function()} 드래그를 성공했을 때 실행할 callback 함수
   * @param {boolean} true 설정 시 드래그 성공 인식하는 위치 표시함 (생략 가능 default false)
   */

  // class component에서 componentDidMount() 함수 내에 작성
  // (dragEventExample.jsx 참고)
  setDragEvent(object, target, callback, [debug]);
  ```

- [ ] UI: 설정창

  - [components/ui](./src/components/ui)
  - [x] 상단 Nav UI 버튼
  - [x] 설정창 임시 리소스 배치 & 인터랙

- [ ] 장소 이동
  - [components/LocationMove.jsx](./src/components/LocationMove.jsx)
