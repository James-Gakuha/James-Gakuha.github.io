window.onload = function () {
  console.log("Welcome to The Silent Shift");
};

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function () {
    this.style.opacity = "0.6";
  });
});

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", function () {
    if (this.classList.contains("zoom")) {
      this.classList.remove("zoom");
    } else {
      this.classList.add("zoom");
    }
  });
});
