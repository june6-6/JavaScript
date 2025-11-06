let studentA = ['학생A', '학생B', '학생C'];
let studentB = [{
    name: '학생A', 
    korean: 100, 
    english: 90, 
    math: 80, 
    avg: 90
}, {name: '학생B',
    korean: 90, 
    english: 80,
    math: 70, 
    avg: 80 
}, {name: '학생C', 
    korean: 70, 
    english: 60, 
    math: 50, 
    avg: 60
}];

console.log('국어 점수가 높은 순서로 정렬');
studentB.sort((itemA, itemB) => {
    return itemA.korean - itemB.korean;
})
console.log(studentB.reverse());

console.log('영어 점수가 높은 순서로 정렬');
studentB.sort((itemA, itemB) => {
    return itemA.english - itemB.english;
})
console.log(studentB.reverse());
console.log('수학 점수가 높은 순서로 정렬');
studentB.sort((itemA, itemB) => {
    return itemA.math - itemB.math;
})
console.log(studentB.reverse());
console.log('평균 점수가 높은 순서로 정렬');
studentB.sort((itemA, itemB) => {
    return itemA.avg - itemB.avg;
})
console.log(studentB.reverse());