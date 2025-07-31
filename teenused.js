function toggleMore(btn) {
  const parent = btn.parentElement;
  const dots = parent.querySelector(".dots");
  const moreText = parent.querySelector(".more");
  const lang =btn.getAttribute("data-lang");

  const readMoreText = lang === "et" ? "Loe rohkem" : "Read More";
  const readLessText = lang === "et" ? "Loe vähem" : "Read less";

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Loe lisa";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Peida lisa";
  }
}