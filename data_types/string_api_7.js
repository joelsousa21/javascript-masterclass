"Java".concat("Script");
"Data".concat("Flex");
"Script".padStart(10, "Java");
"C".padEnd(3, "+");
"C".concat("+".repeat(2));
" Self ".trim();
" Scheme ".trimLeft();
" Perl ".trimRight();

// > "JavaScript".slice(0,4);
// 'Java'
// > "Java".concat("Script");
// 'JavaScript'
// > "Data".concat("Flex");
// 'DataFlex'
// > "Script".padStart(10, "Java");
// 'JavaScript'
// > "C".padEnd(3, "+");
// 'C++'
// > "C".concat("+".repeat(2));
// 'C++'
// > " Self ".trim();
// 'Self'
// > " Scheme ".trimLeft();
// 'Scheme '
// > " Perl ".trimRight();
// ' Perl'
// > 