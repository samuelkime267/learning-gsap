let pxPerSecond = 200;

gsap.set(".bug", {
  backgroundColor: gsap.utils.wrap([
    "#f6c",
    "#77BF98",
    "#4B9AE8",
    "peru",
    "crimson",
    "#ff7b00",
    "goldenrod",
    "wheat",
    "greenyellow",
  ]),
});
function moveMe(target) {
  let newPos = {
    x: gsap.utils.random(0, window.innerWidth),
    y: gsap.utils.random(0, window.innerHeight),
  };
  let curPos = {
    x: gsap.getProperty(target, "x"),
    y: gsap.getProperty(target, "y"),
  };
  let deltaX = curPos.x - newPos.x;
  let deltaY = curPos.y - newPos.y;
  let distance = Math.hypot(deltaX, deltaY);
  let duration = distance / pxPerSecond;

  let angleDeg =
    (Math.atan2(newPos.y - curPos.y, newPos.x - curPos.x) * 180) / Math.PI;

  gsap.to(target, { rotation: angleDeg + "_short", duration: 0.2 });

  gsap.to(target, {
    x: newPos.x,
    y: newPos.y,
    duration: duration,
    ease: "none",
    onComplete: moveMe,
    onCompleteParams: [target],
  });
}

gsap.utils.toArray(".bug").forEach((el) => moveMe(el));

//learn how this was made: https://www.creativecodingclub.com/
document.addEventListener("click", () =>
  gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
);
