const outer = document.querySelector('.slide_right');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/* 버튼에 이벤트 등록 */
const buttonLeft = document.querySelector('.slide_left_button');
const buttonRight = document.querySelector('.slide_right_button');

buttonLeft.addEventListener('click', () => {
  inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
  })
  innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기

  // 버튼 클릭시 애니메이션 실행
  element = document.getElementById("trans_box");

  function addEvent(event) {
    event.preventDefault;
    element.classList.remove("animationnSlide");
  }
  element.classList.add("animationnSlide");
  

});

buttonRight.addEventListener('click', () => {
  inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
  })
  innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

  currentIndex++;
  currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기

  // 버튼 클릭시 애니메이션 실행
  element = document.getElementById("trans_box");

  function addEvent(event) {
    event.preventDefault;
    element.classList.remove("animationnSlide");
  }
  element.classList.add("animationnSlide");

});




/* 상단 리스트 박스 */
const $best = document.querySelector("#best")
const $pick = document.querySelector("#pick")
const $today = document.querySelector("#today")
const $edited = document.querySelector("#edited")
const $e = document.querySelector("#e")
const $f = document.querySelector("#f")
const $g = document.querySelector("#g")
const $h = document.querySelector("#h")
  

function listHander(e){
  console.log(e.target.id)
  const ListId = e.target.id
  $e.className = "none"
  $f.className = "none"
  $g.className = "none"
  $h.className = "none"
  if(ListId === "best"){
    $e.className = "active"
  }else if(ListId === "pick"){
    $f.className = "active"
  }else if ( ListId === "today"){
    $g.className = "active"
  }else if ( ListId === "edited"){  
    $h.className = "active"
}
}
    
  $best.addEventListener("click", listHander)
  $pick.addEventListener("click", listHander)
  $today.addEventListener("click", listHander)
  $edited.addEventListener("click", listHander)
    
/* "box_con" 클래스 div 클릭시 애니메이션 효과 */
element = document.getElementById("trans_box");

element.addEventListener("click", function(e) {
  e.preventDefault;
  element.classList.remove("animationnSlide");
  element.classList.add("animationnSlide");
}, false);
