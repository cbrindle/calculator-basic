//Start up and initializing operations
function giveEventNums() {
    let items = document.querySelectorAll(`.num-color`);
    items.forEach(function(item) {
        item.onclick = calcNumButton;
    })
}
giveEventNums();


//Calculator button functionality
function calcNumButton(event) {
    pressNum = event.target;
    document.querySelector(`#calc-display`).innerText += pressNum.innerText;
}


// Start right-main JS
function clearRightDisplay() {
    document.querySelector(`#right-main-bottom`).innerText = ``;
}