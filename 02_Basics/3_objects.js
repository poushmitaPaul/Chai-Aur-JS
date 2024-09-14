// 1.Singleton - (constructor)

// Object.create




// 2.Object Literals

const mySymbol = Symbol("key1")

const jsUser = {
    [mySymbol]: "key1",  // only method
    name: "riya",
    age: 19,
    "full name": "riya roy",
    location: "jaipur",
    email: "ddhfhjgg@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.full name);  // error
// console.log(jsUser."full name");  // error
// console.log(jsUser["full name"]);  // only this can be used here
// console.log(jsUser[mySymbol]);  // only method for this.

// jsUser.name = "rima"
// Object.freeze(jsUserr)  // will freeze the object and will not allow any changes.

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
