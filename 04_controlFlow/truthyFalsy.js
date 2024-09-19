// +++++++++++++ TRUTHY AND FALSY VALUES +++++++++++++ //

// falsy values ----> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values ----> "0", 'false, " ", [], {}, function(){}, 


// const userEmail = "sfsdf@gmail.com"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("got email");   
}else{
    console.log("don't have email");   
}



// cheking array and object are empyu or not //
if(userEmail.length === 0){
    console.log("array is empty");    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// false == 0  // true
// false == ''  // true
// 0 == ''  // true



// +++++ Nullish Coalescing Operator(??): null undefined +++++ //

let val1;
// val1 = 5 ?? 10    // 5
// val1 = null ?? 10    // 10
// val1 = undefined ?? 15    // 15
// val1 = null ?? 10 ?? 20    // 10   




// ++++++++++++++++ Terniary Operator(?:) ++++++++++++++++ //

// condition ? true : false

const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");

