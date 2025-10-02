// 모래시계 모양으로 별 그리기
// 공백1 별9
// 공백2 별7
function drawStarHourglass(height) {
    let output = '';

    for (let i = height; i >= 1; i--) {
        for (let j = i; j <= height; j++) {
            output += ' ';
        }
        for (let k = 1; k <= (2*i-1); k++) {
            output += '*';
        }
        output += "\n";
    }
    for (let i = 1; i <= height-1; i++){
        for (let j = i; j <= height-1; j++) {
            output += ' ';
        }
        for (let k = 0; k <= 2*i; k++ ) {
            output += '*'; 
        }
        output += '\n';
    }
    return output;
}

console.log(drawStarHourglass(5));



