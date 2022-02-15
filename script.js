"use strict";

// const vendingMachine = [
//   {
//     name: "LIME COLA",
//     price: "$2.00",
//   },
//   {
//     name: "SALTED PEANITS",
//     price: "$3.00",
//   },
//   {
//     name: "CHOCOLATE BAR",
//     price: "$4.00",
//   },
//   {
//     name: "FRUIT GUMMIES",
//     price: "$6.00",
//   },
// ];

// const one = document.querySelector(".one");
// // const totalPrice = document.querySelector(".total");
// const itemPrice = document.querySelectorAll(".item");

// first solution
// let totalParagragh = document.querySelector(".total");
// const cola = document.querySelector(".cola");
// const peanuts = document.querySelector(".peanuts");
// const chocolate = document.querySelector(".chocolate");
// const gummies = document.querySelector(".gummies");
// let total = 0;

// console.dir(totalParagragh);

// cola.addEventListener("click", () => {
//   total += 2;
//   totalParagragh.textContent = `Total: ${total.toFixed(2)}`;
//   console.log(total);
// });
// peanuts.addEventListener("click", () => {
//   total += 3;
//   totalParagragh.textContent = `Total: ${total.toFixed(2)}`;
//   console.log(total);
// });

// chocolate.addEventListener("click", () => {
//   total += 4;
//   totalParagragh.textContent = `Total: ${total.toFixed(2)}`;
//   console.log(total);
// });
// gummies.addEventListener("click", () => {
//   total += 6;
//   totalParagragh.textContent = `Total: ${total.toFixed(2)}`;
//   console.log(total);
// });

//second solution
const totalParagragh = document.querySelector(".total");
const snackButtons = document.querySelectorAll(".snack-button");
const form = document.querySelector("form");
const coinContainer = document.querySelector(".coin-container");
let total = 0;

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = button.getAttribute("data-price");
    total += parseInt(price);
    console.log(total);
    totalParagragh.textContent = `Total: $${total.toFixed(2)}`;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const howMany = document.querySelector("#number").value;
  const whichCoin = document.querySelector("#coins").value;
  for (let i = 0; i < howMany; i++) {
    const coinParagragh = document.createElement("p");
    coinParagragh.classList.add("coin", whichCoin);
    coinParagragh.textContent = whichCoin;
    coinContainer.append(coinParagragh);
  }
});

// let clickedCoin = document.querySelector(".coin");
// clickedCoin.addEventListener("click", () => {
//   clickedCoin.remove();
// });

const on = document.querySelector(".on");
const off = document.querySelector(".off");
const toggle = document.querySelector(".toggle");
const end = document.querySelector(".end");
const lightBulb = document.querySelector(".light-bulb");

on.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "white";
});

off.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "darkblue";
});

toggle.addEventListener("click", () => {
  (lightBulb.style.backgroundColor = "white") === true
    ? (lightBulb.style.backgroundColor = "darkblue")
    : (lightBulb.style.backgroundColor = "white");
});

end.addEventListener("click", () => {
  lightBulb.remove();
});
