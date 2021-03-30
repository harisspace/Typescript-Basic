"use strict";
// zero index
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["PERSON"] = 3] = "PERSON";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1234532,
    resourceType: ResourceType.AUTHOR,
    data: { name: 'budi', age: 32 }
};
