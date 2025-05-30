
function animateButton(e) {
  e.preventDefault();
  const btn = e.currentTarget;

  const url = btn.tagName === "A" ? btn.href : btn.dataset.url;

  if (!url) return;

  btn.classList.remove("animate");
  btn.classList.add("animate");

  setTimeout(() => {
    btn.classList.remove("animate");
    // open in new tab:
    window.open(url, "_blank", "noopener,noreferrer");
  }, 700);
}

window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".bubbly-button")
    .forEach((btn) => btn.addEventListener("click", animateButton));
});
