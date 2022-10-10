const cell = document.querySelectorAll('.cell');
const playerOneScore = document.querySelector('.player1Score');
const playerTwoScore = document.querySelector('.player2Score');
const restart = document.querySelector('.restart');
const playerOneName = prompt("What is Player One's name?");
const playerTwoName = prompt("What is Player Two's name?");

const winCon = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 9],
    [1, 4, 7],
    [2, 5 ,8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
]

let player1 = [];
let player2 = [];

let score = {
    player1 : 0,
    player2 : 0
}

function getScore() {
    playerOneScore.innerHTML = `${playerOneName}: ${score.player1}`;
    playerTwoScore.innerHTML = `${playerTwoName}: ${score.player2}`;
}
getScore();


let flag = true;

for(let i = 0; i < cell.length; i++){
    cell[i].addEventListener('click', () =>{
        if (flag === true){
            if (cell[i].innerHTML == ""){
                cell[i].innerHTML = "X";
                player1.push(i);
                flag = false;
            }
            else {
                alert("Cannot take move!");
            }
        }
        else {
            if (cell[i].innerHTML == ""){
                cell[i].innerHTML = "O";
                player2.push(i);
                flag = true;
            }
            else{
                alert("Cannot take move!")
            }
        }
        isWinner();
    })
}


function resetBoard(){
    for(let i = 0; i< cell.length; i++){
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;
}

restart.addEventListener('click', () => {
    resetBoard();
})

function isWinner(){
    winCon.find((item) => {
        if (item.filter((i) => player1.includes(i).length === 3)){
            alert("Player 1 Wins!");
            score.player1++;
            getScore();
            return item;
        }
        else if (item.filter((i) => player2.includes(i).length === 3)){
            alert("Player 2 Wins!");
            score.player2++;
            getScore();
        }
        return;
    })
}


function isOccupied(i){
    if(cell[i].innerHTML != ""){
        alert("Space is occupied")
    }
}