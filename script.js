const borderTopLeftInput = document.querySelector(".border-top-left-input");
const borderTopRightInput = document.querySelector(".border-top-right-input");
const borderBottomLeftInput = document.querySelector(
  ".border-bottom-left-input"
);
const borderBottomRightInput = document.querySelector(
  ".border-bottom-right-input"
);

const borderTopLeftSelect = document.querySelector(".border-top-left-select");
const borderTopRightSelect = document.querySelector(".border-top-right-select");
const borderBottomLeftSelect = document.querySelector(
  ".border-bottom-left-select"
);
const borderBottomRightSelect = document.querySelector(
  ".border-bottom-right-select"
);

const box = document.querySelector(".box");

const changeBorderRadius = (e, property, unit) => {
  const value = e.target.value || 0;
  box.style[property] = value + unit;
};

borderTopLeftInput.addEventListener("input", (e) => {
  changeBorderRadius(e, "borderTopLeftRadius", borderTopLeftSelect.value);
});
borderTopRightInput.addEventListener("input", (e) => {
  changeBorderRadius(e, "borderTopRightRadius", borderTopRightSelect.value);
});
borderBottomLeftInput.addEventListener("input", (e) => {
  changeBorderRadius(e, "borderBottomLeftRadius", borderBottomLeftSelect.value);
});
borderBottomRightInput.addEventListener("input", (e) => {
  changeBorderRadius(
    e,
    "borderBottomRightRadius",
    borderBottomRightSelect.value
  );
});
