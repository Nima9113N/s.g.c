let userp = 0;
let comp = 0;
let canChoose = true;

const userScoreSpan = $('#userp');
const computerScoreSpan = $('#comp');
const resultDiv = $('#r');
const rockBtn = $('#rock');
const paperBtn = $('#paper');
const scissorsBtn = $('#scissors');
const userSelectionDiv = $('#user-selection');
const computerSelectionDiv = $('#computer-selection');
const goBtn = $('#go');
const resetButton = $('#reset'); // Corrected from the HTML's duplicate ID

function com_chois() {
    const choices = ['✊', '✋', '✌️'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerSelectionDiv.text(choices[randomIndex]);
}

function player_rock() {
    if (canChoose) {
        userSelectionDiv.text('✊');
    }
}

function player_paper() {
    if (canChoose) {
        userSelectionDiv.text('✋');
    }
}

function player_scissors() {
    if (canChoose) {
        userSelectionDiv.text('✌️');
    }
}

function start() {
    if (!userSelectionDiv.text()) {
        resultDiv.text('لطفاً انتخاب خود را انجام دهید.');
        return;
    }

    canChoose = false;
    goBtn.prop('disabled', true);
    rockBtn.prop('disabled', true);
    paperBtn.prop('disabled', true);
    scissorsBtn.prop('disabled', true);

    com_chois();

    const userChoice = userSelectionDiv.text();
    const computerChoice = computerSelectionDiv.text();

    setTimeout(() => {
        if (
            (userChoice == '✊' && computerChoice == '✌️') ||
            (userChoice == '✋' && computerChoice == '✊') ||
            (userChoice == '✌️' && computerChoice == '✋')
        ) {
            resultDiv.text('آفرین تو بردیی !');
            userp++;
            userScoreSpan.text(userp);
        } else if (userChoice == computerChoice) {
            resultDiv.text('مساوی!');
        } else {
            resultDiv.text('باختی... دفعه بعد!');
            comp++;
            computerScoreSpan.text(comp);
        }

        setTimeout(() => {
            computerSelectionDiv.text('');
            canChoose = true;
            goBtn.prop('disabled', false);
            rockBtn.prop('disabled', false);
            paperBtn.prop('disabled', false);
            scissorsBtn.prop('disabled', false);
            userSelectionDiv.text('');
            resultDiv.text('یک گزینه را انتخاب کنید');
        }, 3000);
    }, 50);
}

function resetGame() {
    userp = 0;
    comp = 0;
    userScoreSpan.text(userp);
    computerScoreSpan.text(comp);
    userSelectionDiv.text('');
    computerSelectionDiv.text('');
    resultDiv.text('یک گزینه را انتخاب کنید');
    canChoose = true;
    goBtn.prop('disabled', false);
    rockBtn.prop('disabled', false);
    paperBtn.prop('disabled', false);
    scissorsBtn.prop('disabled', false);
}

$(document).ready(function() {
    rockBtn.on('click', player_rock);
    paperBtn.on('click', player_paper);
    scissorsBtn.on('click', player_scissors);
    goBtn.on('click', start);
    $('#reset-game-btn').on('click', resetGame); // Using a new ID for the reset button
});