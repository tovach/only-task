const dom = {
  items: document.querySelectorAll(".item"),
};

const hideItems = () => {
  dom.items.forEach((item) => {
    item.classList.remove("item--active");
  });
};

const showItem = (e) => {
  console.log(e.currentTarget);
  if (e.currentTarget.classList.contains("item--active")) {
    hideItems();
    return;
  }
  hideItems();
  e.currentTarget.classList.toggle("item--active");
};

dom.items.forEach((item) => {
  item.addEventListener("click", showItem);
});

window.addEventListener("DOMContentLoaded", () => {
  hideItems();
});
