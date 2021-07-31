function numberOfCards(){
    let cardsNumber = Number(prompt("Insira o número de cartas para o game"));
    let itsPair = cardsNumber%2;
    while (cardsNumber < 4 || cardsNumber > 14 || itsPair !=0 ){
        cardsNumber = Number(prompt("Apenas números pares entre 4 e 14 são aceitos"));
        itsPair = cardsNumber%2;
    }
}
numberOfCards();