//Start up and initializing operations
function giveEventNums() {
    let items = document.querySelectorAll(`.char-show`);
    items.forEach(function(item) {
        item.onclick = calcNumButton;
    });
    document.querySelector(`.pos-neg-button`).onclick = posNeg;
    const ops = document.querySelectorAll(`.operator`);
    ops.forEach(function(item) {
        item.onclick = buildMathArr
    });
}
giveEventNums();


//Calculator button functionality
function calcNumButton(event) {
    pressNum = event.target;
    if (document.querySelector(`#calc-number-area`).innerText === `0`) {
        document.querySelector(`#calc-number-area`).innerText = ``;
    }
    document.querySelector(`#calc-number-area`).innerText += pressNum.innerText;
}

function posNeg() {
    let stat = document.querySelector(`#calc-status-area`).innerText;
    if (stat === `` && document.querySelector(`#calc-number-area`).innerText !== `0`) {
        document.querySelector(`#calc-status-area`).innerText = `NEG`;
    } else if (stat === `NEG`) {
        document.querySelector(`#calc-status-area`).innerText = ``;
    }
}

function clearRightDisplay() {
    document.querySelector(`#right-main-bottom`).innerText = ``;
}


//Math functionality
const numArr = [];
function buildMathArr(event) {
    let num = document.querySelector(`#calc-number-area`).innerText;
    numArr.push(Number(num));
    console.log(numArr);
    
    document.querySelector(`#calc-number-area`).innerText = `0`;
}

function doMath(numArr) {
    let result = 0;

}

function add() {
    
}

function subtract() {

}

function multiply() {

}

function divide() {

}