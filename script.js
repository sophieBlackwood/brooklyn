// Smooth scroll feel when page loads
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Optional: logo scroll to top
document.querySelector(".logo").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
