/*
  NOTE this will not work since it examples and not valid code
*/

// alert
alert('This is an alert');

// multi line comment
/*
  this
  is
  a
  multi
  line
  comment
*/

// single line comment
// This is a single line comment

// math
var number = 5 * 18

// order of operation
number = (8 * 12) + 18 / 2;

// strings
"This is a string of text"
'String of text and numbers'


// concatination
string1 = "Hello"
string2 = "FIND"
return string1 + string2

// = vs == vs ===
// = assignment / assign a value
// == checks for equality
1 == '1' true
// === checks for equality and data type
1 === '2' false

// integers
1 5 10 -12

// floats
decimal
1.2 6.8 -12.82

// booleans
true false / yes no / 0 1

// arrays
[
  "string",
  2,
  true,
]

// hash/key-value pair
{ name: 'Todo Item 1', complete: true }

// Array of hashes
[
  { item_name: 'Eat', complete: false },
  { item_name: 'Code', complete: false },
  { item_name: 'Repeat', complete: false },
  { item_name: 'Sleep', complete: true }
]

// Use case
var people = [
  { name: 'Jace', age: 21, has_dogs: true },
  { name: 'Henry', age: 24566, has_dogs: false },
  { name: 'Jake', age: 28, has_dogs: false },
]

people.map(person => {
  console.log("Name: ")
  console.log(person.name)
  console.log("Age: ")
  console.log(person.age)
  console.log("Has dogs? ")
  console.log(person.has_dogs)
});

// function
/* 
  is a set of precedures to keep your code
  from repeating itself
*/
function sayHello() {
  console.log('Hello')
}

// calling a function
sayHello()

// function with params
function greetPerson(name) {
  console.log('Hello, ' + name)
}

greetPerson('Jace') = "Hello, Jace"
greetPerson('Jake') = "Hello, Jake"
greetPerson('Henry') = "Hello, Henry"
greetPerson('Racoon') = 'Hello, Racoon'
greetPerson('Goose') = 'Hello, Goose'

// reassignment 
var name = 'Jace'
// name is equal to Jace
name = 'Jake'
// name is now equal to Jake

// console log
console.log(name)

// conditions
if (name === 'Jace') {
  console.log('Jace is awesome!')
} else {
  console.log("Eh he's alright")
}

for (var i = 0; i < 10; i++) {
  console.log('Current number is ' + i)
}

while (true) {
  console.log("I am hungry")
}

do {
  console.log('Code')
} while (!hungry)

switch (name) {
case 'Jace':
  console.log('Has 2 dogs!')
  break;
case 'Henry':
  console.log('Abandoned us')
  break;
case 'Jake':
  console.log('Will be here tomorrow!')
default:
console.log('Who???')
}

// array pos
[item0, item1, item2, item3]
// in. 0   in.1  in.2    in.3
  array[2] = item2

// array with different types
[
  1,
  2.6,
  true,
  { firstName: 'Jace', lastName: 'Gold' }
]

// array in array
arr = [
  1,
  2,
  'Jace',
  [
    'item1',
    'item2',
    'item3',
  ]
]

// size of the array
arr.length 

// add item onto the array
arr.push('Henry left us!')

// remove the last element from the array
arr.pop()