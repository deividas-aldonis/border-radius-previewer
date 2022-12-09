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
const copyValue = document.querySelector(".copy-value");
const copyBtn = document.querySelector(".copy-btn");
let timeoutID = null;

const changeBorderRadius = (value, property, unit) => {
  box.style[property] = (value || 0) + unit;

  const { borderRadius } = getComputedStyle(box);
  copyValue.textContent = borderRadius;
};

// const validateInput = (input) => {

// };

const copyToClipboard = () => {
  clearTimeout(timeoutID);

  const range = document.createRange();
  range.selectNode(copyValue);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect

  copyBtn.textContent = "COPIED!";
  copyBtn.classList.add("copied");

  timeoutID = setTimeout(() => {
    copyBtn.classList.remove("copied");
    copyBtn.textContent = "COPY";
  }, 2000);
};

copyBtn.addEventListener("click", copyToClipboard);

borderTopLeftInput.addEventListener("input", (e) => {
  validateInput(e.target.value);

  changeBorderRadius(
    e.target.value,
    "borderTopLeftRadius",
    borderTopLeftSelect.value
  );
});
borderTopRightInput.addEventListener("input", (e) => {
  validateInput(e.target.value);

  changeBorderRadius(
    e.target.value,
    "borderTopRightRadius",
    borderTopRightSelect.value
  );
});
borderBottomLeftInput.addEventListener("input", (e) => {
  validateInput(e.target.value);

  changeBorderRadius(
    e.target.value,
    "borderBottomLeftRadius",
    borderBottomLeftSelect.value
  );
});
borderBottomRightInput.addEventListener("input", (e) => {
  validateInput(e.target.value);

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
