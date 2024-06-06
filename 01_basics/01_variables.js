const accountId = 1234
let accountEmail = "pranay@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"

// accountId = 2  //not allowed.
accountEmail = "a@c.com"
accountPassword = "21134"
accountCity = "Goa"
let accountState;

/*
Prefer not to use var
because of issue in block scope an functional scope
*/ 

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])