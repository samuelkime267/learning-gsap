// let animation = gsap.to(".faces", {
//   rotationY: 360,
//   duration: 3,
//   ease: "power1.inOut",
// });

let wrapper = document.querySelector(".wrapper");
let parentCard = document.querySelector(".card");
let cardCount = 4;

function createCards() {
  for (var i = 0; i < cardCount - 1; i++) {
    let clone = parentCard.cloneNode(true);
    wrapper.appendChild(clone);
  }
}
createCards();

let cards = gsap.utils.toArray(".card > .faces");
let loserIndex = gsap.utils.random(0, cardCount - 1, 1);
cards[loserIndex].classList.add("loser");

cards.forEach(function (card, index) {
  let animation = gsap.timeline({ paused: true });
  animation.fromTo(card, { rotationY: 180 }, { rotationY: 0 });
  if (index == loserIndex) {
    animation.to(".faces:not(.loser)", {
      opacity: 0,
      ease: "power1.in",
      scale: 0.9,
      duration: 0.3,
      stagger: 0.1,
    });
    animation.to(".loser .face", {
      duration: 0.3,
      borderColor: "red",
      repeat: 4,
      yoyo: true,
    });
  }
  card.animation = animation;
  card.addEventListener("click", function () {
    card.animation.play();
  });
});

gsap.set(wrapper, { autoAlpha: 1 });
gsap.from(".card", { opacity: 0, stagger: 0.2 });
