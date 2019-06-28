const popupAbout = document.getElementById('popup-about');

// dodawanie klasy 
document.getElementById('btn-about-more').onclick = function(e) {
    e.preventDefault();
    popupAbout.classList.add('popup--visible');
};

// usuwanie klasy
popupAbout.onclick = function(e) {
  e.preventDefault();
  popupAbout.classList.remove("popup--visible");
};

document.getElementById('popup-about-content').onclick = function(e) {
  e.preventDefault();
  e.stopPropagation();
};

// jQuery(document).ready(
//   (function($) {
//     function scrollToSection(event) {
//       event.preventDefault();
//       var $section = $($(this).attr("href"));
//       $("html, body").animate(
//         {
//           scrollTop: $section.offset().top
//         },
//         500
//       );
//     }
//     $("[data-scroll]").on("click", scrollToSection);
//   })(jQuery)
// );
