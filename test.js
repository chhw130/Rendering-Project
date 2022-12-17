const basket = document.querySelector(".product");
const modal = document.querySelector("#modal");
const modalWindow = document.querySelector(".modal-window");
const closeBasket = document.querySelector("#closeBasket");
const $screen = document.querySelector(".screen");
const $getItem = document.querySelector("#getItem");
const $white = document.querySelector(".white");
const $black = document.querySelector(".black");
const $title = document.querySelector(".title");
const $val = document.querySelector("#val");
const $value2 = document.querySelector("#value2");
const $size1 = document.querySelector("#size1");
const $size2 = document.querySelector("#size2");
const $size3 = document.querySelector("#size3");
const $productList = document.querySelector("#productList");
const $mustColor = document.querySelector("#mustColor");
const $mustSize = document.querySelector("#mustSize");
const $line = document.querySelector("#line");
const $goBasket = document.querySelector("#goBasket");
const $img1 = document.querySelector(".screen img")



const basketData = [
  {
  },
];
const newbasketData = [{}]
let imgName = $img1.alt
let colorData = 0;
let color = "";
let size = 0;
let confirmData = document.createElement("div"); //제품담기

let header = document.querySelector("header");
let headerHeight = header.offsetHeight;

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

function whiteHandler(event) {
  //컬러값 저장
  colorData = event.target.value;
  $white.style.border = "3px solid";
  $black.style.border = "1px solid";
  $mustColor.innerText = `[필수] : ${color}`;
}
function blackHandler(event) {
  colorData = event.target.value;
  $black.style.border = "3px solid ";
  $white.style.border = "1px solid ";
}

$white.addEventListener("click", whiteHandler);
$black.addEventListener("click", blackHandler);

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

function size1Handler(e) {
  size = e.target.value;
  $size1.style.border = "3px solid";
  $size2.style.border = "1px solid";
  $size3.style.border = "1px solid";
  $mustSize.innerText = `[필수] : ${size}mm`;
}
function size2Handler(e) {
  size = e.target.value;
  $size1.style.border = "1px solid";
  $size2.style.border = "3px solid";
  $size3.style.border = "1px solid";
  $mustSize.innerText = `[필수] : ${size}mm`;
}
function size3Handler(e) {
  size = e.target.value;
  $size1.style.border = "1px solid";
  $size2.style.border = "1px solid";
  $size3.style.border = "3px solid";
  $mustSize.innerText = `[필수] : ${size}mm`;
}

$size1.addEventListener("click", size1Handler);
$size2.addEventListener("click", size2Handler);
$size3.addEventListener("click", size3Handler);

////

function getItemHandler() {
  //상품담기
  colorData == "⚫"
    ? (color = "black")
    : colorData == "⚪"
    ? (color = "white")
    : (color = null);
  if (color === null) {
    alert("색상을 선택해주세요");
  } else if (size === 0) {
    alert("size를 선택해주세요");
  } else if(color == null || size == null || $val.value == 0){
      alert("항목을 선택해주세요.")
    }else {
    // $title.insertAdjacentHTML('beforeend', `<a>${color}색상 ${size}mm ${$val.value}개가 추가되었습니다.</a>`);
    // $title.insertAdjacentHTML('beforeend', `<input type='button' id="cancelBtn" value='X'>`)
    const list = document.createElement("li");
    const itemInform = document.createElement("span");
    const button = document.createElement("button");
    const hr = document.createElement("hr");
    const itemValue = document.createElement("span");
    button.innerText = "X";
    list.appendChild(itemInform);
    list.appendChild(button);
    $line.appendChild(hr);
    $value2.appendChild(itemValue);
    hr.classList = "dotted";
    button.addEventListener("click", deleteList);
    itemInform.innerText = `-${color} 색상 ${size}mm`;
    $productList.appendChild(list);
    itemValue.innerText = `총(수량) : ${$val.value}개`;

    $black.style.border = "1px solid ";
    $white.style.border = "1px solid ";

    
    $size1.style.border = "1px solid";
    $size2.style.border = "1px solid";
    $size3.style.border = "1px solid";

    const newData = 
      {
        id: Math.random(),
        product : imgName,
        basketSize: size,
        basketColor: color,
      }
    ;

  color = null;
  size = null
  $val.value = 0;
    newbasketData.push(newData)
    // newbasketData = [...basketData, newData];
   console.log(newbasketData) 
  }
}

/////

function whiteHandler(event) {
  //컬러값 저장
  colorData = event.target.value;
  $white.style.border = "3px solid";
  $black.style.border = "1px solid";
  $mustColor.innerText = `[필수] : white`;
}
function blackHandler(event) {
  colorData = event.target.value;
  $black.style.border = "3px solid ";
  $white.style.border = "1px solid ";
  $mustColor.innerText = `[필수] : black`;
}

$white.addEventListener("click", whiteHandler);
$black.addEventListener("click", blackHandler);

function goBasketHandler() {
    const $wholeContainer = document.querySelector("#wholeContainer")
    $wholeContainer.style.display = "none"
    const $body = document.querySelector("body")
    $body.style.height = "100%"
  }

$goBasket.addEventListener("click", goBasketHandler);

/////x버튼 클릭시 요소 삭제

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();

  const deleteValue = document.querySelector("#value2 span");
  //  console.log(totalValue)
  const deleteDotted = document.querySelector("#line .dotted");
  deleteValue.remove();
  deleteDotted.remove();

  // li.removeChild(li)
}

$getItem.addEventListener("click", getItemHandler);

function modalOff() {
  //취소버튼클릭시 모달창 닫기
  modal.style.display = "none";
  console.log(newbasketData[2].id)
}
closeBasket.addEventListener("click", modalOff);

















// 상단섹션 js

// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 //
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
  } else {
    currSlide--;
  }
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
  } else {
    currSlide++;
  }
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});
