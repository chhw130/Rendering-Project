const modal = document.querySelector("#modal");
const modalWindow = document.querySelector(".modal-window");
const $pro1 = document.querySelector("#pro1");
const $pro2 = document.querySelector("#pro2");
const $pro3 = document.querySelector("#pro3");
const closeBasket = document.querySelector("#closeBasket");



//모달창 배치
function modalOn() {
    modal.style.display = "flex";
    modalWindow.style.display = "flex";
  }
  
  $pro1.addEventListener("click", modalOn);
  $pro2.addEventListener("click", modalOn);
  $pro3.addEventListener("click", modalOn);
  
  function modalOff() {
    //취소버튼클릭시 모달창 닫기
    modal.style.display = "none";
    $productList.firstChild.remove()
    const deleteValue = document.querySelector("#value2 span");
    const deleteDotted = document.querySelector("#line .dotted");
    deleteValue.remove();
    deleteDotted.remove();
    
  }
  closeBasket.addEventListener("click", modalOff);
  