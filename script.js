let fields = [];
let counter = 0;
let amountCircles = 0;
let currentShape = 'cross';
let gameOver = false;
let winner = '';


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        currentShape = 'circle';
        fields[id] = currentShape;
        draw();
        checkForWin();
        document.getElementById('player1').classList.add('playerInactive');
        document.getElementById('player2').classList.remove('playerInactive');

        if (!gameOver) {
            switchIt('none');
            setTimeout(function () {
                pcTurn();
            }, 500);
         
        }
        console.log(fields);
    }
  delay();
}

function delay(){
    setTimeout(function () {
        switchIt('auto');
    }, 500);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pcTurn() {
    let random = 0;
    currentShape = 'cross';
    random = getRandomInt(0, 8);
    if (!fields[random] && counter < 9)
        fields[random] = currentShape;
    else pcTurn();
    draw();
    checkForWin();
    document.getElementById('player1').classList.remove('playerInactive');
    document.getElementById('player2').classList.add('playerInactive');
}


function switchIt(param) {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`field${i}`).style.pointerEvents = param;
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        }
    }
}




function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]
        document.getElementById('win1').style.transform = 'scale(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3]
        document.getElementById('win2').style.transform = 'scale(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6]
        document.getElementById('win3').style.transform = 'scale(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]
        document.getElementById('win4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
        document.getElementById('win5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
        document.getElementById('win6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
        document.getElementById('win7').style.transform = 'rotate(45deg) scaleX(1.2)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
        document.getElementById('win8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }
    console.log(winner);
    checkForCircle();
    if (winner) {
        switchIt('none');
        console.log('gewonnen:', winner);
        gameOver = true;
        nameOfWinner(winner);
        setTimeout(function () {
             document.getElementById('winner').classList.remove('d-none');
            document.getElementById('button').classList.remove('d-none');
            document.getElementById('whoWon').innerHTML = `${nameOfWinner(winner)} won!`;
            document.getElementById('whoWon').classList.remove('d-none');
        }, 1000);
        return false;
    }

    if (amountCircles == 5) {
        switchIt('none');
        showUndecided();
    }
}



function restart() {
    gameOver = false;
    document.getElementById('winner').classList.add('d-none');
    document.getElementById('button').classList.add('d-none');
    document.getElementById('whoWon').classList.add('d-none');
    fields = [];
    currentShape = 'cross';

    document.getElementById('player1').classList.remove('playerInactive');
    document.getElementById('player2').classList.add('playerInactive');

    for (let i = 0; i < 9; i++) {
        document.getElementById(`circle-${i}`).classList.add('d-none');
        document.getElementById(`cross-${i}`).classList.add('d-none');
    }

    for (let i = 1; i < 9; i++) {
        document.getElementById(`win${i}`).style.transform = 'scale(0)';
    }
    switchIt('auto');
}


function nameOfWinner(winner) {
    if (winner == 'circle') {
        winner = 'You';
    } else {
        winner = 'DumbPC';
    }
    return winner;
}


function checkForCircle() {
    amountCircles = 0;
    for (let i = 0; i < fields.length; i++) {
        let element = fields[i];
        if (element == 'circle') {
            amountCircles++
        }
    }
}


function showUndecided() {
    gameOver = true;
    setTimeout(function () {
        document.getElementById('winner').classList.remove('d-none');
        document.getElementById('button').classList.remove('d-none');
        document.getElementById('whoWon').innerHTML = `nobody won!`;
        document.getElementById('whoWon').classList.remove('d-none');

    }, 1000);
}