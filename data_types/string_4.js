let counter = 0;
console.time("performance");
while (counter < 100000) {
"JavaScript";
counter++;
}
console.timeEnd("performance");

// ➜  javascript-masterclass git:(main) ✗ node data_types/string_4.js

// performance: 3.498ms