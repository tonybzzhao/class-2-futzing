// script.js
$(document).ready(function () {
  // Initialize the Leaflet map with a default view (centered on Paris)
  var map = L.map('map').setView([48.8566, 2.3522], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  
  var marker; // This will hold our location marker

  $(".question").click(function () {
    // Get the corresponding answer and toggle element
    let answer = $(this).next(".answer");
    let toggle = $(this).find(".toggle");

    if (answer.is(":visible")) {
      // If the answer is already visible, slide it up and reset the toggle
      answer.slideUp();
      toggle.text("+");
    } else {
      // Close all answers and reset toggles
      $(".answer").slideUp();
      $(".toggle").text("+");
      
      // Open the clicked answer and change the toggle to indicate open state
      answer.slideDown();
      toggle.text("-");

      // Get latitude and longitude from data attributes
      let lat = $(this).data("lat");
      let lng = $(this).data("lng");
      if (lat && lng) {
        // Recenter the map and update the marker
        map.setView([lat, lng], 10);
        if (marker) {
          marker.setLatLng([lat, lng]);
        } else {
          marker = L.marker([lat, lng]).addTo(map);
        }
      }
    }
  });
});