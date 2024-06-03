//import the lodash library
const _ = require('lodash');

//example data
const users = [
    {'user': 'fred',    'age': 48},
    {'user': 'barney',    'age': 36},
    {'user': 'fred',    'age': 40},
    {'user': 'barney',    'age': 34},
];

//use _.sortBy to sort users by age
const sortedUsers = _.sortBy(users,  ['user','age']);
console.log('Sorted Users:', sortedUsers);


//use _.groupBy to group users by their user name
const groupedUsers = _.groupBy(users, 'user');
console.log('Grouped Users:',  groupedUsers);

//use _.uniq to get unique values from an array
const numbers = [2, 1, 2];
const uniqueNumbers = _.uniq(numbers);
console.log('Unique Numbers:', uniqueNumbers );

//use _.camelCase to convert a string to camelCase
const camelCaseString = _.camelCase('Foo Bar');
console.log('Camel Case String:', camelCaseString);