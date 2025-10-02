// min 부터 max 까지 숫자를 더해 리턴

function sum(min, max) {
    let output = 0;
    for (let i = min; i <= max; i++) {
        output += i;
    }
    return output;
}

console.log(sum(1, 100));