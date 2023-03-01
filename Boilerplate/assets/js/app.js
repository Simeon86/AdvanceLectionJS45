console.log('//////////////////////////////////SET/////////////////////////////////////////////');

let set = new Set() ;

let userOne = { name: 'Valeria'};
let userTwo = { name: 'Simeon'};
let userThree = { name: 'Caloyan'};

set.add(userOne);
set.add(userTwo);
set.add(userOne);
set.add(userThree);
set.add(userTwo);

console.log(set)
console.log(set.size)
console.log(set.has(userOne))

// set.delete(userTwo)
// console.log(set)

// set.clear()
// console.log(set)

for(let value of set) {
    console.log(value)
}

console.log('///////////////////////////////////////////////////////////////////////////////');

set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain)
})

console.log('///////////////////////////////////////////////////////////////////////////////');

let mapFromSet = new Map(set.entries());
console.log(mapFromSet)

console.log('////////////////////////////JSON - Javascript Object Notation///////////////////////////////////////////////////');

// JSON.stringify -> convert to JSON String
// JSON.paser -> cover from JSON String

// Object
// Array
// Number
// String
// Boolean
// Null

let obj = {
    name: 'Simeon',
    1: true,
    'age': 35,
    courses: ['WEB Fundamentals', 'Javascript Advance'],
    something: null,
    somethingElse: undefined,
    somethingObject: {
        somethingObject: 'somethingObject',
    }
}

console.log(obj);
let jsonFromObj = JSON.stringify(obj);
console.log(jsonFromObj);

console.log(JSON.stringify(1));
console.log(JSON.parse('1'));
console.log(JSON.parse('"1"'));
console.log(JSON.parse('null'));

let objFromJSON = JSON.parse(jsonFromObj);
console.log(objFromJSON);
