const cell = document.querySelectorAll('.cell');
const playerOneScore = document.querySelector('.player1Score');
const playerTwoScore = document.querySelector('.player2Score');
const restart = document.querySelector('.restart');

//Asks for name when starting website
const playerOneName = prompt("What is Player One's name?");
const playerTwoName = prompt("What is Player Two's name?");


//Listed all the win conditions available
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

//Set player1 and player2 empty and made their score 0
let player1 = [];
let player2 = [];

//score.player1 or score.player2 will get their score
let score = {
    player1 : 0,
    player2 : 0
}

//Displaying score
function getScore() {
    playerOneScore.innerHTML = `${playerOneName}: ${score.player1}`;
    playerTwoScore.innerHTML = `${playerTwoName}: ${score.player2}`;
}
getScore();


let turn = true;

for(let i = 0; i < cell.length; i++){
    cell[i].addEventListener('click', () =>{
        //if it's first person turn
        if (turn === true){
            if (cell[i].innerHTML == ""){
                cell[i].innerHTML = "X";
                //adds what index you clicked on into the empty array of player1
                player1.push(i);
                turn = false;
            }
            else {
                alert("Cannot take move!");
            }
        }
        else {
            if (cell[i].innerHTML == ""){
                cell[i].innerHTML = "O";
                //adds what index you clicked on into the empty array of player2
                player2.push(i);
                turn = true;
            }
            else{
                alert("Cannot take move!")
            }
        }
    })
}

//function to reset the board
function resetBoard(){
    for(let i = 0; i< cell.length; i++){
        cell[i].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    turn = true;
}

//reset the board when click the restart button
restart.addEventListener('click', () => {
    resetBoard();
})


