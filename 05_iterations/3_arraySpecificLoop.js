// for of //

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings ="hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);   
}

const prgrmng = ['js', 'rb', 'py', 'cpp' ]
for (const key in prgrmng) {
    console.log(`${key} shortcut is for ${prgrmng[key]}`);  
 }


// MAP //
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);
// for (const key of map) {
//     console.log(key);    
// }
for (const [key, value] of map) {
    // console.log(key, ':-', value);    
}
for (const key in map) {
    console.log(key);    
}
// Maps are not iterable and loop cannot apply in this.


const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);    
// }


