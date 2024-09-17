/**
 * In JavaScript, code execution is driven by an engine that handles the Call Stack, Execution Contexts, and the Event Loop. Here’s a detailed breakdown of how JavaScript executes code step by step, along with the role of the Call Stack and Execution Context.

1. Execution Context
Every time JavaScript runs code, it does so inside an execution context. This is a container that holds information about the environment in which the code is being executed. There are two main types of execution contexts:

Global Execution Context (GEC):
Created when JavaScript code is first run.
Manages global code (i.e., outside of any function).
It is the first context pushed onto the call stack and stays there throughout execution.
Only one global context exists at any time.
Function Execution Context (FEC):
Created when a function is invoked.
Each time a function is called, a new execution context is created and pushed onto the call stack.
2. Components of an Execution Context
Memory/Variable Environment: Where variables, function declarations, and references are stored.
Thread of Execution/Code Execution: Keeps track of where the code is currently being executed (line by line).
Scope Chain: Lexical environment to resolve variables based on where functions and variables are declared.
this Binding: Refers to the object context in which the code is executed.
3. Phases of Execution Context
Creation Phase:

When an execution context is created, the engine allocates memory for variables and functions.
Variables are hoisted (declared but not initialized) and set to undefined.
Function declarations are hoisted fully, meaning the function is stored in memory.
Execution Phase:

Code runs line by line.
Variables are assigned actual values, and functions are executed.
4. Call Stack
The Call Stack is a data structure that keeps track of all the execution contexts. Every time a function is invoked, a new execution context is created and pushed onto the call stack. When the function finishes execution, its execution context is popped off the stack.

How the Call Stack Works:
When JavaScript starts, it creates the Global Execution Context (GEC) and pushes it onto the call stack.
Every time a function is called, a Function Execution Context (FEC) is created and pushed onto the call stack.
Once a function completes, its execution context is removed from the stack, and control returns to the previous context.
 */
function a() {
    console.log('Inside function a');
  }
  
  function b() {
    a(); // Call to function a()
    console.log('Inside function b');
  }
  
  console.log('Global execution start');
  b(); // Call to function b()
  console.log('Global execution end');
/**
 * Call Stack for the Example:
Global Execution Context (GEC) is pushed onto the stack.
The b() function is called, so Function Execution Context (FEC) for b is pushed onto the stack.
Inside b(), a() is called, so FEC for a is pushed onto the stack.
After a() completes, its context is popped off the stack.
The b() function finishes, and its context is popped off the stack.
Finally, the Global Execution Context completes.
5. Event Loop and Callback Queue
JavaScript is single-threaded, meaning it has only one call stack, so it can only execute one task at a time. However, it can handle asynchronous operations like timers, HTTP requests, or DOM events through the Event Loop and Callback Queue.

When asynchronous tasks (like setTimeout, HTTP requests) are executed, they are sent to the Web APIs (outside the main thread). Once the task is completed, the callback function is pushed to the Callback Queue.
The Event Loop constantly checks whether the Call Stack is empty. If it is, it pushes the first callback from the Callback Queue into the Call Stack for execution.
6. Execution Example with Asynchronous Code:
 */
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 2000);

console.log('End');
/**
 * Call Stack and Event Loop:
The Global Execution Context is pushed onto the stack.
console.log('Start') is executed, printing "Start".
The setTimeout() function is encountered. Its callback is sent to the Web API, and JavaScript continues to the next line.
console.log('End') is executed, printing "End".
After 2 seconds, the Web API moves the callback to the Callback Queue.
The Event Loop sees that the Call Stack is empty and pushes the callback function onto the stack.
The callback (console.log('Timeout callback')) is executed, printing "Timeout callback".

7. Hoisting
Variables: Only their declarations are hoisted (set to undefined), but not their initializations.
Functions: Entire function definitions are hoisted.
 */

console.log(x); // undefined (because of hoisting)
var x = 5;

greet(); // Hello (Function hoisting)
function greet() {
  console.log('Hello');
}
/**
 * 8. Scope
Global Scope: Variables declared outside any function are in the global scope and accessible everywhere.
Local/Function Scope: Variables declared within a function are local to that function.
Lexical Scope: A function can access variables from its parent scope, based on where the function was defined.
9. Closures
A closure is created when a function retains access to its outer scope variables, even after the outer function has completed execution.
This happens because the function's lexical scope is preserved.
 * 
 */
function outer() {
    let outerVar = 'I am outside!';
    return function inner() {
      console.log(outerVar); // Closure preserves outerVar
    };
  }
  
  const innerFunc = outer();
  innerFunc(); // Logs 'I am outside!'
  