let active;
let expanders = gsap.utils.toArray(".expander");

expanders.forEach(function (expander, index) {
  let close = expander.querySelector(".close");
  let animation = gsap.timeline({ paused: true });
  animation
    .to(expander, { width: 200, duration: 0.4 })
    .from(close, { opacity: 0, scale: 0.4, duration: 0.1, x: "-=10" }, "-=0.1");
  expander.animation = animation;

  expander.addEventListener("click", function () {
    if (active) {
      active.animation.reverse();
    }

    expander.animation.play();
    active = expander;
  });

  close.addEventListener("click", function (event) {
    event.stopPropagation();
    expander.animation.reverse();
  });
});

gsap.set(".expander", {
  backgroundColor: gsap.utils.wrap(["#f5ce5b", "#c570b6", "#78d6e0"]),
});
