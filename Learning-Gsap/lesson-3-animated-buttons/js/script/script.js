//Simple Rollover / Hover Effects
/*
const button = document.querySelector(".item");
gsap.defaults({ duration: 0.4 });
const animationTl = gsap
  .timeline({ paused: true })
  .to(".item .dot", {
    scale: 1.4,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  })
  .to(".item .text", { color: "cyan", x: 10 }, "<");

button.addEventListener("mouseenter", () => {
  animationTl.play();
});
button.addEventListener("mouseleave", () => {
  animationTl.reverse();
});
*/

const button = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.4 });
button.forEach((btn) => {
  const animationTl = gsap
    .timeline({ paused: true })
    .to(btn.firstElementChild, {
      scale: 1.4,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    })
    .to(
      btn.lastElementChild,
      { color: "cyan", x: 10, scale: 1.3, transformOrigin: "left center" },
      "<"
    );

  btn.addEventListener("mouseenter", () => {
    animationTl.play();
  });
  btn.addEventListener("mouseleave", () => {
    animationTl.reverse();
  });
});
