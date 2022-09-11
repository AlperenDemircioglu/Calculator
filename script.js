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
    let operatorArr = ["+", "-", "*", "/"];
    console.log(e)
    if(operatorArr.includes(e.srcElement.innerText) && operatorArr.includes(display.textContent[display.textContent.length-1])) {
        console.log(e.srcElement.innerText);
        display.textContent = display.textContent.slice(0,-1);
        display.textContent += e.srcElement.innerText;
    }
    else if (operatorArr.includes(e.srcElement.innerText) && display.textContent == "0") {
        
    }

    else if(e.srcElement.innerText != "clear" && e.srcElement.innerText !="=" && parseInt(display.textContent)== 0 ){
        display.textContent = e.srcElement.innerText;
    }
    else if (e.srcElement.innerText != "clear" && e.srcElement.innerText !="="){
        display.textContent += e.srcElement.innerText;
    }

}

function transformInput(){
    let displayStr = display.textContent;
    let arrStr = displayStr.split(/[*/]|[+-]/gm);
    console.log("arrStr"+ arrStr);
    let operator = display.textContent.split((/[0-9]/gm)).filter(a => a != "" && a!=".");
    console.log("operator length"+ operator.length);
    let index;
    let result = 0;
    const  length = operator.length;
    for( i = 0; i < length; i++){
        console.log(arrStr);      
        if((operator.indexOf("*")+1) == true){
            index = operator.indexOf("*");
            result= operate(parseFloat(arrStr[index]),parseFloat(arrStr[index+1]),"*");
            arrStr.splice(index, 2, result);
            operator.splice(index,1);
            continue
        }
        else if((operator.indexOf("/")+1) == true){
            index = operator.indexOf("/");
            result = operate(parseFloat(arrStr[index]),parseFloat(arrStr[index+1]),"/");
            arrStr.splice(index, 2, result);
            operator.splice(index,1);
            continue
        }
        else if((operator.indexOf("+")+1) == true){
            index = operator.indexOf("+");
            result = operate(parseFloat(arrStr[index]),parseFloat(arrStr[index+1]),"+");
            arrStr.splice(index, 2, result);
            operator = operator.splice(index,1);
            continue
        }
        else if((operator.indexOf("-")+1) == true){
            index = operator.indexOf("-");
            result= operate(parseFloat(arrStr[index]),parseFloat(arrStr[index+1]),"-");
            arrStr.splice(index, 2, result);
            operator.splice(index,1);
            continue
        }
    }
    display.textContent = result;


}
// V. Section: Event listeners
btn.forEach((button) => button.addEventListener("click", displayInput));

clearBtn.addEventListener("click", clear);

equals.addEventListener("click", transformInput);



