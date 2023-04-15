gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("section");

sections.forEach(function (element, index) {
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 50%",
        end: "+=150px",
        scrub: true,
      },
    })
    .to(element.querySelector("h1"), {
      backgroundImage:
        "linear-gradient(45deg, #000 -100%, #eee 50%, #000 100%)",
      duration: 1,
      ease: "none",
    })
    .from(
      element.querySelectorAll("p"),
      {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
      },
      0.3
    );
});
