"use strict";

(function() {
  document
    .getElementsByTagName("li")[0]
    .addEventListener("mouseover", function(e) {
      document.getElementsByTagName("img")[0].style.left = e.clientX;
      document.getElementsByTagName("img")[0].style.top = e.clientY;
      document.getElementsByTagName("img")[0].style.opacity = "1";
    });

  document
    .getElementsByTagName("li")[0]
    .addEventListener("mouseout", function() {
      document.getElementsByTagName("img")[0].style.opacity = "0";
    });
})();
