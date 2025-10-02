// 1초마다 실행
let id = setInterval(function () {
    console.log("1초 마다 호출합니다.");
}, 1000);

// 5초 후에 실행    
setTimeout(function () {
    clearInterval(id);
}, 5000);