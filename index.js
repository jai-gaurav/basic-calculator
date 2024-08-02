const display = document.getElementById('display');
var eqn = "";

function appendToDisplay(value) {
    if (value === '/') {
        display.value += '÷';
        eqn += '/';
    } else if (value === '*') {
        display.value += '×';
        eqn += '*';
    } else {
        display.value += value;
        eqn += value;
    }
}

function clearDisplay() {
    display.value = '';
    eqn = '';
}

function calculate() {
    try {
        display.value = eval(eqn);
        eqn = eval(eqn);
    } catch (e) {
        display.value = 'Error';
        eqn = '';
        console.log(e);
    }
}