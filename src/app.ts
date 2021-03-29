// const anchor = document.querySelector('a')!; // ! mean this is will return value and not null

// anchor.href

// or you can do like es6
// anchor?.href

// if on query id or class to tell is htmlElement just add  as HTMLInputElement or HTMLSelectElement
const form = document.querySelector('.new-item-form') as HTMLInputElement;
console.log(form.children)

// input
const type = document.getElementById('type') as HTMLSelectElement;
const tofrom =  document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

form.addEventListener('submit', function(this: HTMLInputElement ,e:Event) {
  console.log(this)
  e.preventDefault()
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})
