$(document).ready(function () {
    $(".question").click(function () {
      let answer = $(this).next(".answer")
      let toggle = $(this).find(".toggle")
  
      if (answer.is(":visible")) {
        answer.slideUp()
        toggle.text("+")
      } else {
        $(".answer").slideUp()
        $(".toggle").text("+")
        answer.slideDown()
        toggle.text("-")
      }
    })
  })