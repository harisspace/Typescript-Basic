// access modifier readonly, private, public. Default value is public
export class Invoice {
  readonly client: string // just readonly, cannot change the value 
  private details: string // can change and read just inside class
  public amount: number // can change and read anywhere

  constructor(c: string, d: string, a: number) {
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owe $ ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);

console.log(invOne, invTwo)

// the benefit is we can return or push value to array that include Invoice class
let myArray: Invoice[] =[]
// myArray.push('oke')
myArray.push(invOne)
myArray.push(invTwo)

// simple constructor, can do if there access modifier exist
class InvoiceSimple {
  constructor(
    readonly client:string,
    private details:string,
    public amount:number
  ) {}

  format() {
    return `${this.client} owe $ ${this.amount} for ${this.details}`;
  }
}