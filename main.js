//Start up and initializing operations
function giveEventNums() {
    //
    //Allows number buttons to display
    
    let items = document.querySelectorAll(`.char-show`);
    items.forEach(function(item) {
        item.onclick = calcNumButton;
    });

    //
    //Displays "NEG" in the status are to indicate a negative number
    document.querySelector(`.pos-neg-button`).onclick = posNeg;

    //
    //Constructs an array of number and operators to evaluate
    const ops = document.querySelectorAll(`.operator`);
    ops.forEach(function(item) {
        item.onclick = buildMathArr;
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
    if (Number(document.querySelector(`#calc-number-area`).innerText) > 0) {
        document.querySelector(`.acButton`).innerText = `C`;
    } else {
        document.querySelector(`.acButton`).innerText = `AC`;
    }
}

function posNeg() {
    let stat = document.querySelector(`#calc-status-area`).innerText;
    if (stat === `` && document.querySelector(`#calc-number-area`).innerText !== `0`) {
        document.querySelector(`#calc-status-area`).innerText = `NEG`;
    } else if (stat === `NEG`) {
        document.querySelector(`#calc-status-area`).innerText = ``;
    }
}

function allClear() {
    let check = document.querySelector(`.acButton`).innerText;
    if (check === `AC`) {
        numArr = [];
        document.querySelector(`#calc-number-area`).innerText = `0`;
    } else if (check === `C`) {
        document.querySelector(`#calc-number-area`).innerText = `0`;
        document.querySelector(`.acButton`).innerText = `AC`;
    }
}

function percentage() {
    let check = Number(document.querySelector(`#calc-number-area`).innerText);
    check = check / 100;
    document.querySelector(`#calc-number-area`).innerText = check;
}

function clearRightDisplay() {
    debugger;
    const list = document.querySelector(`#equation-display`);
    for (let i = document.querySelector(`#equation-display`).childNodes.length; i > 3; i--) {
        list.removeChild(list.childNodes[i]);
    }
}


//Math functionality
let numArr = [];
function buildMathArr(event) {
    let num = document.querySelector(`#calc-number-area`).innerText;
    if (document.querySelector(`#calc-status-area`).innerText === `NEG`) {
        numArr.push(Number(num - (num * 2)));
        document.querySelector(`#calc-status-area`).innerText = ``;
    } else {
        numArr.push(Number(num));
    }
    console.log(event.target);
    if (event.target.innerText === `+`) {
        numArr.push(`+`);
    } else if (event.target.innerText === `-`) {
        numArr.push(`-`);
    } else if (event.target.childNodes[1].classList.contains(`multiply`)) {
        numArr.push(`*`);
    } else if (event.target.childNodes[1].classList.contains(`divide`)) {
        numArr.push(`/`);
    }
    console.log(numArr);
    document.querySelector(`#calc-number-area`).innerText = `0`
}

function equals() {
    numArr.push(document.querySelector(`#calc-number-area`).innerText);
    let answer = 0;
    const evalArr = numArr.join('');
    answer = eval(evalArr);
    
    //
    //Display equation in right-main-bottom div
    const listArea = document.querySelector(`#right-main-bottom ul`);
    const newLi = document.createElement(`li`);
    let displayArr = ``;
    for (let i of numArr) {
        displayArr += i + ` `;
    }
    displayArr += ` = ` + answer;
    newLi.innerText = displayArr;
    listArea.appendChild(newLi);
    numArr = [];
    document.querySelector(`#calc-number-area`).innerText = `0`;
    document.querySelector(`.acButton`).innerText = `AC`;
}