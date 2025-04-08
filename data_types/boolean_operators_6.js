function generateSerial (max) {
    if (max === undefined) {
        max = 1000;
    }
    return Math.floor(Math.random() * max);
}

console.log(generateSerial(10));
console.log(generateSerial(100));
console.log(generateSerial(1000));
console.log(generateSerial());