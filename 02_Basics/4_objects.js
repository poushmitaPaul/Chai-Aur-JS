// Singleton - (Constructor) //

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "rommy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "dsjdjsfg@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rahim",
            latname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}
// const obj4 = {obj1, obj2}
// const obj4 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({},obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}  // spread

// console.log(obj4);

const users = [ 
    {
        id:1,
        email:"fjgvvj@gmail.com"
    },
    {
        id:1,
        email:"fjgvvj@gmail.com"
    },
    {
        id:1,
        email:"fjgvvj@gmail.com"
    },
    {
        id:1,
        email:"fjgvvj@gmail.com"
    },
]  // objects of the array

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));







//  DESTRUCTING OF OBJECTS  //

const course = {
    courseNAme: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// React
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")


//  JSON

// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]
// randomuser me API  --> famous API to use
// JSON formatter  --> to study API data