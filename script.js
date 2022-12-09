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
const errorMessage = document.querySelector(".error-message");
let clipboardID = null;
let errorID;
let error = false;
let previousInput = null;

const changeBorderRadius = (value, property, unit) => {
  box.style[property] = (value || 0) + unit;

  const { borderRadius } = getComputedStyle(box);
  copyValue.textContent = borderRadius;
};

const validateInput = (input) => {
  if (Number.isFinite(input) && input > 1000) {
    if (previousInput && previousInput > input) {
      previousInput = input;
      return;
    }
    clearTimeout(errorID);

    errorMessage.classList.remove("hide");
    error = true;

    errorID = setTimeout(() => {
      errorMessage.classList.add("hide");
    }, 3000);

    previousInput = input;
  } else error = false;
};

const copyToClipboard = () => {
  clearTimeout(clipboardID);

  const input = document.createElement("input");
  input.setAttribute("value", "border-radius:" + copyValue.textContent);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  copyBtn.textContent = "COPIED!";
  copyBtn.classList.add("copied");

  clipboardID = setTimeout(() => {
    copyBtn.classList.remove("copied");
    copyBtn.textContent = "COPY";
  }, 2000);
};

copyBtn.addEventListener("click", copyToClipboard);

borderTopLeftInput.addEventListener("input", (e) => {
  validateInput(e.target.valueAsNumber);
  if (error) return;

  changeBorderRadius(
    e.target.value,
    "borderTopLeftRadius",
    borderTopLeftSelect.value
  );
});
borderTopRightInput.addEventListener("input", (e) => {
  validateInput(e.target.valueAsNumber);
  if (error) return;

  changeBorderRadius(
    e.target.value,
    "borderTopRightRadius",
    borderTopRightSelect.value
  );
});
borderBottomLeftInput.addEventListener("input", (e) => {
  validateInput(e.target.valueAsNumber);
  if (error) return;

  changeBorderRadius(
    e.target.value,
    "borderBottomLeftRadius",
    borderBottomLeftSelect.value
  );
});
borderBottomRightInput.addEventListener("input", (e) => {
  validateInput(e.target.valueAsNumber);
  if (error) return;

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
