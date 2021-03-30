// const anchor = document.querySelector('a')!; // ! mean this is will return value and not null
// anchor.href
// or you can do like es6
// anchor?.href
// if on query id or class to tell is htmlElement just add  as HTMLInputElement or HTMLSelectElement
import { Payment } from './interfacesAndClasses.js';
import { Invoice } from './classes.js';
import { TemplateFormatter } from './templateFormatter.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)
// console.log(docOne)
// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
const form = document.querySelector('.new-item-form');
// console.log(form.children)
// input
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.querySelector('ul');
const list = new TemplateFormatter(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
});
