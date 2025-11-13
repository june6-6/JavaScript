// 함수선언 
function callTentimes(callback) {
    if (typeof(callback) == "function") {
        for (let i = 0; i < 10; i++) {
            callback();
            console.log(i);
        }
    } else {
        console.log("매개변수 callback을 함수로 지정해주세요!");
    }
}

// 정상 실행
callTentimes(function() {
    console.log("안녕하세요.");
});

// 예외 발생
callTentimes();