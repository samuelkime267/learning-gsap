gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.matchMedia({
//   "(min-width:601px)": function () {
//     sections.forEach((element, index) => {
//       let items = element.querySelectorAll(".item");
//       let tl = gsap
//         .timeline({
//           paused: true,
//           // scrollTrigger: {
//           //   trigger: element,
//           //   start: "top 80%",
//           //   toggleActions: "restart none none reverse",
//           // },
//         })
//         .from(items, {
//           xPercent: gsap.utils.wrap(
//             (index + 1) % 2 === 0 ? [100, -100] : [-100, 100]
//           ),
//         });

//       ScrollTrigger.create({
//         trigger: element,
//         start: "top 80%",
//         markers: true,
//         onEnter: () => tl.play(),
//       });

//       ScrollTrigger.create({
//         trigger: element,
//         start: "top 100%",
//         onLeaveBack: () => tl.pause(0),
//       });
//     });
//   },
// });
// console.log(ScrollTrigger.version);

ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 601px)": function () {
    sections.forEach((element, index) => {
      let items = element.querySelectorAll(".item");
      let distance = index % 2 == 0 ? 100 : -100;
      let tl = gsap.timeline({ paused: true });

      tl.from(items, {
        duration: 0.5,
        xPercent: gsap.utils.wrap([-distance, distance]),
      });
      tl.from(items, { opacity: 0, duration: 0.3 }, 0);

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => tl.play(),
      });

      ScrollTrigger.create({
        trigger: element,
        start: "top 100%",
        onLeaveBack: () => tl.pause(0),
      });
    });
  },

  // small screen
  "(max-width: 600px)": function () {
    // Any ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
    gsap.utils.toArray(".item").forEach((element, index) => {
      let target = element.querySelector("div");

      let tl = gsap.timeline({ paused: true });
      if (target.classList.contains("photo")) {
        tl.from(target, { duration: 0.5, opacity: 0, scale: 0.8 });
      } else {
        tl.from(target, { duration: 0.5, opacity: 0, y: 100 });
      }

      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        onEnter: () => tl.play(),
      });

      ScrollTrigger.create({
        trigger: element,
        start: "top 100%",
        onLeaveBack: () => tl.pause(0),
      });
    });
  },
});
const sections = gsap.utils.toArray(".cols-2");
