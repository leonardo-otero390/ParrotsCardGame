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
        element.innerHTML += `<div class="card">
        <div class="front"><img src="/images/front.png" alt="parrot"></div>
        <div class="back"><img src="/gifs/${deckGame[i]}.gif" alt="${deckGame[i]}"></div>
    </div>`;
    }
}
numberOfCards();
cardDealer();