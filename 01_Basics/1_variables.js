const accountId = 144578                
//here the value of the variable remains constant which can't be changed further.
let accountEmail = "poushmitapaul@gmail.com"
let accountState;
var accountPassword = "13579"           
/*
Prefer not to use var,
Because of issue in block scope and functinoal scope.
*/
accountCity = "Jaipur"
// Prefer not to use this also .


// accountId = 5
accountEmail = "poushmita@gmail.com"
accountPassword = "13590"
accountCity = "kolkata"


console.log(accountId);
console.table([accountId, accountEmail,accountState, accountPassword, accountCity])


/*
CONCLUSION:
We will only use LET and CONST among these types of vaiable declaration. 
*/