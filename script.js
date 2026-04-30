// Fade in logic
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Modal Logic for Ballet Page
const modal = document.getElementById("showModal");
const closeBtn = document.querySelector(".close-button");

document.querySelectorAll(".show-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-desc");
    const photos = card.getAttribute("data-photos") ? card.getAttribute("data-photos").split(',') : [];

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = desc;
    
    const gallery = document.getElementById("modalGallery");
    gallery.innerHTML = ""; 
    photos.forEach(src => {
      if(src) {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
      }
    });

    modal.style.display = "flex";
  });
});

if (closeBtn) {
  closeBtn.onclick = () => modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};
