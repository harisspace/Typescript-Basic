// zero index
enum ResourceType { BOOK, AUTHOR, FILM, PERSON, DIRECTOR }

interface ResourceVideo<T> {
  uid: number;
  resourceType: ResourceType;
  data: T
}

const docFive: ResourceVideo<object> = {
  uid: 1234532,
  resourceType: ResourceType.AUTHOR,
  data: {name: 'budi', age: 32}
}