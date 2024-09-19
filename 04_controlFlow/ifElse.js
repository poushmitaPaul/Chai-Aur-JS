// ++++++++++++++++ IF-ELSE ++++++++++++++++ //
// <, >, <=, >=, ==,!=, ===, !==

if(condition == true){
    // cout << this code will be executed;
}

if(false){
    // cout << this code will not be executed;
}

const userLoggeIn = true
const temperature = 41

if(userLoggeIn){
     // cout << this code will be executed;
}

if(2 == "2"){
    // cout << true;
}
if(2 === "2"){
    // cout << false: it also checked the dataType;
}

if(temperature === 41){
    // cout << "print" 
}
else{
    // cout << "not print"
}
// console.log("always print");


// short-hand notation //
// const balance = 1000

if(balance > 500) console.log("test");
else console.log("no test");  // implicite-scope

// if(balance > 500) console.log("test"),console.log(test2);  // not redable code. should not use.


// nested //
const balance = 1100

// if(balance < 500){
//     console.log("less than 500");   
// }else if(balance < 750){
//     console.log("less than 750"); 
// }else if(balance < 900){
//     console.log("less than 900");    
// }else {
//     console.log("less than 1200");   
// }

const isUserLoggeIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(isUserLoggeIn && debitCard){
    console.log("allow to buy course");    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow to open the course");    
}