"use strict";

(function() {
  for (let i = 0; i < 4; i++) {
    document
      .getElementsByClassName("thumb")
      [i].addEventListener("mouseover", function(e) {
        document.getElementsByClassName("preview")[i].style.left =
          e.clientX + "px";
        document.getElementsByClassName("preview")[i].style.top =
          e.clientY + "px";
        document.getElementsByClassName("preview")[i].style.display =
          "inline-block";
        document.getElementsByClassName("preview")[i].style.position =
          "absolute !important";
      });

    document
      .getElementsByClassName("thumb")
      [i].addEventListener("mouseout", function() {
        document.getElementsByClassName("preview")[i].style.display = "none";
      });
  }
})();
