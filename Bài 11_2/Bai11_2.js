let currentFontSize = 100;
let defaultFontSize = 100;
const textElement = document.getElementById('text');

function upFont() {
    currentFontSize += 40;
    textElement.style.fontSize = currentFontSize + '%';
}

function downFont(){
    currentFontSize -= 40;
    textElement.style.fontSize = currentFontSize + '%';
}

function defaultFont(){
    textElement.style.fontSize = defaultFontSize + '%';
}