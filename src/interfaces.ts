// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string):void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'haris',
  age: 20,
  speak(text: string):void {
    console.log(text)
  },
  spend(amount: number):number {
    console.log('I spent', amount)
    return amount
  }
}

console.log(me)

// let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log(`haii ${person.name}`)
}

greetPerson(me)

export default interface HasFormatter {
  format(): string;
}