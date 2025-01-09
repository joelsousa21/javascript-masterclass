let counter = 0;
console.time("performance");
while (counter <100000){
new String("JavaScript");
counter++;
}
console.timeEnd("performance");

// ➜  javascript-masterclass git:(main) ✗ node data_types/string_5.js

// performance: 7.129ms
// ➜  javascript-masterclass git:(main) ✗ 