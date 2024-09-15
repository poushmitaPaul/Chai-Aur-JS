function sayMyName(){
    console.log("riya");    
}
// sayMyName    // reference
// sayMyName()  //execution


function addTwoNumbers(a,b){
    console.log(a+b);   
}
// addTwoNumbers()  // NaN
// addTwoNumbers(2,3)  // 5
// addTwoNumbers(2,"a")  // 2a
//  When we take an input in a definition of a function then it is called PARAMETER.
//  When call a function a pass a value in it then it is called argument. 

function addTwoNumbers(a,b){
    // let sum = a + b 
    // return sum 
    return a + b
    console.log("hello");  // after retrun, any code do not executes.
}
const result = addTwoNumbers(3,6)
// console.log("Result: ", result);


// function loginUser(username){
//     // if(username === undefined){
//     //     console.log("Please enter a username");
//     //     return
//     // }
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
function loginUser(username = "riya")
//  Here, "riya" is default value. If user doesn't pass any value then "riya" will be printed.In this case the below if-else statement is of no use.
{
    // if(!username){
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username} just logged in`
}
loginUser("hitesh")  // doesn't prints anything
// console.log(loginUser("hitesh"));
// console.log(loginUser());  // undefined



