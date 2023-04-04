gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 1 });

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".demoWrapper",
      start: "top top",
      // end: "+=100",
      toggleActions: "restart none none reverse",
      markers: true,
      scrub: 0.5,
    },
  })
  .from(".background", { yPercent: 20 })
  .from(".middleground", { yPercent: 30 }, 0)
  .from(".foreground", { yPercent: 50 }, 0)
  .from(".text", { yPercent: 70 }, 0);
