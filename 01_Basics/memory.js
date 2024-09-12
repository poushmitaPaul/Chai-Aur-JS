// We have two types of memory: 

// 1.Stack -> Uses for PRIMITIVE dataTypes.
//            We get a copy of a declared variable.
//            EXAMPLE:: let myName = "piugfg"
                    // let yourName = myName
                    // yourName = "aunty"

                    // console.log(myName);  // piugfg
                    // console.log(yourName);  // aunty


// 2.Heap -> Uses for NON-PRIMITIVE dataTypes.
//           We get the refference(original) of a declared variable.
//           EXAMPLE:: let userOne = {
                    //     email: "user@gmail.com",
                    //     upi: "user@ybl"
                    // }
                    // let userTwo = userOne
                    // userTwo.email = "dtuhxfh@gmail.com"

                    // console.log(userOne.email);  //dtuhxfh@gmail.com
                    // console.log(userTwo.email);  //dtuhxfh@gmail.com
                        
                        