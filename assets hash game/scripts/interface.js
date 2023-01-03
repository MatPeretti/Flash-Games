document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll(".block")
    squares.forEach((square) =>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;
    let final = document.getElementById('resultado');

    if(handleMove(position)){
      
        setTimeout(() => {
            final.innerHTML = 'The game ended, the winner was player number: ' +playerTime;
        },10) 
    }
    updateSquare(position);
}

function updateSquare (position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateSquares() {

    let squares = document.querySelectorAll(".block");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

function clearSquares () {
    
    let squares = document.querySelectorAll(".block");
    let final = document.getElementById('resultado');

    squares.forEach((square) =>{
        square.innerHTML = '';
    })

    final.innerHTML = '';
}

 