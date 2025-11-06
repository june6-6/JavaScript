let now = new Date();
let before = new Date('June 15, 1995');

let intervalA = now.getTime() - before.getTime();
let intervalB = now.getTime() - before.getTime();

intervalA = Math.floor(intervalA / (1000 * 60 * 60 * 24))
intervalB = Math.floor(intervalB / (1000 * 60 * 60 * 24 * 365))
let year = intervalA / 365;

console.log(`태어나고 ${intervalA}일 지났습니다.`);
console.log(`태어나고 ${intervalB}년 지났습니다.`);
console.log(`태어나고 ${year.toFixed(0)}년 지났습니다.`);