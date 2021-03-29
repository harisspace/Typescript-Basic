// type alises
// const greet = (user: {name:string, uid: string|number}) => {
//   console.log(`${user.name} says hello`)
// }

// you can simply this tobe
type stringOrNum = string|number;
const greet = (user: {name:string, uid: stringOrNum}) => {
  console.log(`${user.name} says hello`)
}

console.log(greet({name: 'haris', uid: 123}))