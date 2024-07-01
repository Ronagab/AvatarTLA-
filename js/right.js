const cardInfo = document.querySelectorAll(".card-info");
const cards = document.querySelectorAll(".span-details > div.card");

cardInfo.forEach((card) => {
  const name = card.querySelector("p.name");
  card.append(
    createSourceTag(
      "down",
      "https://avatar.fandom.com/wiki/Netflix:" + name.innerHTML
    )
  );
});

cards.forEach((card, i) => {
  if (i === 0) {
    return;
  }

  const url = card.parentElement.getAttribute("data-url");
  card.append(createSourceTag("up", url));
});

function createSourceTag(position, link) {
  const url = link;

  const a = document.createElement("a");
  a.classList.add("source-tag");
  if (position === "up") {
    a.classList.add("up");
  } else {
    a.classList.add("down");
  }
  a.href = url;
  a.target = "_blank";
  a.innerText = "image source: " + url.split(":")[2];

  return a;
}
