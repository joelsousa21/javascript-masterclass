let regExp = /[a-z]+@[\.a-z]+/g;
let result1 = regExp.exec("mary@hotmail.com;john@gmail.com");
console.log(result1[0]);
console.log(result1.index);
let result2 = regExp.exec("mary@hotmail.com;john@gmail.com");
console.log(result2[0]);
console.log(result2.index);

// PS C:\DEV Project\javascript-masterclass> node .\data_types\regexp_13.js
// mary@hotmail.com
// 0
// john@gmail.com
// 17
// PS C:\DEV Project\javascript-masterclass> 