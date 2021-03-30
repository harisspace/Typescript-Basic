// generic
// make the type be flexible or generic
const addUid = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

const docOne = addUid({name: 'haris', age: 20})
// const docTwo = addUid('haris')
console.log(docOne)

// example
// interface Resource {
//   uid: number
//   resourceName: string
//   data: '???' // data will flexible type
// }

interface Resource<T> {
  uid: number
  resourceName: string
  data: T // data will flexible type
}

const docThree: Resource<object> = {
  uid: 123,
  resourceName: 'person',
  data: {name: 'haris', age: 20}
}

const docFour: Resource<string> = {
  uid: 12345,
  resourceName: 'person',
  data: 'haris'
}