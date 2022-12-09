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

const changeBorderRadius = (value, property, unit) => {
  box.style[property] = (value || 0) + unit;
};

borderTopLeftInput.addEventListener("input", (e) => {
  changeBorderRadius(
    e.target.value,
    "borderTopLeftRadius",
    borderTopLeftSelect.value
  );
});
borderTopRightInput.addEventListener("input", (e) => {
  changeBorderRadius(
    e.target.value,
    "borderTopRightRadius",
    borderTopRightSelect.value
  );
});
borderBottomLeftInput.addEventListener("input", (e) => {
  changeBorderRadius(
    e.target.value,
    "borderBottomLeftRadius",
    borderBottomLeftSelect.value
  );
});
borderBottomRightInput.addEventListener("input", (e) => {
  changeBorderRadius(
    e.target.value,
    "borderBottomRightRadius",
    borderBottomRightSelect.value
  );
});

borderTopLeftSelect.addEventListener("change", (e) => {
  changeBorderRadius(
    borderTopLeftInput.value,
    "borderTopLeftRadius",
    e.target.value
  );
});
borderTopRightSelect.addEventListener("change", (e) => {
  changeBorderRadius(
    borderTopRightInput.value,
    "borderTopRightRadius",
    e.target.value
  );
});
borderBottomLeftSelect.addEventListener("change", (e) => {
  changeBorderRadius(
    borderBottomLeftInput.value,
    "borderBottomLeftRadius",
    e.target.value
  );
});
borderBottomRightSelect.addEventListener("change", (e) => {
  changeBorderRadius(
    borderBottomRightInput.value,
    "borderBottomRightRadius",
    e.target.value
  );
});
