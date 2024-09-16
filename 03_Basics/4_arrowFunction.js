// ++++++++++++ THIS +++++++++++ //
const user = {
    username: "riya"
    price: 999

    // THIS --> refers the current context.

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        // console.log(this);

    }
}

// user.welcomeMessage()  // riya, welcome to website.
// user.username = "sam"  // context(value) has been changed.
// user.welcomeMessage()  // sam, welcome to website.

// console.log(this);  // empty object, because it doesn't have any global context now. But in browser this code gives window object.






function chai(){
    let username = "riya"
    // console.log(this);  // gives a global object
    console.log(this.username);  // undefined
    // this is not working here(function), it was working in a object.
}
// chai()


// const chai = function(){
//     let username = "riya"
//     // console.log(this);  // gives a global object
//     console.log(this.username);  // undefined
//     // this is not working here(function), it was working in a object.
// }
// chai()


// +++++++++++++++ ARROW FUNCTION ++++++++++++++++ //
const chai = ()=>{
    let username = "riya"
    // console.log(this);  // gives a empty object
    
}
// chai()


// Explicite Return //
// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// Implicite Return //
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "riya"})

console.log(addTwo(3, 4));

// if we use curlybraces then we have to put return in arrow function but, if we use parenthesis then no need to put return statement. //


const myArray = [2, 6, 8, 8, 9]
// myArray.forEach(() => ()/{}) 