gsap.set(".feather", {
  transformOrigin: "50% 100%",
  rotation: gsap.utils.distribute({
    base: -90,
    amount: 180,
  }),
  zIndex: (index, target, targets) => {
    let half = Math.floor(targets.length / 2);
    if (index < half) {
      return targets.length - index;
    } else if (index == half) {
      return 200;
    }
  },
});
const tl = gsap
  .timeline()
  .from(".feather", {
    rotation: 0,
    duration: 1,
  })
  .from(
    ".feathers",
    {
      scale: 0.3,
      transformOrigin: "50% 100%",
    },
    0
  );

const peacock = document.querySelector(".peacock");

peacock.addEventListener("click", () => tl.reversed(!tl.reversed()));
