/*
  =========================================
  Study Notes: JavaScript Object Concepts
  =========================================

  1. Creating Objects
  ---------------------
  - Objects in JavaScript can be created using object literals `{}` or using the `new Object()` constructor.

  Example:
  const tinderUser = {}; // Using object literal (Preferred)
  // const tinderUser = new Object(); // Using Object constructor
  
  2. Adding Properties to Objects
  --------------------------------
  - Properties can be added to objects using dot notation or bracket notation.

  Example:
  tinderUser.id = "123abc";
  tinderUser.name = "Sammy";
  tinderUser.isLoggedIn = false;

  console.log(tinderUser); // {id: "123abc", name: "Sammy", isLoggedIn: false}
  
  3. Nested Objects
  -------------------
  - Objects can hold other objects as values, creating a nested structure.

  Example:
  const regularUser = {
      email: "some@email.com",
      fullname: {
          userfullname: {
              firstname: "Ramesh",
              lastname: "Choubey"
          }
      }
  };
  
  // Accessing a nested property
  console.log(regularUser.fullname.userfullname.firstname); // "Ramesh"
  
  4. Merging Objects
  -------------------
  - Objects can be merged using `Object.assign()` or the spread operator `...`.
  
  Example:
  const obj1 = {1: "a", 2: "b"};
  const obj2 = {3: "a", 4: "b"};
  
  // Method 1: Using Object.assign()
  const obj3 = Object.assign({}, obj1, obj2);
  
  // Method 2: Using Spread Operator (Preferred)
  const obj3 = {...obj1, ...obj2};
  
  console.log(obj3); // {1: "a", 2: "b", 3: "a", 4: "b"}
  
  5. Arrays of Objects
  ---------------------
  - Arrays can contain objects, and individual objects can be accessed using array indices.

  Example:
  const users = [{}, {}];
  users[1].email; // Accessing a property of the second object in the array
  
  6. Object Methods
  ------------------
  - `Object.keys()`: Returns an array of a given object's own enumerable property names.
  - `Object.values()`: Returns an array of a given object's own enumerable property values.
  - `Object.entries()`: Returns an array of a given object's own enumerable property [key, value] pairs.
  - `hasOwnProperty()`: Returns a boolean indicating whether the object has the specified property.

  Example:
  console.log(Object.keys(tinderUser)); // ["id", "name", "isLoggedIn"]
  console.log(Object.values(tinderUser)); // ["123abc", "Sammy", false]
  console.log(Object.entries(tinderUser)); // [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]
  
  console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
  
  =========================================
  End of Notes
  =========================================
*/
