// script.js
$(document).ready(function () {
    $(".question").click(function () {
      let answer = $(this).next(".answer");
      let toggle = $(this).find(".toggle");
  
      if (answer.is(":visible")) {
        // If the answer is already visible, slide it up and set the toggle to '+'
        answer.slideUp();
        toggle.text("+");
      } else {
        // Otherwise, close all answers, reset all toggles, then open this one and set its toggle to '-'
        $(".answer").slideUp();
        $(".toggle").text("+");
        answer.slideDown();
        toggle.text("-");
      }
    });
  });