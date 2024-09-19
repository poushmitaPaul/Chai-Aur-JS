const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'    
}

// for-of doesn't work for object

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);  
}