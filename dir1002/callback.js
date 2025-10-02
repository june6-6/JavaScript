function callTenTimes(example) {
    for (let i = 0; i < 10; i++) {
        // 매개 변수로 전달된 함수를 호출
        example();
    }
}

callTenTimes(function () {
    console.log("함수 호출");
});