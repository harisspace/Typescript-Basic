// initial function types
let iniFunction: Function;

// iniFunction = 'budi'
iniFunction = () => {
  console.log('haii ini function')
}

// parameter
const add = (a: number, b: number) => {
  console.log(a)
  console.log(a+b)
}

// option parameter (?)
const jumlah = (a: number, b: number, c?: string) => {
  console.log(c)
}

// initial value
const jumlahInit = (a: number, b:number, c: string = 'haii') => {
  console.log(a+b, c)
}

// return value
const returnFunc1 = (a: number, b: number) => {
  return a+b;
}

const iniPastiNumber = returnFunc1(2,3)  // typesccript will invert that tobe number

const returnFunc2 = (a: number, b: number): number => {
  return a + b
}
const iniPastiNumber2 = returnFunc2(4,5)
