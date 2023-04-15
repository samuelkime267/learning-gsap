gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: true,
    pin: true,
    markers: true,
  },
});

//add animation code here
