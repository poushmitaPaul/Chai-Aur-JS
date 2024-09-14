// +++++++++++++++++++ ARRAY +++++++++++++++++++ //

// Array makes shallow copies.(check about 1.Shallow Copy and about 2.Deep Copy in mdn )

const myArr = [0, 1, 2, 3, 4, 5, true, "riya"]
const myheros = ["ddhdch", "dgshsdg"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);
// console.log(myArr2[2]);
// console.log(myArr["one"]);  // cannot acces like this in array. This is a shortcome in array.


// +++++++++++++++++++ ARRAY METHODS +++++++++++++++++++ //

// console.log(myArr.push(6));
// console.log(myArr.pop());

// console.log(myArr.unshift(9)); // adds element at the starting.known as useless because for it the indexes of all elements shifts.
// console.log(myArr.shift());  

// console.log(myArr.includes(9));  // dataType -> boolean
// console.log(myArr.indexOf(3)); 

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// ******* Slice, Splice ******** //

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C", myArr);

// Differences between Slice and Splice:
//     1. Slice  -> Does not includes the last indexth element.
//        Splice -> It includes the last indexth element.

//     2. Slice  -> Does not change the original array.
//        Splice -> It changes the original array by cutting the 
//                  given indexths elements from the original 
//                  array.






