

let firstCard=8
let secondCard=10
let sum=firstCard+secondCard
let message=" "
let hasBlackjack=false
let isAlive=true

let messageEl= document.getElementById("message_el")


function startgame(){
    if(sum<=20){
        message="Do you want to draw a new card? 🙂"
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackjack=true
    }
    else{
        message="You're out of the game! 😭"
        isAlive=false
    }
    messageEl.textContent= message
} 