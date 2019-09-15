//Calculator button functionality//
///////////////////////////////////
document.addEventListener(`keydown`, typeNum);

function typeNum(event) {
    console.log(event.code);
    const nums = {
                    Digit1: `1`,
                    Digit2: `2`,
                    Digit3: `3`,
                    Digit4: `4`,
                    Digit5: `5`,
                    Digit6: `6`,
                    Digit7: `7`,
                    Digit8: `8`,
                    Digit9: `9`,
                    Digit0: `0`,
                    Period: `.`,
                }
    if (event.code in nums) {
        if (document.querySelector(`#calc-number-area`).innerText === `0`) {
            document.querySelector(`#calc-number-area`).innerText = ``;
        }
        document.querySelector(`#calc-number-area`).innerText += nums[event.code];
        if (Number(document.querySelector(`#calc-number-area`).innerText) > 0) {
            document.querySelector(`.acButton`).innerText = `C`;
        } else {
            document.querySelector(`.acButton`).innerText = `AC`;
        }
    }
    if (event.code === `Enter` || event.code === `Equal`) {
        equals();
    }
}

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
    const list = document.querySelector(`#equation-display`);
    for (let i = (list.childNodes.length) - 1; i > 0; i--) {
        list.removeChild(list.childNodes[i]);
    }
}


//Math functionality//
//////////////////////
let numArr = [];
function buildMathArr(event) {
    let num = document.querySelector(`#calc-number-area`).innerText;
    if (document.querySelector(`#calc-status-area`).innerText === `NEG`) {
        numArr.push(Number(num - (num * 2)));
        document.querySelector(`#calc-status-area`).innerText = ``;
    } else {
        numArr.push(Number(num));
    }
    if (event.target.innerText === `+`) {
        numArr.push(`+`);
    } else if (event.target.innerText === `-`) {
        numArr.push(`-`);
    } else if (event.target.classList.contains(`multiply`)) {
        numArr.push(`*`);
    } else if (event.target.classList.contains(`divide`)) {
        numArr.push(`/`);
    }
    document.querySelector(`#calc-number-area`).innerText = `0`
}

function equals() {
    let num = Number(document.querySelector(`#calc-number-area`).innerText);
    if (numArr.length === 0) {
        return
    }
    if (document.querySelector(`#calc-status-area`).innerText === `NEG`) {
        num = Number(num - (num * 2));
        numArr.push(num);
    } else {
        numArr.push(document.querySelector(`#calc-number-area`).innerText);
    }
    document.querySelector(`#calc-status-area`).innerText = ``;
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
    if (isNaN(answer)) {
        answer = `0`
    }
    displayArr += ` = ` + answer;
    newLi.innerText = displayArr;
    listArea.appendChild(newLi);
    numArr = [];
    document.querySelector(`#calc-number-area`).innerText = `0`;
    document.querySelector(`.acButton`).innerText = `AC`;
}