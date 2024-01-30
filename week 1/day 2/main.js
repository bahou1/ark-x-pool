// Importing greetPerson from greetPerson.js file
const { greetPerson } = require('./greetPerson') ;

// Using greetPerson() defined in greetPerson.js
let displayName = greetPerson('Codecademy');

console.log(displayName);
// Output: Hi, Codecademy