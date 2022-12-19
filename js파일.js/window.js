let header = document.querySelector("header");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {   // 스크롤 세로값이 헤더높이보다 크거나 같으면, 헤더에 클래스 'drop'을 추가한다
  
    header.classList.add("drop");
  }
  else {
    header.classList.remove("drop");
  }
};
