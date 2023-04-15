gsap.registerEffect({
  name: "clip",
  defaults: {
    duration: 1,
    ease: "power1.in",
    direction: "full",
  },
  extendTimeline: true,
  effect: function (targets, config) {
    let direction = {
      top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      full: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      midX: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      midY: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      center: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    };

    if (window.getComputedStyle(targets[0]).clipPath != "none") {
      console.log("has a clipPath");
    } else {
      gsap.set(targets, { clipPath: direction["full"] });
    }

    let animation = gsap.timeline().to(targets, {
      clipPath: direction[config.direction],
      duration: config.duration,
      ease: config.ease,
    });

    return animation;
  },
});

let target = document.querySelector(".happy");
let animation = gsap
  .timeline()
  .clip(target, { direction: "right" })
  .clip(target) //reset
  .clip(target, { direction: "left" })
  .clip(target)
  .clip(target, { direction: "center" })
  .clip(target)
  .clip(target, { direction: "midX" })
  .clip(target)
  .clip(target, { direction: "midY" });
