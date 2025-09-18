// xxxx-xx-xx x요일 AM|PM xx:xx 형식으로 날짜 출력하기
const noon = 12;
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dateDay = date.getDate();
let day = date.getDay();
let hours = date.getHours();
let amPm;
let minutes = date.getMinutes();
let minutesString;

switch(day) {
    case 0 :
        day = "일"
        break;
    case 1 :
        day = "월"
        break;
    case 2 :
        day = "화"
        break;
    case 3 :
        day = "수"
        break;
    case 4 :
        day = "목"
        break;
    case 5 :
        day = "금"
        break;
    case 6 :
        day = "토"
        break;
}

// 10보다 작은 minutes는 앞에 0 붙이기
if (minutes < 10) {
    minutesString = "0" + minutes;
} else {
    minutesString = minutes;
}

// 오전은 AM, 오후 12시는 PM, 오후는 PM
if (hours < 12) {
    amPm = "AM ";
} else if (hours == noon) {
    amPm = "PM ";
} else {
    amPm = "PM ";
    hours = hours - 12;
}
console.log(year + "-" + month + "-" + dateDay + " " + day + "요일 " + amPm + (hours)+ ":" + minutesString);