let regExp = /^[a-z]+@[a-z]+(\.[a-z]{2,3})+$/;
let result = regExp.exec("mary@hotmail.com.br");
console.log(result[0]);
console.log(result[1]);
console.log(result.index);
console.log(result.input);

// PS C:\DEV Project\javascript-masterclass> node .\data_types\regexp_10.js
// mary@hotmail.com.br
// .br
// 0
// mary@hotmail.com.br
// PS C:\DEV Project\javascript-masterclass> 