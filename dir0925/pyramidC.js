let output = '';

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        output += ' ';
    }
    for (let j = 0; j < 9 - (2*i); j++) {
        output += '*';
    }
    for (let j = 0; j <= i; j++) {
        output += ' ';
    }
    output += "\n";
}
for (let i = 3; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        output += ' ';
    }
    for (let j = 0; j < 9 - (2*i); j++) {
        output += '*';
    }
    for (let j = 0; j <= i; j++) {
        output += ' ';
    }
    output += "\n";
}

console.log(output);