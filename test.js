const basket = document.querySelector(".product");
const modal = document.querySelector("#modal");
const modalWindow = document.querySelector(".modal-window");
const closeBasket = document.querySelector("#closeBasket");
const $screen = document.querySelector(".screen");
const $getItem = document.querySelector("#getItem");
const $white = document.querySelector(".white");
const $black = document.querySelector(".black");
const $title = document.querySelector(".title");
// const $minus = document.querySelector("#minus");
// const $plus = document.querySelector("#plus");
const $val = document.querySelector("#val");
const $size1 = document.querySelector("#size1");
const $size2 = document.querySelector("#size2");
const $size3 = document.querySelector("#size3");

let header = document.querySelector("header");
let headerHeight = header.offsetHeight

window.onscroll = function () {
  let windowTop = window.scrollY;
  	// 스크롤 세로값이 헤더높이보다 크거나 같으면 
	// 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } 
  // 아니면 클래스 'drop'을 제거
  else {
    header.classList.remove("drop");
  }
};

let colorData = 0;
let color = "";
let size = 0
let confirmData = document.createElement("div"); //제품담기


function colorHandler(event) {
  //컬러값 저장
  colorData = event.target.value;
}

$white.addEventListener("click", colorHandler);
$black.addEventListener("click", colorHandler);

function modalOn() {
  //모달창 배치
  modal.style.display = "flex";
  modalWindow.style.display = "flex";
}

basket.addEventListener("click", modalOn); 
///
// function quantityPlus(){
//     $val.value++
// }
// function quantityMinus(){
//     $val.value--
// }
// $minus.addEventListener("click", quantityMinus)
// $plus.addEventListener("click", quantityPlus)
////

function sizeHandler(e){
    size = e.target.value
}

$size1.addEventListener("click", sizeHandler)
$size2.addEventListener("click", sizeHandler)
$size3.addEventListener("click", sizeHandler)


////

function getItemHandler() {
  //상품담기
  console.log(colorData);
  colorData == 1
    ? (color = "black")
    : colorData == 2
    ? (color = "white")
    : (color = null);
  if(color=== null){
      alert("색상을 선택해주세요")
    }else if(size === 0){
        alert("size를 선택해주세요")

    }else{
        $title.insertAdjacentHTML('beforeend', `<div>${color}색상 ${size}mm ${$val.value}개가 추가되었습니다.</div>`);

    }
  color = null;
}


$getItem.addEventListener("click", getItemHandler);

function modalOff() {
  //취소버튼클릭시 모달창 닫기
  modal.style.display = "none";
}
closeBasket.addEventListener("click", modalOff);


