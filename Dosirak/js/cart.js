
// 체크박스 전체 선택/해제
const checkAll = document.querySelector('.checkAll');
const checkboxes = document.querySelectorAll('.checkOne');

checkAll.addEventListener('click', () => {
    const isChecked = checkAll.checked;

    for(const checkbox of checkboxes) {
        checkbox.checked = isChecked;
    }
});

// 구매하기 블록 스티키
window.addEventListener('scroll', () => {
    const element = document.querySelector('.sticky');
    const offset = window.pageYOffset;
    console.log(offset);

    if(offset >= 200) {
        element.style.position = 'fixed';
        element.style.top = '35px';
        element.style.right = '341px';
    } else {
        element.style.position = 'absolute';
        element.style.top = '0';
        element.style.right = '0';
    };
});

// 수량 조절 버튼
const decreaseButton = document.querySelectorAll('.decrease');
const increaseButton = document.querySelectorAll('.increase');

Array.from(decreaseButton).forEach(function(button) {
    button.addEventListener('click', function(){
        const input = this.parentElement.querySelector('.quantity');
        const value = parseInt(input.value, 10);

        if(value > 1) {
            input.value = value - 1;
            console.log(value);
        }
    });
});

Array.from(increaseButton).forEach(function(button) {
    button.addEventListener('click', function(){
        const input = this.parentElement.querySelector('.quantity');
        const value = parseInt(input.value, 10);

        input.value = value + 1;
        console.log(value);
    });
});

// 이미지 드래그 방지
document.querySelectorAll('.di_btn img').forEach(function(img) {
    img.addEventListener('dragstart', function() {
        event.preventDefault();
    });
});

// 장바구니 상품 여부 표시
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.hidden_block');
    const cartEmptyMessage = document.querySelector('.bl_TBList__empty');

    if (cartItems.length === 0) {
        cartEmptyMessage.parentNode.classList.add('hide-empty-row');
        cartEmptyMessage.classList.add('show_empty_message');
    };
});