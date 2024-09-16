const user = {
    username: "hemant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);        
        console.log(this);
        
    } 
}

// user.welcomeMessage();
// user.username = "Sameer";
// user.welcomeMessage();

// console.log(this);

// function coffee(){
//     let username = "hemant";
//     console.log(this.username);
// }

// coffee();

// const juice = function (){
//     let username = "hemant";
//     console.log(this.username);
// }
// juice()
// const milk = () => {
//     let username = "hemant";
//     console.log(this);
// }
// milk()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => num1 + num2; // implicit return
//const addTwo = (num1, num2) => (num1 + num2); // implicit return
const addTwo = (num1, num2) => ({username: "hemant"}); // implicit return

console.log(addTwo(3,4));


