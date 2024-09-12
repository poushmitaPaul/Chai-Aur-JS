const name = "ria"
const repoCount = 50

// console.log(name + repoCount + "Value");  // Outdated syntax
// console.log(` ${name} ${repoCount} value`);  // called String Interpolation,   modern, more reliable and better syntax than above one.

const gameName = new String('rianiann')

// Operations of STRING //

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));
// etc.

// substring //
// const newString = gameName.substring(0, 4)
// console.log(newString);  // ri

// slice //
// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// trim //
// const spaceString = "   riani   "
// console.log(spaceString);
// console.log(spaceString.trim());  // removes all spaces

// replace //
const url = "https://riani.com/rian%20banerjee"
// console.log(url.replace('%20','-'));

// includes //
// console.log(url.includes('ria'));  // true

const place = new String('howrah-salkia-ramkrishna-acharya.lane')
console.log(place.split('-'));



