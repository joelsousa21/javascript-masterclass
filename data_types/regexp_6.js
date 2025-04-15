let regExp = /john@gmail.com/;
let result = regExp.exec("E-mail: john@gmailxcom");
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// PS C:\DEV Project\javascript-masterclass> node .\data_types\regexp_6.js
// john@gmailxcom
// 8
// E-mail: john@gmailxcom
// PS C:\DEV Project\javascript-masterclass> 