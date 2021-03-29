"use strict";
const me = {
    name: 'haris',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
// let someone: IsPerson;
const greetPerson = (person) => {
    console.log(`haii ${person.name}`);
};
greetPerson(me);
