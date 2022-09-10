// I. Section: DOM Links
const display = document.querySelector(".display");
const btn = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".numbers");
const clearBtn = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const currentOperator = document.querySelectorAll("#operator")

// II. Section: Calculation functions
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

// III. Section: Chooser function
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

// IV. Section: Event Listener functions

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
    let arrStr = displayStr.split(/[*/]|[+-]/gm);
    console.log(arrStr);
    let operator = display.textContent.split((/[0-9]/gm)).filter(a => a != "" && a!=".");
    console.log(operator);
    let result = 0;
    for( i = 0; i < operator.length; i++){      
        if((operator.indexOf("*")+1) == true){
            result += operate(parseFloat(arrStr[operator.indexOf("*")]),parseFloat(arrStr[operator.indexOf("*")+1]),"*");
            console.log(result);
            arrStr.splice(operator.indexOf("*"), 1, result);
        }
        else if((operator.indexOf("/")+1) == true){
            result += operate(parseFloat(arrStr[operator.indexOf("/")]),parseFloat(arrStr[operator.indexOf("/")+1]),"/");
            console.log(result);
            arrStr.splice(operator.indexOf("/"), 1, result);
        }
        else if((operator.indexOf("+")+1) == true){
            result += operate(parseFloat(arrStr[operator.indexOf("+")]),parseFloat(arrStr[operator.indexOf("+")+1]),"+");
            console.log(result);
            arrStr = arrStr.splice(operator.indexOf("+"), 1, result);
            console.log(arrStr);
        }
        else if((operator.indexOf("-")+1) == true){
            result += operate(parseFloat(arrStr[operator.indexOf("-")]),parseFloat(arrStr[operator.indexOf("-")+1]),"-");
            console.log(result);
            arrStr.splice(operator.indexOf("-"), 1, result);
        }
        operator.splice(0, 1);

    }
    display.textContent = result;


}
// V. Section: Event listeners
btn.forEach((button) => button.addEventListener("click", displayInput));

clearBtn.addEventListener("click", clear);

equals.addEventListener("click", transformInput);



