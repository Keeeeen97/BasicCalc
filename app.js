const numbers = document.querySelectorAll(".btnNums");
const input = document.getElementById("input");
const operators = document.querySelectorAll(".btnOp");
const del = document.querySelector(".clear");
const res = document.querySelector(".btnEquals");
const dec = document.querySelector(".decimal");

let currentInput = "";

// display numbers on textarea

numbers.forEach((number) =>
  number.addEventListener("click", function () {
    currentInput += number.value;
    input.value = currentInput;
  })
);

// display operators on textarea

operators.forEach((operator) =>
  operator.addEventListener("click", function () {
    currentInput += operator.value;
    input.value = currentInput;
  })
);

// display decimal on textarea

dec.addEventListener("click", function () {
  if (!currentInput.includes(".")) {
    currentInput += dec.value;
    input.value = currentInput;
  }
});

// display result on textarea

res.addEventListener("click", function () {
  try {
    currentInput = eval(currentInput).toString();
    input.value = currentInput;
  } catch (error) {
    input.value = "error";
  }
});

// clear display on textarea

del.addEventListener("click", function () {
  currentInput = "";
  input.value = "";
});
