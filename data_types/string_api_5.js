"C++".match(/\+/g);
"Java".search(/a/);
"JavaScript".replace("Java", "Ecma");
"JavaScript".replace(/a/g, 4);

// > "C++".match(/\+/g);
// [ '+', '+' ]
// > "Java".search(/a/);
// 1
// > "JavaScript".replace("Java", "Ecma");
// 'EcmaScript'
// > 