let ferrisWheel = document.querySelector(".ferrisWheel");

function createFerrisWheel(numBaskets, radius) {
  for (var i = 0; i < numBaskets; i++) {
    let rotation = i * (360 / numBaskets);
    let basket = document.createElement("div");
    let arm = document.createElement("div");
    basket.setAttribute("class", "basket");
    arm.setAttribute("class", "arm");
    gsap.set(arm, { left: "50%", top: "50%" });
    gsap.set(basket, {
      transformOrigin: "40px 8px",
      x: radius - 40,
      y: -6,
      rotation: -rotation,
    });
    gsap.set(arm, {
      transformOrigin: "left center",
      rotation: rotation,
      width: radius,
    });
    ferrisWheel.append(arm);
    arm.append(basket);
  }
}

createFerrisWheel(12, 200);

let animation = gsap.timeline();
animation
  .to(ferrisWheel, { rotation: 360, duration: 8, ease: "none" })
  .to(".basket", { rotation: "-=360", duration: 8, ease: "none" }, 0);
