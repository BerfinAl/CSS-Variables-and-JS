document.querySelector("input[class=baseColor]").addEventListener("input", (e) => {
  document.querySelectorAll(".baseColor").forEach((baseColor) => {
    baseColor.style.setProperty("--base-color", e.target.value);
  });
});

document.getElementById("blur").addEventListener("input", (e) => {
  document
    .querySelector("img")
    .style.setProperty("--blur", `${e.target.value}px`);
});

document.getElementById("spacing").addEventListener("input", (e) => {
  document
    .querySelector("img")
    .style.setProperty("--spacing", `${e.target.value}px`);
});
