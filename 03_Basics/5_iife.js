// Immediately Invoked Function Expressions (IIFE) //


(function chai(){
    // named IIFE
    console.log(`DB connected`);
    
})();

(() => {
    // unnamed IIFE
    console.log(`DB connected Two`);
})();

((name) => {
    // parameter passed
    console.log(`DB connected Two ${name}`);
})("riya")

// we use iife for some reasons:
// 1. to immediately execute the function.
// 2. to avoid global scope pollution.