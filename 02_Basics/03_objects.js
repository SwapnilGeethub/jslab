/*
  =========================================
  Study Notes: JavaScript Concepts
  =========================================

  1. Singleton Pattern
  ----------------------
  - A singleton ensures that only one instance of an object is created.
  - It's useful when you need exactly one object to coordinate actions across the system.
  
  Example:
  const Singleton = (function () {
      let instance;
  
      function createInstance() {
          const object = new Object("I am the instance");
          return object;
      }
  
      return {
          getInstance: function () {
              if (!instance) {
                  instance = createInstance();
              }
              return instance;
          },
      };
  })();
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // true, both are the same instance

  2. Object.create()
  ---------------------
  - `Object.create()` creates a new object using an existing object as the prototype.
  - This is a way to set up inheritance between objects.

  Example:
  const person = {
      isHuman: false,
      printIntroduction: function () {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      }
  };

  const me = Object.create(person);
  me.name = "John";  // Assign properties to the new object
  me.isHuman = true; // Inherited properties can be modified

  me.printIntroduction(); // My name is John. Am I human? true

  3. Object Literals
  ---------------------
  - Object literals are a simple way to create objects in JavaScript using curly braces.
  - They can contain key-value pairs, methods, and symbols.

  Example:
  const mySym = Symbol('key1'); // Create a unique symbol

  const jsUser = {
      name: "Ramesh",
      "full name": "Ramesh Goyal", // You can use quotes for keys with spaces
      age: 24,
      [mySym]: "MyKey1", // Symbol as a key
      location: "Rampur",
      email: "ramesh@google.com",
      isLoggedIn: false,
      lastLoginDays: ["Monday", "Saturday"],
  };

  // Accessing properties:
  console.log(jsUser.email);      // ramesh@google.com
  console.log(jsUser['email']);   // ramesh@google.com
  console.log(jsUser['full name']); // Accessing a property with space in its name
  console.log(jsUser[mySym]);     // Access symbol property value: MyKey1

  // Modifying properties:
  jsUser.email = "ramesh@microsoft.com"; // Update the email

  // Adding methods to the object:
  jsUser.greeting = function () {
      console.log("Hello JS user");
  };

  jsUser.greetingTwo = function () {
      console.log(`Hello JS user, ${this.name}`);
  };

  jsUser.greeting();      // Prints: Hello JS user
  console.log(jsUser.greeting()); // Prints: Hello JS user and undefined
  console.log(jsUser.greeting);   // Prints the function definition
  console.log(jsUser.greetingTwo()); // Prints: Hello JS user, Ramesh

  4. Object.freeze()
  --------------------
  - `Object.freeze()` makes an object immutable, preventing any changes to its properties.
  - Once an object is frozen, no new properties can be added, and existing properties cannot be modified or deleted.
  
  Example:
  Object.freeze(jsUser);
  jsUser.email = "new_email@example.com"; // This won't work, the email remains unchanged
  console.log(jsUser.email); // Prints: ramesh@microsoft.com (since the object is frozen)

  =========================================
  End of Notes
  =========================================
*/


