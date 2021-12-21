// box를 선택한다.
let box = document.querySelectorAll('.box');
// 쿼리셀렉트올은 box class를 모두 가져오기 때문에 배열이다.
// 배열이기 때문에 forEach를 사용할 수 있다. 
box.forEach(popup => popup.addEventListener('click', () => {
    // 이벤트 리스너를 사용하여 해당 요소가 클릭이 되면 다음과 같이 실행한다.
    // active 클래스를 해당 요소에 추가한다. 해당 요소는 popup으로 가져 왔다.
    popup.classList.toggle('active')
}))