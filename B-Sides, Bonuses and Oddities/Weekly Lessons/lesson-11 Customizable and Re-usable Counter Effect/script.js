let elements = document.querySelectorAll("li");

gsap.registerEffect({
  name: "counter",
  extendTimeline: true,
  defaults: {
    end: 0,
    duration: 0.5,
    ease: "power1",
    increment: 1,
  },
  effect: (targets, config) => {
    let tl = gsap.timeline();
    let num = targets[0].innerText.replace(/\,/g, "");
    targets[0].innerText = num;

    tl.to(
      targets,
      {
        duration: config.duration,
        innerText: config.end,
        //snap:{innerText:config.increment},
        modifiers: {
          innerText: function (innerText) {
            return gsap.utils
              .snap(config.increment, innerText)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
        ease: config.ease,
      },
      0
    );

    return tl;
  },
});

let tl = gsap.timeline();
tl.from("#stat1", { opacity: 0 });
tl.counter("#coursesCount", { end: 5, ease: "linear" }, "-=0.5");
tl.from("#stat2", { opacity: 0 }, "+=0.5");
tl.counter("#lessonsCount", { end: 220, increment: 5, duration: 0.6 }, "-=0.5");
tl.from("#stat3", { opacity: 0 }, "+=0.5");
tl.counter("#studentsCount", { end: 1860, increment: 10 }, "-=0.5");
