let regExp = /^[a-z]+@[a-z]+\.[a-z ]{3}$/;
let result = regExp.exec("jane@hotmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// PS C:\DEV Project\javascript-masterclass> node .\data_types\regexp_9.js
// jane@hotmail.com
// 0
// jane@hotmail.com
// PS C:\DEV Project\javascript-masterclass> 