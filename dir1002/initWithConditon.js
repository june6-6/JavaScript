// 조건문을 활용한 매개 변수 초기
function print(name, count) {
    if (typeof(count) == "undefined") {
        count = 0;
    }
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
// 디폴트 매개 변수를 활용한 매개 변수 초기화
function print(name, count = 0) {
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

// 함수 호출
print("사과");