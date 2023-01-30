

let firstCard=5
let secondCard=7
let cards=[firstCard, secondCard]
let sum=firstCard+secondCard
let message=" "
let hasBlackjack=false
let isAlive=true

let messageEl= document.getElementById("message_el")
let sumEl=document.getElementById("sum_el")
let cardsEl=document.getElementById("cards_el")

function startGame(){
    renderGame()
}

function renderGame(){
    
    for (let i=0;i<cards.length;i++){
        all_cards="Cards: "+ cards + " "
        cardsEl.textContent=all_cards
    }

    sumEl.textContent= "SUM: "+sum
    if(sum<=20){
        message="Do you want to draw a new card?" 
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack!"
        hasBlackjack=true
    }
    else{
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.textContent= message
} 


function newCard(){
    console.log("Drawing a new card from the deck!")

    let card=8
    sum+=card

    cards.push(card)

    renderGame();

}