const body = document.querySelector("body")
const instruction = document.querySelector("#instruction")
const rollDice = document.querySelector(".roll_btn")
const player1Dice = document.querySelector("#player1")
const player1Score = document.querySelector("#player1score")
const player2Dice = document.querySelector("#player2")
const player2Score = document.querySelector("#player2score")
const roller = document.querySelector("#roller")

instruction.addEventListener("click",
function(){
    window.alert("This is a dice game. When a player clicks on the button, a random number get's displayed on his square. Player1 starts the game. The player who's score gets more than 25 wins the game!!! Try it out!!! It is all about luck. Do not get sad when you lose the game. Keep trying again until you succeed. Best of luck!!!")
})

let player = true
let player1Count=0
let player2Count=0

function reset(){
    player1Count=0
    player2Count=0
    player1Dice.innerHTML=""
    player2Dice.innerHTML=""
    player1Score.innerHTML=""
    player2Score.innerHTML="" 
    player1Dice.style.boxShadow="none"
    player2Dice.style.boxShadow="none"
    player1Score.style.boxShadow="none"
    player2Score.style.boxShadow="none"
}

rollDice.addEventListener("click",
function(){
    var dice = Math.floor(Math.random()*6)+1
    if(player){
        player1Dice.innerHTML = "Lucky number🎲: " + dice
        player1Count= player1Count + dice
        player1Score.innerHTML = "💰 Player1 score: " + player1Count
        player1Score.style.boxShadow="5px 5px 5px red"
        player1Dice.style.boxShadow="5px 5px 5px red"
        player2Score.style.boxShadow="none"
        player2Dice.style.boxShadow="none"
        roller.innerHTML = "Player 2 has to roll🎲"
        rollDice.value="Roll the Dice"

        player=false
    }
    else{
        player2Dice.innerHTML = "Lucky number🎲: " + dice
        player2Count= player2Count + dice
        player2Score.innerHTML = "💰 Player2 score: " + player2Count
        player2Score.style.boxShadow="5px 5px 5px red"
        player2Dice.style.boxShadow="5px 5px 5px red"
        player1Score.style.boxShadow="none"
        player1Dice.style.boxShadow="none"
        roller.innerHTML = "Player 1 has to roll🎲"
        rollDice.value="Roll the Dice"
        player=true
    }

    if(player1Count > 25 && player2Count){
        body.style.backgroundColor="green"
        roller.innerHTML="GAME OVER!!! Player1 Won the Game with score more than 25!!!🎲 Please do try this game again..."
        player1Score.innerHTML="Player1 Score 💰"
        player2Score.innerHTML="Player2 Score 💰"
        player1Dice.innerHTML="😄"
        player2Dice.innerHTML="😮"
        rollDice.value="Reset Game"
        reset()
        body.style.backgroundColor="aqua"
    }
    else if(player2Count > 25 && player1Count){
        body.style.backgroundColor="blue"
        roller.innerHTML="GAME OVER!!! Player2 Won the Game with score more than 25!!!🎲 Please do try this game again..."
        player1Score.innerHTML="Player1 Score 💰"
        player2Score.innerHTML="Player2 Score 💰"
        player2Dice.innerHTML="😄"
        player1Dice.innerHTML="😮"
        rollDice.value="Reset Game"
        reset()
        body.style.backgroundColor="aqua"
    }
})