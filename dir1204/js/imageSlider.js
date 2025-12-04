// HTML 문서의 모든 요소가 로드된 후 자바스크립트를 실행합니다.
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. 슬라이더의 크기 설정 (너비 460px, 높이 300px)
    const width = 460;
    const height = 300;

    // 2. 현재 보여지고 있는 이미지의 순서 번호 (인덱스, 0부터 시작)
    let current = 0;

    // 3. HTML 요소들을 선택하여 변수에 저장
    const slider = document.querySelector(".slider");       // 슬라이더 전체 프레임
    const imagesBox = document.querySelector(".images");    // 이미지들을 감싸는 긴 박스
    const images = document.querySelectorAll(".image");     // 개별 이미지들
    const imageLength = images.length;                      // 이미지의 총 개수

    // 4. 슬라이더 프레임의 크기를 자바스크립트로 지정
    slider.style.width = width + "px";
    slider.style.height = height + "px";

    // 5. 이미지 박스(imagesBox)의 가로 길이를 설정
    // 원리: 이미지들이 옆으로 나열되어야 하므로 (이미지 1개 너비 * 이미지 개수)만큼 길게 설정함
    imagesBox.style.width = width * imageLength + "px";

    // 6. 각 이미지 요소의 크기도 설정한 width, height에 맞춤
    images.forEach((img) => {
        img.style.width = width + "px";
        img.style.height = height + "px";
    });

    // 7. 슬라이더 이동 함수
    // 원리: imagesBox의 left 값을 음수(-)로 변경하여 박스를 왼쪽으로 당겨서 다음 이미지를 보여줌
    function moveTo() {
        imagesBox.style.left = -current * width + "px";
    }

    // 8. 버튼 생성 및 클릭 이벤트 설정
    for (let i = 1; i < imageLength + 1; i++) {
        const btn = document.createElement("button"); // 버튼 태그 생성
        btn.textContent = i;                    // 버튼 텍스트에 번호(0, 1, 2...) 입력
        btn.setAttribute("data-position", i);         // 버튼에 해당 이미지 번호를 속성으로 숨겨둠

        btn.style.marginRight = "10px"; // 버튼 오른쪽에 10px 간격을 줍니다.
        // 버튼 클릭 시 실행할 동작
        btn.addEventListener("click", function () {
            // 클릭된 버튼의 data-position 값을 읽어와서 숫자(Number)로 변환 후 current에 저장
            current = Number(this.getAttribute("data-position"));
            moveTo(); // 해당 위치로 이동
        });

        // 생성한 버튼을 슬라이더(slider) 태그 바로 앞에 삽입
        document.body.insertBefore(btn, slider);
    }

    // 9. 자동 슬라이드 기능 (4초마다 실행)
    setInterval(function () {
        // 현재 번호를 1 증가시킴. 
        // % imageLength (나머지 연산)을 사용하는 이유: 
        // 마지막 이미지 번호에 도달했을 때 다시 0번(처음)으로 돌아가기 위함 (무한 루프)
        current = (current + 1) % imageLength;
        
        moveTo(); // 계산된 위치로 이동
    }, 3000); // 4000ms = 4초
});