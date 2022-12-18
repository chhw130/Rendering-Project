const $white = document.querySelector(".white");
const $black = document.querySelector(".black");
const $mustColor = document.querySelector("#mustColor");



let colorData = 0;
let color = "";

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