const playerX = "X"
const playerY = "O"
let modeCpu = false;
let round = 1
let gameOver = false
let currentPlayer = playerX
let tabVictoryCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function PlayCpu() {
     currentPlayer = playerY
   let count = 0
    while (true) {
        if (count == document.querySelectorAll(".cell").length) {
            break
        }
        let random = generateRandom(0, document.querySelectorAll(".cell").length - 1)
        if (document.querySelectorAll(".cell")[random].innerText == "") {
            document.querySelectorAll(".cell")[random].click()
            break
        }
        count++
    }
}


function definedCurrentPlayer() {
    if (round % 2 == 0) {
        currentPlayer = playerY 
        if (modeCpu) {
            PlayCpu() 
        }
    } else{
        currentPlayer= playerX
    }
}

function displaySymbol(element) {
    element.innerHTML = currentPlayer
    if (element.innerText == "X") {
        element.style.color = "red"
    }
    if (element.innerText == "O") {
        element.style.color = "green"

    }
}

function victoryCondition() {

    for (let i = 0; i < tabVictoryCondition.length; i++) {
        let inCell1 = document.querySelectorAll('.cell')[tabVictoryCondition[i][0]].innerHTML
        let inCell2 = document.querySelectorAll('.cell')[tabVictoryCondition[i][1]].innerHTML
        let inCell3 = document.querySelectorAll('.cell')[tabVictoryCondition[i][2]].innerHTML
        if (inCell1 == "" || inCell2 == "" || inCell3 == "") {
            continue
        } if (inCell1 == inCell2 && inCell2 == inCell3) {
            document.querySelector("#victory").innerText = ('Victoire du Joueur ' + currentPlayer);
            gameOver = true
            console.log(gameOver);
        }

    }
}

function game(element) {
    if (element.innerText == "" && !gameOver) {
        displaySymbol(element)
        round++
        victoryCondition()
        if (!gameOver) {
            definedCurrentPlayer()
            
        }
        

    }
    if (round == 10 && gameOver == false) {
        document.querySelector("#victory").innerText = ('Match Nul !!!');
    }
}

function activeCpuMode(){
    modeCpu = !modeCpu
    reset()
}

function reset() {
    for (let i = 0; i < document.querySelectorAll('.cell').length; i++) {
        document.querySelectorAll('.cell')[i].innerText = ""
        document.querySelector('#victory').innerText = ""
    }
    round = 1
    gameOver = false
    currentPlayer = playerX
}

console.log(round);