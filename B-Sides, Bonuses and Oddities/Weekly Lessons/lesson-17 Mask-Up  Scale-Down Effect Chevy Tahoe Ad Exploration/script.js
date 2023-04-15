gsap.set(".mask", { rotation: 0.1 }); //removes pixel-snapping in FireFox

const tl = gsap
  .timeline()
  .from(".bus", { scale: 2 })
  .to(".mask", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 0)
  .to(".mask", { scale: 0.95, duration: 1 });
