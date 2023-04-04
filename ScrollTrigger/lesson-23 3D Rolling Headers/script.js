gsap.registerPlugin(ScrollTrigger);
const triggers = gsap.utils.toArray(".heading-3d-wrapper");

/*
triggers.forEach((trigger, index) => {
  let target = trigger.querySelector(".heading-3d");
  gsap.set(target, { transformPerspective: 800, rotationX: -90 });
  ScrollTrigger.create({
    trigger: trigger,
    start: "top 80%",
    end: "top 10%",
    markers: true,
    onEnter: () => gsap.to(target, { rotationX: 0 }),
    onLeave: () => gsap.to(target, { rotationX: 90 }),
    onEnterBack: () => gsap.to(target, { rotationX: 0 }),
    onLeaveBack: () => gsap.to(target, { rotationX: -90 }),
  });
});
*/

/*
triggers.forEach((trigger, index) => {
  let target = trigger.querySelector(".heading-3d");
  gsap.set(target, { transformPerspective: 800, rotationX: -90 });
  ScrollTrigger.create({
    trigger: trigger,
    start: "top 80%",
    end: "top 10%",
    markers: true,
    once: true,
    onEnter: () => gsap.to(target, { rotationX: 0 }),
  });
});
*/

triggers.forEach((trigger, index) => {
  let target = trigger.querySelector(".heading-3d");
  gsap.set(target, { transformPerspective: 800, rotationX: -90 });
  ScrollTrigger.create({
    trigger: trigger,
    start: "top 80%",
    end: "top 10%",
    markers: true,
    offset: "reset",
    onEnter: () => gsap.to(target, { rotationX: 0 }),
    onEnterBack: () => gsap.to(target, { rotationX: 0 }),
  });
  // off-set reset
  ScrollTrigger.create({
    trigger: trigger,
    start: "top bottom",
    end: "bottom top",
    onLeave: () => gsap.to(target, { rotationX: 90 }),
    onLeaveBack: () => gsap.to(target, { rotationX: -90 }),
  });
});
