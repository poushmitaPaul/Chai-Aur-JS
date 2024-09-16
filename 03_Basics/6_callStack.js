// JavaScript Execution Context //
// --> Global Execution Context
// --> Function Execution Context
// --> Eval Execution Context

// JavaScript code runs in two phases //
// 1 -> Memory Creation Phase or, Memory Phase or, Creation Phase.
// 2 -> Execution Phase


// code //
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/*
Step 1: Global Execution/Environment
        --> this

Step 2: Memory Phase 
        --> val1 = undefined, 
            val2 = undefined, 
            addNum = defination, 
            result1 = undefined, 
            result2 = undefined

Step 3: Execution Phase 
        --> val1 = 10, 
            val2 = 5,
            addNum -> new variable environment + execution 
                      thread 
                      1.Memory Phase:: 
                        --> val1 = undefined, 
                            val2 = undefined,
                            total = undefined
                      2.Execution Context::
                        --> num1 = 10,
                            num2 = 5,
                            total = 15  
                            //this total returns to global execution context. 
                      //now the new environment(the new variable environment + execution thread) will be deleted,
            result1 = 15,
            result2 -> same as previous new environment
                    = 12
*/


// Call Stack // --> vdo

