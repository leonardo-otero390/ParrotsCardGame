const deckTotal = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
]
let cardsNumber;
let cardsRotateds = 0;
let cardsRAM = [];
let playsCounter = 0;
let finalCondition = 0;
let time = 0;
function numberOfCards() {
    cardsNumber = Number(prompt("Insira o número de cartas para o game"));
    let itsPair = cardsNumber % 2;
    while (cardsNumber < 4 || cardsNumber > 14 || itsPair != 0) {
        cardsNumber = Number(prompt("Apenas números pares entre 4 e 14 são aceitos"));
        itsPair = cardsNumber % 2;
    }
}
function comparador() {
    return Math.random() - 0.5;
}
function shufleCards() {
    deckTotal.sort(comparador);
    let deckGame = [];
    for (let i = 0; i < (cardsNumber / 2); i++) {
        deckGame.push(deckTotal[i]);
        deckGame.push(deckTotal[i]);

    }

    return deckGame.sort(comparador);
}
function cardDealer() {
    const deckGame = shufleCards();
    let element = document.querySelector(".game-table");
    for (let i = 0; i < cardsNumber; i++) {
        element.innerHTML += `<div class="card" onclick="rotateCard(this);">
        <div class="front-face face" ><img src="/images/front.png" alt="parrot"></div>
        <div class="back-face face"><img src="/gifs/${deckGame[i]}.gif" alt="${deckGame[i]}"></div>
    </div>`;
    }
}
function resetCards() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            cardsRAM[i].card.querySelectorAll(".rotate")[0].classList.remove("rotate");
        }
    }
}
function finalGame() {
    if (finalCondition === cardsNumber) {
        alert(`Você ganhou em ${playsCounter} jogadas! em ${time} segundos`)
        let resetGame = prompt("Bora jogar de novo?");
        if (resetGame === 'sim') {
            document.querySelector(".game-table").innerHTML = "";
            playsCounter = 0;
            finalCondition = 0;
            time = 0;
            numberOfCards();
            cardDealer();
        }
    }
}
function rotateCard(element) {
    playsCounter++;
    cardsRAM[cardsRotateds] = {
        card: element,
        name: element.querySelector(".back-face img").getAttribute("alt")
    }
    element.querySelectorAll(".face")[0].classList.add("rotate");
    element.querySelectorAll(".face")[1].classList.add("rotate");
    cardsRotateds++;
    if (cardsRotateds === 2) {
        if (cardsRAM[0].name !== cardsRAM[1].name) {
            setTimeout(resetCards, 1000);
        } else {
            finalCondition += 2;
            setTimeout(finalGame, 300);

        }
        setTimeout(function () {
            cardsRAM = [];
            cardsRotateds = 0;
        }, 1100)

    }
}
function timer() {
    time++;
    document.querySelector(".stop-clock").innerHTML = time;
}
numberOfCards();
cardDealer();
setInterval(timer, 1000);