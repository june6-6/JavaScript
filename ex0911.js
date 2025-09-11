// Hello World 출력
console.log("Hello World!");

// 둘레, 넓이 출력하기
let pi = 3.14159265;
let radius = 10;

console.log(`둘레: ${2 * pi * radius}`);
console.log("넓이: " + pi * radius * radius);

// 문자열 합치기
let output = "Hello ";
output += "World";
output += "!";

console.log(output);

//숫자 + 문자열
console.log(52 + 273);
console.log("52" + 273);
console.log(53 + "273");
console.log("52" + "273"); 

console.log("52" - 273);
console.log("52" * 273);
console.log("52" / 273);
console.log("52" % 273);

let nan = Number("안녕하세요");
let undefinedVariable;

console.log(!!756);
console.log(!nan);
console.log(!!"");
console.log(!!null);
console.log(!!undefinedVariable);