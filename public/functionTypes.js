"use strict";
// initial function types
let iniFunction;
// iniFunction = 'budi'
iniFunction = () => {
    console.log('haii ini function');
};
// parameter
const add = (a, b) => {
    console.log(a);
    console.log(a + b);
};
// option parameter (?)
const jumlah = (a, b, c) => {
    console.log(c);
};
// initial value
const jumlahInit = (a, b, c = 'haii') => {
    console.log(a + b, c);
};
// return value
const returnFunc1 = (a, b) => {
    return a + b;
};
const iniPastiNumber = returnFunc1(2, 3); // typesccript will invert that tobe number
const returnFunc2 = (a, b) => {
    return a + b;
};
const iniPastiNumber2 = returnFunc2(4, 5);
