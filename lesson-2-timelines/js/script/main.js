// Basic Timeline
/*
gsap
  .timeline()
  .from("#demo", { duration: 1, opacity: 0 })
  .from("#title", { opacity: 0, scale: 0, ease: "back", duration: 1 })
  .from("#freds img", { y: 200, stagger: 0.2, duration: 0.8 })
  .from("#time", { xPercent: 100, ease: "bounce", duration: 1.5 });
  */

// Position Parameters
/*
notes
var tl = gsap.timeline();
tl.to(object, { y: 300 }, "+=1"); // start 1 second after previous tween ends
tl.to(object, { x: 300 }, "-=1"); // start 1 second before previous tween ends
tl.to(object, { rotation: 90 }, "<"); // start when previous tween begins
tl.to(object, { opacity: 0.5 }, "<1"); // start 1 second after previous tween begins
tl.to(object2, { x: 200 }, 1); // start exactly at a time of 1
*/

const animationTl = gsap
  .timeline()
  .from("#demo", { yPercent: -100, duration: 1, opacity: 0 })
  .from("#title", { opacity: 0, scale: 0, ease: "back", duration: 1.5 })
  .from(
    "#freds img",
    {
      y: 200,
      duration: 0.8,
      stagger: { each: 0.2, from: "edges" },
    },
    "-=0.5"
  )
  .add("label")
  .from("#time", { xPercent: 100, ease: "back", duration: 1 }, "-=0.5");

// Timeline Control and Labels
const btnContainer = document.getElementById("nav");

btnContainer.addEventListener("click", (e) => {
  if (e.target.id === "play") animationTl.play();
  if (e.target.id === "pause") animationTl.pause();
  if (e.target.id === "reverse") animationTl.reverse();
  if (e.target.id === "restart") animationTl.restart();
  if (e.target.id === "label") animationTl.play("label");
});

// You can add a label to a timeline using the add() method
