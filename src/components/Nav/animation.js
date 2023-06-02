import anime from "animejs/lib/anime.es.js";

export const setButtonEvent = (target, src) => {
  target.onmousedown = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_click.png)`);
  target.onmouseup = () =>
    (target.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + src
    }_normal.png)`);

  target.style.backgroundImage = `url(${
    process.env.PUBLIC_URL + src
  }_normal.png)`;
};
