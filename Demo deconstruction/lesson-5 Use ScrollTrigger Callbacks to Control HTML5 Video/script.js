gsap.registerPlugin(ScrollTrigger);

var video = document.getElementById("video");

ScrollTrigger.create({
  trigger: "video",
  start: "top 50%",
  end: "50% top",
  markers: true,
  onEnter: () => video.play(),
  onLeave: () => video.pause(),
  onLeaveBack: () => video.pause(),
  onEnterBack: () => video.play(),
});

// learn how this was made: https://www.creativecodingclub.com/
// get access to 100 premium video tutorials for as low as $4.95 a month.
// new content added weekly
