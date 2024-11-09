function calculate(operation) {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const errorMessage = document.getElementById("errorMessage");
  const resultValue = document.getElementById("resultValue");

  errorMessage.textContent = ""; 

  if (isNaN(number1) || isNaN(number2) || number1 === "" || number2 === "") {
    errorMessage.textContent = "Введіть коректні дані у обидва поля!";
    resultValue.textContent = "-";
    return;
  }

  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);
  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        errorMessage.textContent = "На нуль ділити не можна!";
        resultValue.textContent = "-";
        return;
      }
      result = num1 / num2;
      break;
  }


  resultValue.textContent = Math.round(result * 100) / 100;
}
