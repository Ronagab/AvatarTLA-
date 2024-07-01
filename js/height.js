const details = document.querySelector("section#about > div.details");
const overview = document.querySelector("section#about > div.overview");
const gallery = document.querySelector("section#about > div.gallery");

window.addEventListener("resize", () => {
  setAboutHeight();
});
setAboutHeight();

function setAboutHeight() {
  const overviewHeight = overview.offsetHeight;

  if (window.innerWidth > 515) {
    details.style.height = overviewHeight + "px";
    gallery.style.height = overviewHeight + "px";
  } else {
    details.style.height = "min-content";
  }
}
