/*
  =========================================
  Study Notes: Object Destructuring & JSON Notation
  =========================================

  1. Object Destructuring
  -------------------------
  - Object destructuring is a syntax that allows extracting properties from objects into distinct variables.
  - It simplifies accessing object properties by unpacking values from objects and assigning them to variables.

  Example:
  const course = {
      coursename: "JS in Hindi",
      price: "999",
      courseInstructor: "hemant"
  };

  // Traditional way of accessing properties:
  console.log(course.courseInstructor);  // Output: "hemant"

  // Destructuring syntax:
  const { courseInstructor } = course;
  console.log(courseInstructor);  // Output: "hemant"

  - In this example, the `courseInstructor` property is extracted directly from the `course` object.

  2. Renaming Variables During Destructuring
  -------------------------------------------
  - We can rename variables while destructuring by using the following syntax: `{ originalPropertyName: newVariableName }`.

  Example:
  const { courseInstructor: instructor } = course;
  console.log(instructor);  // Output: "hemant"

  - Here, `courseInstructor` is renamed to `instructor`. The value "hemant" is now assigned to the `instructor` variable.
  - This is useful when you want to assign an object's property to a variable with a different name.

  3. JSON Notation
  ------------------
  - JSON (JavaScript Object Notation) is a format for structuring data, commonly used for data exchange between server and client.
  - JSON is represented by key-value pairs within curly braces `{}`.
  - An array of JSON objects is represented by square brackets `[]` containing multiple objects.

  Example of JSON Array:
  const courses = [
      { "coursename": "JS in Hindi", "price": "999", "instructor": "hemant" },
      { "coursename": "React in Hindi", "price": "1499", "instructor": "hemant" },
      { "coursename": "Node.js in Hindi", "price": "1299", "instructor": "hemant" }
  ];

  - This array contains three course objects, each with properties like `coursename`, `price`, and `instructor`.

  4. Accessing JSON Data
  ------------------------
  - Accessing properties from a JSON object is similar to how you access object properties in JavaScript.

  Example:
  console.log(courses[0].coursename);  // Output: "JS in Hindi"
  console.log(courses[1].price);       // Output: "1499"
  console.log(courses[2].instructor);  // Output: "hemant"

  =========================================
  End of Notes
  =========================================
*/
