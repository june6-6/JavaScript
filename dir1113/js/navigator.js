// navigator 객체의 속성을 출력
let output = '';
output += 'appCodeName: ' + navigator.appCodeName + '\n';
output += 'appName: ' + navigator.appName + '\n';

output += 'appVersion: ' + navigator.appVersion + '\n';
output += 'platform: ' + navigator.platform + '\n';
output += 'userAgent: ' + navigator.userAgent + '\n';
alert(output);

// iOS와 안드로이드의 웹 브라우저를 구분
if (navigator.userAgent.toLowerCase().indexOf('iphone') >= 0 ||
    navigator.userAgent.toLowerCase().indexOf('ipad') >= 0 ||
    navigator.userAgent.toLowerCase().indexOf('ipod') >= 0 ||
    navigator.userAgent.toLowerCase().indexOf('anroid') >= 0) {
    alert('모바일 웹 브라우저입니다.');
} else {
    alert('데스크톱 웹 브라우저입니다.');
}