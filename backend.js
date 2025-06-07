// create the ui for the calculator
// enable onclick events such that when one button is clicked, it can operate on it
// create ids for each one so that it knows what button has been entered <- maybe add
// this to a running string and if there is one set of operators within it calculate those
// and then continue the operation

// OPERATORS

function addNumbers(num1, num2) {
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}

function divideNumbers(num1, num2) {
  return num1 / num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

// BACKEND
// input from the user as a string

/*let userPrompt = prompt(
  "Please enter the mathematical expression you would like to evaluate"
);*/

// process the input to find which function is required and also if it contains multiple operators

function calculateExpression(userPrompt) {
  userPrompt = userPrompt.split(" ");
  let calculation = 0;
  for (let i = 0; i < userPrompt.length; i++) {
    // if doesn't below condition must be a number

    if (userPrompt.at(i) === "+") {
      calculation = addNumbers(
        parseInt(userPrompt.at(i - 1)),
        parseInt(userPrompt.at(i + 1))
      );
      userPrompt[i + 1] = calculation;
    } else if (userPrompt.at(i) === "-") {
      calculation = subtractNumbers(
        parseInt(userPrompt.at(i - 1)),
        parseInt(userPrompt.at(i + 1))
      );
    } else if (userPrompt.at(i) === "*") {
      calculation = multiplyNumbers(
        parseInt(userPrompt.at(i - 1)),
        parseInt(userPrompt.at(i + 1))
      );
      userPrompt[i + 1] = calculation;
    } else if (userPrompt.at(i) === "/") {
      calculation = divideNumbers(
        parseInt(userPrompt.at(i - 1)),
        parseInt(userPrompt.at(i + 1))
      );
      userPrompt[i + 1] = calculation;
    }
  }
  return calculation;
}

// FRONT-END

let inputCheck = document.querySelectorAll(".input");
let display = document.querySelector(".display");

let inputNumber = "";
let inputParsed = "";

inputCheck.forEach((input) => {
  input.addEventListener("click", () => {
    if (
      input.id === "+" ||
      input.id === "-" ||
      input.id === "/" ||
      input.id === "*"
    ) {
      // Append the current number to the expression
      inputParsed = inputParsed + parseInt(inputNumber) + " ";

      // If we already have a full expression, evaluate it before appending the new operator
      let tokens = inputParsed.trim().split(" ");
      if (tokens.length >= 3) {
        inputParsed = calculateExpression(inputParsed) + " ";
      }

      // Add the operator
      inputParsed = inputParsed + input.id + " ";
      inputNumber = "";
    } else if (input.id === "=") {
      inputParsed = inputParsed + parseInt(inputNumber);
      let result = calculateExpression(inputParsed);
      display.innerText = result;
      inputParsed = "";
      inputNumber = "";
      return;
    } else if (input.id === "clear") {
      inputParsed = "";
      inputNumber = "";
    } else if (input.id === "delete") {
      inputNumber = inputNumber.slice(0, -1);
    } else {
      inputNumber = inputNumber + input.id;
    }

    // Update the display
    display.innerText = inputParsed + inputNumber;
  });
});
