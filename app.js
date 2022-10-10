const cell = document.querySelectorAll('.cell');
const playerOne = document.querySelectorAll('.player1Score');
const playerTwo = document.querySelectorAll('.player2Score');
const restart = document.querySelectorAll('.restart');

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

let flag = true;

for(let i = 0; i < cell.length; i++){
    cell[i].addEventListener('click', () =>{
        if (flag === true){
            cell[i].innerHTML = "X";
            player1.push(i);
            flag = false;
        }
        else{
            cell[i].innerHTML = "O";
            player2.push(i);
            flag = true;
        }
    })
}


function isWinner(){
    winCon.find
}

const isOccupied = (tile) => {

}