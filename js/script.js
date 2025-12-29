/* Reveal animation on scroll */
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

/* Button light tracking */
document.querySelectorAll(".btn-fx").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});
/* Image upload preview */
const uploadInput = document.querySelector(".upload-btn input");
const previewContainer = document.getElementById("uploadPreview");

if (uploadInput && previewContainer) {
  uploadInput.addEventListener("change", () => {
    Array.from(uploadInput.files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);

      img.onload = () => URL.revokeObjectURL(img.src);

      previewContainer.appendChild(img);
    });

    // Reset input so user can re-upload same file again if needed
    uploadInput.value = "";
  });
}
