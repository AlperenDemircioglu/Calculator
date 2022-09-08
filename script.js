const display = document.querySelector(".display");
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".numbers");


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a, b, operator){
    if (operator == "add"){
        return add(a,b);
    }
    else if (operator == "subtract"){
        return subtract(a,b);
    }
    else if (operator == "multiply"){
        return multiply(a,b);
    }
    else if (operator == "divide"){
        return divide(a,b);
    }
}

function displayInput(e){
    display.textContent = e.srcElement.innerText;

}
btn.forEach((button) => button.addEventListener("click", displayInput));



