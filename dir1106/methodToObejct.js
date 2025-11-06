// 변수 생성
let primitiveNumber = 273;

// 메소드 추가
Number.prototype.method = function() {
    return 'Primitive Method';
}

// 메소드 실행
console.log(primitiveNumber.method());

// 기본 자료형에 프로토타입으로 메소드 추가