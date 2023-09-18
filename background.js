const container = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popUpContainer = document.querySelector(".popup-container");
const closeBtnEl = document.querySelector(".close-btn");

btnEl.addEventListener("click", ()=>{
    container.classList.add("active");
    popUpContainer.classList.remove("active");
})

closeBtnEl.addEventListener("click", ()=>{
    popUpContainer.classList.add("active");
    container.classList.remove("active");
})