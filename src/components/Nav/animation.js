import anime from "animejs/lib/anime.es.js";

export const setButtonEvent = (target, src) => {
  target.onmousedown = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_Click.png)`);
  target.onmouseup = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_Normal.png)`);

  target.style.backgroundImage = `url(${
    process.env.PUBLIC_URL + src
  }_Normal.png)`;
};
