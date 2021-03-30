// zero index
// enum ResourceType { BOOK, AUTHOR, FILM, PERSON, DIRECTOR }
// in enum can add default value
// enum ResourceType { BOOK = 2, AUTHOR, FILM, PERSON, DIRECTOR } // will auto increment from 2 index
enum ResourceType { BOOK = 2, AUTHOR, FILM = 5, PERSON = 'person', DIRECTOR = 2 } // if person default string, have to add initiate value for director to

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