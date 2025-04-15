let regExp = /^john@gmail\.com$/;
let result1 = regExp.exec("E-mail: john@gmail.com");
console.log(result1);
let result2 = regExp.exec("john@gmail.com");
console.log(result2);

// PS C:\DEV Project\javascript-masterclass> node .\data_types\regexp_8.js
// null
// [
//   'john@gmail.com',
//   index: 0,
//   input: 'john@gmail.com',
//   groups: undefined
// ]
// PS C:\DEV Project\javascript-masterclass> 