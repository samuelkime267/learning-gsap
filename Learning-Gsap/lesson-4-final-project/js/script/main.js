var tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
tl.from("#demo", { ease: "linear" })
  .from("h1", { x: 80 })
  .from("h2", { x: -80 })
  .from("p", { y: 30 })
  .from("button", { y: 50 })
  .from("#items > g", {
    transformOrigin: "50% 50%",
    scale: 0,
    opacity: 0,
    stagger: 0.3,
    duration: 0.8,
  });
