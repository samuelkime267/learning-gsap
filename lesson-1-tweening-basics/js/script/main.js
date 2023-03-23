// gsap to method
/* 

gsap.to(".fred", { x: 700, y: 400, scale: 3, rotation: 360, duration: 3 });

*/

// gsap from methods
/* 
gsap.from(".fred", { x: 700, y: 400, scale: 3, rotation: 360 });
*/

// grap fromTo methods
/*
gsap.fromTo(".fred", { x: 700, y: 400 }, { x: 400, y: 200, duration: 3 });
*/

// special properties
// delay
/*
gsap.to(".fred", { x: 600, duration: 2 });
gsap.to(".pink", { x: 600, duration: 2, delay: 1 });
*/

// repeat
/*
gsap.to(".fred", { x: 600, duration: 2 });
gsap.to(".pink", { x: 600, repeat: 6, yoyo: true });
*/

// ease
/*
gsap.to(".fred", { x: 600, duration: 5, ease: "bounce" });
gsap.to(".pink", { x: 600, duration: 5, ease: "ease.in" });
*/

// stagger
gsap.to("main img", {
  y: 400,
  duration: 1,
  stagger: {
    each: 0.3,
    // from:'center || end || edges',
    //amount: 1,
  },
  ease: "bounce",
});
