// when CurlyBraces comes with any function or if-else, the it is called SCOPE. (in onject it is not)




/*
    GLOBAL SCOPE -> The value written in this scope, can be accessed in BLOCK SCOPE. 
*/
// var c = 300  // 30 will be printed as the value of c.
let a = 300  // 300




/*
    BLOCK SCOPE -> The value written within this scope, should not be or can not be accessed in the GLOBAL SCOPE.
*/
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner: ", a);  // 10
    
}
// console.log(a);  // a is not defined
// console.log(b);  // a is not defined
// console.log(c);  // 30 ( but this should not be printed outside of the if-else scope because it was decleared in the scope of the if-else scope.)




// ++++++++++++++ JSvdo-22 ++++++++++++++ //

// Nested Scope
function one(){
    const username = "riya"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);  // error -> scope
    two()
}
// one()


if(true){
    const username = "riya"
    if(true){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);  // error -> scope
}
// console.log(username);  // error -> scope




// +++++++++++++++ INTERESTING ++++++++++++++++ //

console.log(addOne(6));  // 7
function addOne(num){
    return num + 1
}
// addOne(6)


console.log(addTwo(4));  // error -> can't acces
const addTwo = function(num){
    return num + 2
}
// addTwo(4)  

// We need to know HOISTING to understand this differences.








