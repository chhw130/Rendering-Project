const $img = document.querySelector(".screen img");
const $getItem = document.querySelector("#getItem");
const $val = document.querySelector("#val");
const $value2 = document.querySelector("#value2");
const $productList = document.querySelector("#productList");
const $mustSize = document.querySelector("#mustSize");
const $line = document.querySelector("#line");
const $goBasket = document.querySelector("#goBasket");
const $price = document.querySelector(".informationPrice")
const $basketImg = document.querySelector("#basketImg")
const $continue = document.querySelector("#continue")
const $wholeContainer = document.querySelector("#wholeContainer")
const $basketContainer = document.querySelector("#basketContainer")
const $totalPrice = document.querySelector("#totalPrice")
const $discount = document.querySelector("#discount")
const $endPrice = document.querySelector("#endPrice")


const basketData = [
  {},
];
const newbasketData = [{}];
let imgName = $img.alt;
let price = parseInt($price.innerText) *1000;
let totalPrice = 0

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();

  const deleteValue = document.querySelector("#value2 span");
  //  console.log(totalValue)
  const deleteDotted = document.querySelector("#line .dotted");
  deleteValue.remove();
  deleteDotted.remove();
  newbasketData.length = 1

  // li.removeChild(li)
}



//상품담기
function getItemHandler() {
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
        productSize: size,
        basketColor: color,
        total : $val.value,
        productPrice : price
      }
    ;

  color = null;
  size = null
  $val.value = 0;
    newbasketData.push(newData)
  }
}
$getItem.addEventListener("click", getItemHandler);





//구매하기 버튼시 이벤트 장바구니로 이동
function goBasketHandler() {
    $wholeContainer.style.display = "none"
    $basketContainer.style.display = "block"
    const $body = document.querySelector("body")
    $body.style.height = "100%"
    window.scrollTo({top:0, behavior: "smooth"})

    $productList.firstChild.remove()
    const deleteValue = document.querySelector("#value2 span");
    const deleteDotted = document.querySelector("#line .dotted");
    deleteValue.remove();
    deleteDotted.remove();
    
    totalPrice = 0

  if(newbasketData.length > 1){
    const $tg = document.querySelector(".tg")
  for(let i = 0 ; i < 1 ; i++){
    const newRow = $tg.insertRow(1)
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)
    let cell5 = newRow.insertCell(4)
    
  for(let j = 1 ; j < newbasketData.length+1; j++){
    cell1.innerText = `${newbasketData[j].product}   ${newbasketData[j].productSize}mm ${newbasketData[j].basketColor}`
    cell2.innerText = newbasketData[j].total
    cell3.innerText = "무료"
    let itemPrice = newbasketData[j].productPrice*newbasketData[j].total
    cell4.innerText = newbasketData[j].productPrice
    cell5.innerText = ""
    totalPrice += itemPrice
    $totalPrice.innerText = `${totalPrice}원`
    let point = totalPrice*0.003
    $discount.innerText = `${point}포인트`
    $endPrice.innerText = `${totalPrice}원`
  }
  
}
  }else{
    alert("장바구니에 담긴 상품이 없습니다.")
  }

  
  
}


$goBasket.addEventListener("click", goBasketHandler);


function goBasketHandler2(){
  $basketContainer.style.display = "block"
  $wholeContainer.style.display = "none"
}

$basketImg.addEventListener("click",goBasketHandler2)


function continueHandler(){
  $wholeContainer.style.display = "block"
    $basketContainer.style.display = "none"
    modal.style.display = "none"
    window.scrollTo({top: 0, behavior: "smooth"})
    
}

$continue.addEventListener("click", continueHandler)
