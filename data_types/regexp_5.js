let regExp = /john@gmail.com/;
let result = regExp.exec("E-mail: john@gmail.com");
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// PS C:\DEV Project\javascript-masterclass> node .\data_types\regexp_5.js
// john@gmail.com
// 8
// E-mail: john@gmail.com
// PS C:\DEV Project\javascript-masterclass> 