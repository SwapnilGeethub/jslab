function sayMyName(){
    console.log("S");
    console.log("W");
    console.log("A");
    console.log("P");
    console.log("N");
    console.log("I");
    console.log("L");
    
}

//sayMyName();

// function addTwoNumbers(number1, Number2){
//     console.log(number1 + Number2);    
// }
function addTwoNumbers(number1, number2){
    if(typeof(number1) === "number" && typeof(number2) === "number"){
        let result = number1 + number2;
        return result;    
    }
}

const result = addTwoNumbers(3,"5");
//console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Swapnil"));



