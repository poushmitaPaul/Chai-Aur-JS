// when we don't know about the no. of parameters

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(207, 689, 576, 4678, 579));
// ...num1 --> here three dot is Rest function here which is the Spread function also but here it is Rest.

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(207, 689, 576, 4678, 579));  
// [576, 4678, 579] -> 1st two values are in val1 and val2 parameters and rest of values are printed in a array.




// const user = {
//     username: "hitesh",
//     price: 199
// }
const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// console.log(handleObject(user));  // undefined
console.log(handleObject({
    username: "hitesh",
    price: 199
})); 




const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 7908]));
