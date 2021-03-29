"use strict";
const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
// variables using use strict types
const fullName = 'haris akbar';
// fullName = 11 // this is cannot happen in typescript
// array
// in array they take a look at initial array value
const myarray = ['budi', 'susi', 'yoshi'];
// myarray.push(20) // cannot do that
const mynewarray = ['budi', true, 'susi'];
// mynewarray.push(true) // yah you can
// mynewarray.push(20) // this is not allowed
// object
let ninja = {
    name: 'budi',
    age: 30,
    hobby: 'fishing'
};
// ninja.hobby('susi');
// ninja.hobby(1); // this is not allowed
ninja = {
    name: 'haris',
    age: 20,
    hobby: 'fishing'
    // budi: 'oke' // this is not allowed
};
