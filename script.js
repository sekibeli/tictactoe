let fields = [];

let currentShape = 'cross'
let gameOver = false;
function fillShape(id){

    if(!fields[id] && !gameOver){
    if(currentShape == 'cross'){
        currentShape = 'circle';
        document.getElementById('player1').classList.add('playerInactive');
        document.getElementById('player2').classList.remove('playerInactive');
      
    } else {
        currentShape = 'cross';
        document.getElementById('player1').classList.remove('playerInactive');
        document.getElementById('player2').classList.add('playerInactive');
    }
    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
}
}


function draw(){
    for (let i=0; i<fields.length; i++){
if(fields[i] == 'circle'){
    document.getElementById(`circle-${i}`).classList.remove('d-none');
}
if(fields[i] == 'cross'){
    document.getElementById(`cross-${i}`).classList.remove('d-none');
}
    }
}

function checkForWin(){
    let winner;
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0]
        document.getElementById('win1').style.transform = 'scale(1)';
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3]
        document.getElementById('win2').style.transform = 'scale(1)';
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6]
        document.getElementById('win3').style.transform = 'scale(1)';
    }
    if(fields[0] == fields[3] && fields[3] == fields[6]&& fields[0]){
        winner = fields[0]
        document.getElementById('win4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[1] == fields[4] && fields[4] == fields[7]&& fields[1]){
        winner = fields[1]
        document.getElementById('win5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[2] == fields[5] && fields[5] == fields[8]&& fields[2]){
        winner = fields[2]
        document.getElementById('win6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[0] == fields[4] && fields[4] == fields[8]&& fields[0]){
        winner = fields[0]
        document.getElementById('win7').style.transform = 'rotate(45deg) scaleX(1.2)';
    }
    if(fields[2] == fields[4] && fields[4] == fields[6]&& fields[2]){
        winner = fields[2]
        document.getElementById('win8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }
console.log(winner);
    if (winner){
        console.log('gewonnen:', winner);
        gameOver = true;
        setTimeout(function(){
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('button').classList.remove('d-none'); 
            
        }, 1000);
                }
    }
   
function restart(){
    gameOver = false;
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('button').classList.add('d-none'); 
    fields = [];

   for (let i=0; i<9; i++){
                   document.getElementById(`circle-${i}`).classList.add('d-none');
                   document.getElementById(`cross-${i}`).classList.add('d-none');
                  
                  }

                  for (let i=1; i<9; i++){
                    document.getElementById(`win${i}`).style.transform = 'scale(0)';
                  }



}

function changePlayer(activePlayer, inactivePlayer){
    document.getElementById(inactivePlayer).classList.add('playerInactive');
    document.getElementById(activePlayer).classList.remove('playerInactive');
}

// function randomIntFromInterval() { // min and max included 
//     return Math.floor(Math.random() * (8 - 0 + 1) + 0)
//   }
  
//   const rndInt = randomIntFromInterval()
//   console.log(rndInt)