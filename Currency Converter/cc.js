const URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gYtXtOaRGQrIBBzFGamrCQQjcIHISUiJYohAt5ah";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const swap = document.querySelector("i");

let allData = {};

window.addEventListener("load", () => {
    updateExchangeRates();
})

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD"){
            newOption.selected = true;
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = true;
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRates();
})

const updateExchangeRates = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    let result = await fetch(URL);
    let data1 = await result.json();
    let allData = data1.data;

    let fromRate = allData[fromCurr.value];
    let toRate = allData[toCurr.value];

    let finalAmount = (amtVal * toRate)/fromRate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

swap.addEventListener("click", () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    let temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;

    let temp1 = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp1;

    btn.click();
})