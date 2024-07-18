Result Skip Results Iframe
EDIT ON
<script>
// Get the video
var video = document.getElementById("yuriVideo");

// Get the button
var btn = document.getElementById("yuriBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>