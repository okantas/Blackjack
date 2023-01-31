


let cards=[]
let sum=0
let message=" "
let hasBlackjack=false
let isAlive=false

let messageEl= document.getElementById("message_el")
let sumEl=document.getElementById("sum_el")
let cardsEl=document.getElementById("cards_el")


function startGame(){
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    isAlive=true

    renderGame()
}
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
       return randomNumber
    }
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

    let card=getRandomCard()
    sum+=card

    cards.push(card)

    renderGame();

}