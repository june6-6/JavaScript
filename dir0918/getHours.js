let date = new Date();
const noon = 12;

if(date.getHours() < 12) {
    console.log(`AM ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초입니다.`);
    console.log("AM " + date.getHours() + "시 " + date.getMinutes() + "분 " + date.getSeconds() + "초입니다.");
}else if(date.getHours() == noon) {
    console.log(`PM ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초입니다.`);
    console.log("PM " + date.getHours() + "시 " + date.getMinutes() + "분 " + date.getSeconds() + "초입니다.");
}else {
    console.log(`PM ${date.getHours() - noon}시 ${date.getMinutes()}분 ${date.getSeconds()}초입니다.`);
    console.log("PM " + (date.getHours() - noon) + "시 " + date.getMinutes() + "분 " + date.getSeconds() + "초입니다.");
}
