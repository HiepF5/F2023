const addBtn = document.getElementById("add-btn");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultValue = document.getElementById("result-value");

addBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 + num2;
  resultValue.innerHTML = result;
});
