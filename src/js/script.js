$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      centerMode: true,
      variableWidth: true
   });
});