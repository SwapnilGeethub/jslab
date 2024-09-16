/*
  =========================================
  Study Notes: JavaScript Functions & Concepts
  =========================================

  1. Basic Function Example
  -------------------------
  The `sayMyName` function logs each letter of the name "SWAPNIL" separately to the console.

  Example:
  function sayMyName() {
      console.log("S");
      console.log("W");
      console.log("A");
      console.log("P");
      console.log("N");
      console.log("I");
      console.log("L");
  }

  // sayMyName();  // Uncomment to execute

  ------------------------------------------

  2. Function with Type Check
  ---------------------------
  The `addTwoNumbers` function adds two numbers but first checks if both inputs are of type "number".
  If the types are incorrect, it returns `undefined` instead of adding them.

  Example:
  function addTwoNumbers(number1, number2) {
      if (typeof(number1) === "number" && typeof(number2) === "number") {
          let result = number1 + number2;
          return result;
      }
  }

  const result = addTwoNumbers(3, "5");  // Type mismatch, no addition
  // console.log(result);  // Uncomment to log the result

  ------------------------------------------

  3. Function with Parameter Validation
  -------------------------------------
  The `loginUserMessage` function returns a custom message when a username is passed.
  If the username is missing (falsy value), it returns an error message instead.

  Example:
  function loginUserMessage(username) {
      if (!username) {
          console.log("Please enter a username");
          return;
      }
      return `${username} just logged in`;
  }

  // console.log(loginUserMessage("Swapnil"));  // Outputs: Swapnil just logged in

  ------------------------------------------

  4. Rest Parameters in Functions
  -------------------------------
  The `calculateCartPrice` function demonstrates the use of the `...` (rest) operator.
  It takes multiple arguments and returns them as an array.

  Example:
  function calculateCartPrice(...num1) {
      return num1;
  }

  console.log(calculateCartPrice(200, 400, 500, 300));  // Outputs: [200, 400, 500, 300]

  ------------------------------------------

  5. Working with Objects
  -----------------------
  The `handleObject` function takes an object as a parameter and logs the `username` and `price` properties.
  It uses template literals to format the output.

  Example:
  const user = {
      username: "Swapnil",
      prices: 199
  }

  function handleObject(anyObject) {
      console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  }

  handleObject({ username: "Samsung", price: 599 });  // Outputs: Username is Samsung and price is 599

  ------------------------------------------

  6. Array Index Access
  ---------------------
  The `returnSecondValue` function takes an array as input and returns the second value (index 1).
  This demonstrates accessing specific elements of an array.

  Example:
  const myNewArray = [200, 400, 100, 600];

  function returnSecondValue(getArray) {
      return getArray[1];
  }

  console.log(returnSecondValue([300, 256, 678]));  // Outputs: 256
  // console.log(returnSecondValue(myNewArray));  // Outputs: 400

  =========================================
  End of Notes
  =========================================
*/
