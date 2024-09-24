/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let bakcgroundCard = document.querySelector("#background-card");
  bakcgroundCard.style.backgroundColor = "green";

  const generateRandom = () => {
    const number = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ];

    const suit = ["♦", "♥", "♠", "♣"];

    const suitColors = {
      "♦": "red",
      "♥": "red",
      "♠": "black",
      "♣": "black"
    };

    function cardRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const randomNumber = cardRandom(number);
    const randomSuit = cardRandom(suit);

    document.getElementById("cardNumber").innerHTML = randomNumber;

    const suitElements = document.querySelectorAll(".cardSuite");
    suitElements.forEach(elem => {
      elem.innerHTML = randomSuit;
      elem.style.color = suitColors[randomSuit];
    });
  };

  let reload = document.getElementById("refresh");

  reload.addEventListener("click", () => {
    location.reload();
  });

  generateRandom();
};
