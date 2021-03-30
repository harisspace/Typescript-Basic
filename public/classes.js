// access modifier readonly, private, public. Default value is public
export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owe $ ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
console.log(invOne, invTwo);
// the benefit is we can return or push value to array that include Invoice class
let myArray = [];
// myArray.push('oke')
myArray.push(invOne);
myArray.push(invTwo);
// simple constructor, can do if there access modifier exist
class InvoiceSimple {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owe $ ${this.amount} for ${this.details}`;
    }
}
