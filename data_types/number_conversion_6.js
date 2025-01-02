parseFloat("10");
parseFloat("2.5");
parseFloat("0xFF");
parseFloat("0b10");

// > parseFloat("10")
// 10
// > parseFloat("9.9")
// 9.9
// > parseFloat("2.5")
// 2.5
// > parseFloat("0xFF")
// 0
// > parseFloat("xFF")
// NaN
// > parseFloat("0xFF")
// 0
// > parseFloat("0b10")
// 0
// > 