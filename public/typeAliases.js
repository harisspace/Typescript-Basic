"use strict";
// type alises
// const greet = (user: {name:string, uid: string|number}) => {
//   console.log(`${user.name} says hello`)
// }
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
console.log(greet({ name: 'haris', uid: 123 }));
