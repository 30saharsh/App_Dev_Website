var loader = document.querySelector("#preloader");

window.addEventListener("load" , function(){
  loader.style.display = "none";
})
gsap.from("#lone", {
  x: -900,
  ease: Expo.easeInOut,
  duration: 2,
  delay: 0.4,
});

gsap.from("#rone", {
  x: 900,
  ease: Expo.easeInOut,
  duration: 2,
  delay: 0,
});

