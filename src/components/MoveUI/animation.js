import anime from "animejs/lib/anime.es.js";

export const setButtonEvent = (target, src) => {
  target.onmousedown = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_O.png)`);
  target.onmouseup = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_X.png)`);

  target.style.backgroundImage = `url(${process.env.PUBLIC_URL + src}_X.png)`;
};
