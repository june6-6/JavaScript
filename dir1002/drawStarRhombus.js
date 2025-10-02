// x = 1  공백5, 별1 (5,1)
// x = 2  공백4, 별3 (4,3) (5,1) (4,3)
// x = 3  공백3, 별5 (3,5) (4,3) (5,1) (4,3) (3,5)
// x = 4  공백2, 별7
// x = 5  공백1, 별9

let height = 1;

function drawStarRhombus(height) {
    // 두 함수의 반환 값(별 문자열)을 합쳐서 반환합니다.
    return drawStarForward(height) + drawStarReverse(height - 1);
}
function drawStarHourglass(height) {
    // 두 함수의 반환 값(별 문자열)을 합쳐서 반환합니다.
    return drawStarReverse(height - 1) + drawStarForward(height);
}

function drawStarForward(height) {
    let output = '';
    for (let i = 1; i <= height; i++) {
        for (let j = i; j <= height; j++) {
            output += ' ';
        }
        for (let k = 1; k <= (2*i-1); k++) {
                output += '*';
        }
        output += '\n';
    }
    return output;
}

function drawStarReverse(height) {
    let output = '';
    for (let i = height; i >= 1; i--) {
        for (let j = 0; j <= height - i + 1; j++) {
            output += ' ';
        }
        for (let k = 1; k <= (2*i-1); k++) {
                output += '*';
        }
        output += '\n'
    }
    return output;
}

console.log(drawStarRhombus(5));
//console.log(drawStarHourglass(5));
