"use strict";
// generic
// make the type be flexible or generic
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUid({ name: 'haris', age: 20 });
// const docTwo = addUid('haris')
console.log(docOne);
const docThree = {
    uid: 123,
    resourceName: 'person',
    data: { name: 'haris', age: 20 }
};
const docFour = {
    uid: 12345,
    resourceName: 'person',
    data: 'haris'
};
