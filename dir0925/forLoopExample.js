const n = 20;
let output = 0;
let output2 = 1;

for (let i = 0; i <= 100; i++) {
    output += i;
}

for (let i = 1; i <= n; i++) {
    output2 *= i;
}
console.log(output);
console.log(output2);