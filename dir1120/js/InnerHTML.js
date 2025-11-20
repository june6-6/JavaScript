window.onload = function() {
    const header = this.document.getElementById('header');

    const originalText = header.innerHTML;
    header.innerHTML = '자바스크립트로 변경했어요!<br />';
    header.innerHTML += '원래는 ' + originalText + '였답니다.';

}