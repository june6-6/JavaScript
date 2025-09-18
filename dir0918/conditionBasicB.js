let date = new Date();

if (date.getHours() < 12) {
    console.log("오전입니다.");
}

if (date.getHours() > 12) {
    console.log("오후입니다.");
}

if (date.getHours() < 12) {
    console.log("오전입니다.");
} else {
    console.log("오후입니다.");
}

console.log(date.getFullYear());
console.log(date.getYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
