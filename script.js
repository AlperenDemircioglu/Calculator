const display = document.querySelector(".display");
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".numbers");
const clearBtn = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const currentOperator = document.querySelectorAll("#operator")

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
    if (operator == "+"){
        return add(a,b);
    }
    else if (operator == "-"){
        return subtract(a,b);
    }
    else if (operator == "*"){
        return multiply(a,b);
    }
    else if (operator == "/"){
        return divide(a,b);
    }

}
function clear() {
    display.textContent = "";
}
function displayInput(e){
    if(e.srcElement.innerText != "clear" && e.srcElement.innerText !="=" && parseInt(display.textContent)== 0){
        display.textContent = e.srcElement.innerText;
    }
    else if (e.srcElement.innerText != "clear" && e.srcElement.innerText !="="){
        display.textContent += e.srcElement.innerText;
    }

}
function transformInput(){
    let displayStr = display.textContent;
    let arrStr = displayStr.split(/[^0-9]/gm);
    let operator = display.textContent.split((/[0-9]/gm)).filter(a => a != "");
    console.log(arrStr[0]);
    console.log(arrStr[1]);
    console.log(operator);
    display.textContent = operate(parseInt(arrStr[0]), parseInt(arrStr[1]), operator);

}
/* let operatorInUse;

function setCurrentOperator(){
    operatorInUse = display.textContent.split((/[0-9]/gm)).filter(a => a != "");

}
*/
 // currentOperator.forEach(e => e.addEventListener("click", setCurrentOperator));

btn.forEach((button) => button.addEventListener("click", displayInput));

clearBtn.addEventListener("click", clear);

equals.addEventListener("click", transformInput);



