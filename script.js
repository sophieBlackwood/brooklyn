// Fade in page on load
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Scroll to top logic
document.querySelector(".logo").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* --- VIBE SWITCHER --- */

const videoSource = document.querySelector(".bg-video source");
const videoPlayer = document.querySelector(".bg-video");

// Map each letter's link to a specific video file
// Note: Ensure these files exist in your GitHub repo!
const vibes = {
  "ballet.html": "assets/ballet-vibe.mp4",
  "photography.html": "assets/camera-vibe.mp4",
  "trips.html": "assets/travel-vibe.mp4",
  "default": "assets/main-vibe.mp4"
};

document.querySelectorAll(".name a").forEach(link => {
  link.addEventListener("mouseenter", (e) => {
    const fileName = e.target.getAttribute("href");
    
    if (vibes[fileName]) {
      // Change video source
      videoSource.src = vibes[fileName];
      // Reload and play the new video
      videoPlayer.load();
      videoPlayer.play();
    }
  });

  // Optional: Reset to main video when mouse leaves
  link.addEventListener("mouseleave", () => {
    videoSource.src = vibes["default"];
    videoPlayer.load();
    videoPlayer.play();
  });
});
