const modal = document.getElementById("modal")
const closeBtn = document.querySelector(".close-area")
function modalOn() {
    modal.style.display = "flex"
}
function isModalOn() {
    return modal.style.display === "flex"
}
function modalOff() {
    modal.style.display = "none"
}

closeBtn.addEventListener("click",modalOff)