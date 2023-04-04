"use strict";
const tween = gsap.to(".green", {
  x: 600,
  duration: 3,
  ease: "linear",
  paused: true,
});

const btnContainer = document.getElementById("nav");

btnContainer.addEventListener("click", (e) => {
  if (e.target.id === "play") tween.play();
  if (e.target.id === "pause") tween.pause();
  if (e.target.id === "reverse") tween.reverse();
  if (e.target.id === "restart") tween.restart();
});
