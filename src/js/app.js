import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   const menuLinks = document.querySelectorAll('.menu__link');

   iconMenu.addEventListener("click", function(e) {
      menuBody.classList.toggle('active');
   });

   menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
         menuBody.classList.remove('active');
      });
   });

   document.addEventListener('click', function(event) {
      const target = event.target;
      const isClickInsideMenu = menuBody.contains(target);
      const isClickInsideIcon = iconMenu.contains(target);

      if (!isClickInsideMenu && !isClickInsideIcon) {
         menuBody.classList.remove('active');
      }
   });
}

var currentYearElement = document.getElementById("currentYear");
  var currentYear = new Date().getFullYear();
  currentYearElement.innerHTML = currentYear;
