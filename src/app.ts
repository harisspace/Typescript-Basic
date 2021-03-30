// const anchor = document.querySelector('a')!; // ! mean this is will return value and not null

// anchor.href

// or you can do like es6
// anchor?.href

// if on query id or class to tell is htmlElement just add  as HTMLInputElement or HTMLSelectElement
import { Payment } from './interfacesAndClasses.js'
import HasFormatter from './interfaces.js'
import { Invoice } from './classes.js'
import { TemplateFormatter } from './templateFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)
// console.log(docOne)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)


const form = document.querySelector('.new-item-form') as HTMLInputElement;
// console.log(form.children)

// input
const type = document.getElementById('type') as HTMLSelectElement;
const tofrom =  document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

const ul = document.querySelector('ul')!
const list = new TemplateFormatter(ul)

form.addEventListener('submit', function(this: HTMLInputElement ,e:Event) {
  e.preventDefault()

  let doc: HasFormatter;
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  if (type.value === 'invoice') {
    doc = new Invoice(...values)
  }else {
    doc = new Payment(...values)
  }

  list.render(doc, type.value, 'start')
})
