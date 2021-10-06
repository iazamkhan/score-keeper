const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')

}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        if (player.score !== winningScore) {
            player.score += 1;
            if (player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add('winner');
                opponent.display.classList.add('loser');
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
            player.display.textContent = player.score;
        }
    }

}

player1.button.addEventListener('click', function () {
    updateScore(player1, player2)
});

player2.button.addEventListener('click', function () {
    updateScore(player2, player1)
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetFunction();
});

reset.addEventListener('click', resetFunction);

function resetFunction() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}


