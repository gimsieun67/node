const spendingBtn = document.querySelector(".spendingBtn");
const walletBtn = document.querySelector(".walletBtn");
const spendingAll = document.querySelector(".spending");
const walletAll = document.querySelector(".wallet");
const tosend = document.querySelector(".toSend");
const container = document.querySelector(".container");
const sendbox = document.querySelector(".sendBox");
const backBtn = document.querySelector(".back");
walletBtn.addEventListener("click", ()=> {
    spendingAll.style.display = "none";
    walletAll.style.display = "block";
})
spendingBtn.addEventListener("click", ()=> {
    spendingAll.style.display = "block";
    spendingAll.style.display = "flex"
    walletAll.style.display = "none";
})
tosend.addEventListener("click", () => {
    container.style.display = "none";
    sendbox.style.display = "block";
})
backBtn.addEventListener("click", () => {
    sendbox.style.display = "none";
    container.style.display = "block";
})