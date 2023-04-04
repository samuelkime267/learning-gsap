const heroSection = document.querySelector(".masthead");
const mainContents = document.querySelectorAll(".mainContent");
gsap.registerPlugin(ScrollTrigger);

// hero
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: heroSection,
    start: "top top",
    end: "bottom 20%",
    toggleActions: "play reverse play reset",
  },
  defaults: {
    duration: 1,
    opacity: 0,
  },
});
heroTl
  .from(heroSection, {
    y: -100,
  })
  .from(
    heroSection.querySelector("h1"),
    {
      y: 100,
      ease: "back",
    },
    "-=0.75"
  )
  .from(
    heroSection.querySelector(".button"),
    {
      y: -40,
      ease: "bounce",
    },
    "-=0.41"
  );

// main contents (texts)
mainContents.forEach((mainContent) => {
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: mainContent,
      start: "top 65%",
      end: "bottom 50%",
      // markers: true,
      toggleActions: "play reverse play reverse",
    },
    defaults: { opacity: 0, ease: "linear" },
  });
  introTl.from(mainContent, { y: 100 });
});

// herman svg/pic
gsap.from(".herman", {
  duration: 1,
  x: "-50vw",
  rotation: -360,
  ease: "linear",
  scrollTrigger: {
    trigger: ".herman",
    // markers: true,
    start: "top 75%", //when top of herman passes 75% viewport height
    end: "bottom 25%", //when bottom of herman passes 25% viewport height

    //events: onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "play play reverse reverse",
    //options: play, pause, resume, reset, restart, complete, reverse,none
  },
});
