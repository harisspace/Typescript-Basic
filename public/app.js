"use strict";
// const anchor = document.querySelector('a')!; // ! mean this is will return value and not null
// anchor.href
// or you can do like es6
// anchor?.href
// if on query id or class to tell is htmlElement just add  as HTMLInputElement or HTMLSelectElement
const form = document.querySelector('.new-item-form');
console.log(form.children);
// input
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
form.addEventListener('submit', function (e) {
    console.log(this);
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
