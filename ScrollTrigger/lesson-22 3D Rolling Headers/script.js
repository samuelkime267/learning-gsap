/*

gsap.set(".heading-3d", {
  transformPerspective: 800,
});

gsap.fromTo(
  ".heading-3d",
  { rotationX: -360 },
  { rotationX: 360, duration: 5, repeat: -1, ease: "back" }
);

*/

gsap.registerPlugin(ScrollTrigger);
let trigger = document.querySelector(".heading-3d-wrapper");
let target = document.querySelector(".heading-3d");

gsap.set(target, { transformPerspective: 800, rotationX: -90 });

ScrollTrigger.create({
  trigger: trigger,
  start: "top 75%",
  end: "top 25%",
  markers: true,
  onEnter: () => gsap.to(target, { rotationX: 0 }),
  onLeave: () => gsap.to(target, { rotationX: 90 }),
  onEnterBack: () => gsap.to(target, { rotationX: 0 }),
  onLeaveBack: () => gsap.to(target, { rotationX: -90 }),
});

// add  a tween to make the object spin

// rotation values to see each face
// top -90
// front 0
// bottom 90
