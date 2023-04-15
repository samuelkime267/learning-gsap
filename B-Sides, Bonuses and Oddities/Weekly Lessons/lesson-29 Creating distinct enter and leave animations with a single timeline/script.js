gsap.to(".wrapper", { autoAlpha: 1 }); //fouc
gsap.set(".bar", { scaleX: 0, transformOrigin: "left center" });
const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });
let exitTime = 0;

tl.to(".bar", { scaleX: 1 }).addPause("exit");
exitTime = tl.duration();
tl.to(".bar", { x: 200 });

let btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  if (tl.time() < exitTime) {
    tl.play();
  } else {
    tl.restart();
  }
});

btn.addEventListener("mouseleave", () => {
  if (tl.time() < exitTime) {
    tl.reverse();
  } else {
    tl.play();
  }
});
