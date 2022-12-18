
const $size1 = document.querySelector("#size1");
const $size2 = document.querySelector("#size2");
const $size3 = document.querySelector("#size3");
let size = 0;

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
  