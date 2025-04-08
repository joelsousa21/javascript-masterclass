let condition = new Boolean(false);

if (condition) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}
// --------------------------- let condition = true;
// ➜  javascript-masterclass git:(main) ✗ node data_types/example.js 
// The condition is true
// ➜  javascript-masterclass git:(main) ✗ 

// --------------------------- let condition = false;
// ➜  javascript-masterclass git:(main) ✗ node data_types/example.js
// The condition is false
// ➜  javascript-masterclass git:(main) ✗ 

// --------------------------- let condition = new Boolean(true);
// ➜  javascript-masterclass git:(main) ✗ node data_types/example.js 
// The condition is true
// ➜  javascript-masterclass git:(main) ✗ 

// --------------------------- let condition = new Boolean(false);
// ➜  javascript-masterclass git:(main) ✗ node data_types/example.js 
// The condition is true
// ➜  javascript-masterclass git:(main) ✗ 

function generateSerial (max) {
    return Math.floor(Math.random() * max);
}

generateSerial(10);
generateSerial(100);
generateSerial(1000);
generateSerial();