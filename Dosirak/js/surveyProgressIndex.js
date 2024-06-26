/*
    div사이즈 동적으로 구하기
*/
const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스


const progressBar = document.querySelector('.progress_bar')
const progressArea = document.querySelector('.progress_area')
const oneStepLength = progressArea.clientWidth / (inners.length - 1);

inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
    버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector('.button-previous');
const buttonRight = document.querySelector('.button-next');

buttonLeft.addEventListener('click', () => {
    currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
    progressBar.style.width = `${oneStepLength * currentIndex}px`
    if(currentIndex == 0){
        buttonLeft.disabled = true;
    }
    if(currentIndex != inners.length - 1){
        buttonRight.disabled = false;
    }
});

buttonRight.addEventListener('click', () => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
    progressBar.style.width = `${oneStepLength * currentIndex}px`
    if(currentIndex != 0){
        buttonLeft.disabled = false;
    }
    if(currentIndex == inners.length - 1){
        buttonRight.disabled = true;
    }
});