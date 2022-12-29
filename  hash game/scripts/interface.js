document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll(".block")
    squares.forEach((square) =>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let postion = square.id;
    let final = document.getElementById('resultado');

    if(handleMove(postion)){
      
        setTimeout(() => {
            final.innerHTML = 'The game ended, the winner was player number: ' +playerTime;
        },10) 
    }
    updateSquare(postion);
}

function updateSquare (postion) {

    let square = document.getElementById(postion.toString());
    let symbol = board[postion]
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateSquares() {

    let squares = document.querySelectorAll(".block");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
        
    })

}