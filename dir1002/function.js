// 익명 함수
let 함수1 = function () {
    console.log("함수1의 첫 번째 줄");
    console.log("함수1의 두 번째 줄");
};

// 선언적 함수
function 함수2() {
    console.log("함수2의 첫 번째 줄");
    console.log("함수2의 두 번째 줄");
}

// 화살표 함수
let 함수3 = () => {
    console.log("함수3의 첫 번째 줄");
    console.log("함수3의 두 번째 줄");
};

함수1();
함수2();
함수3();

console.log(함수1);