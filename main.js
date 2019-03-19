/**
 * Created by ProvokatorDark on 14.03.2019.
 */
window.onload = function() {
  //initialize swiper when document ready
  var swiper = new Swiper(".swiper-container", {
    effect: "flip",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });
};