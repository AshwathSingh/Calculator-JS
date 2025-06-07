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
let userPrompt = prompt(
  "Please enter the mathematical expression you would like to evaluate"
);

userPrompt = userPrompt.split(" ");

// process the input to find which function is required and also if it contains multiple operators
let calculation = 0;
for (let i = 0; i < userPrompt.length; i++) {
  // if doesn't below condition must be a number

  if (userPrompt.at(i) === "+") {
    console.log("add");
    calculation = addNumbers(parseInt(userPrompt.at(i - 1)), parseInt(userPrompt.at(i + 1)));
    userPrompt[i+1] = calculation;
  } else if (userPrompt.at(i) === "-") {
    console.log("subtract");
    calculation = subtractNumbers(parseInt(userPrompt.at(i - 1)), parseInt(userPrompt.at(i + 1)));
  } else if (userPrompt.at(i) === "*") {
    console.log("multiple");
    calculation = multiplyNumbers(parseInt(userPrompt.at(i - 1)), parseInt(userPrompt.at(i + 1)));
    userPrompt.at(i+1) = calculation;
    userPrompt[i+1] = calculation;
  } else if (userPrompt.at(i) === "/") {
    console.log("divide");
    calculation = divideNumbers(parseInt(userPrompt.at(i - 1)), parseInt(userPrompt.at(i + 1)));
    userPrompt[i+1] = calculation;
  }
}

