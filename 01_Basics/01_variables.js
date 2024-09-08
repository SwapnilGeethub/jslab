const accountId = 144553
let accountEmail = "hitech@google.com"
var accountpassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2 //not allowed

accountEmail = "ram@hc.com"
accountPassword = "2121212"
accountCity = "Banglore"
console.log(accountId);
/**
 * Prefer not to use var beacause of issue in block scope & functional scope
 */
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])
