let output = '';

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10 - i; j++) {
        output += ' ';
    }
    for (let j = 0; j <= i; j++ ) {
        output += '*';
    }
    output += '\n';
}

console.log(output);