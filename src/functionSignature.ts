// example 1
// you can initiate variables with function 
// let func: Function;
let sayHello: (a: string, b: string) => void;

sayHello = (name: string, hello: string) => {
  console.log(`${name} say ${hello}`)
}

// example 2
let logDetails: (a: string, b: number) => void;
logDetails = (name: string, age: number) => {
  console.log(`${name} is ${age} years old`)
}