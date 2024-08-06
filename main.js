const display = document.getElementById('display');

function updateDisplay(input) {
    
    display.value += input;
}

function clearDisplay(input){
    display.value = ""
}

function calculate(){
    display.value =  eval(display.value)
}
