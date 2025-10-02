// min 부터 max까지 숫자를 곱해서 출력

function multiple(min, max) {
    let output = 1;
    for (let i = min; i <= max; i++) {
        output *= i;
    }
    return output;
}

console.log(multiple(1, 10));