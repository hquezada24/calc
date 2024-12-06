const input = document.querySelector('#input-box');
const submit = document.querySelector('#submit');
const buttons = document.querySelector(".buttons");
//const button = document.querySelector(".myButton");
const previous = document.querySelector("#prev");

const del = () => {
    let str = input.innerText;
    let arr = str.split("");
    arr.pop();
    let out = arr.join("");
    input.innerText = out;
};

const setOperator = (operator) => {
    let str = input.innerText;
    let arr = str.split("");
    const operators = "+-/×%";
    if(operators.includes(arr[arr.length - 1])){
        arr.pop();
        arr.push(operator);
        let out = arr.join("");
        input.innerText = out;
    } else {
        input.innerText += operator;
    }
};

const setParentheses = () => {
    let str = input.innerText;
    if(str.findLast("(")){
        input.innerText += ")";
    } else {
        input.innerText += "(";
    }
}

const execute = () => {
    //let prev = previous.innerText;
    let str = input.innerText;
    const tokens = str.split(/(\+|\-|\×|\/)/);
    let result = parseFloat(tokens[0]);
    for(let i = 1; i < tokens.length; i++){
        const operator = tokens[i];
        const operand = parseFloat(tokens[i + 1]);
        
        switch(operator){
            case "+":
                result += operand;
                break;
            case "-":
                result -= operand;
                break;
            case "×":
                result *= operand;
                break;
            case "/":
                result /= operand;
                break;
            case "%":
                operand % result;
                break;
        }
    }
    previous.innerText = input.innerText;
    input.innerText = result;
};

buttons.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "clear":
            input.innerText = "";
            previous.innerText = "";
            break;
        case "par":
            setParentheses();
            break;
        case "mod":
            setOperator("%");
            break;
        case "divide":
            setOperator("/");
            break;
        case "seven":
            input.innerText += `${7}`;
            break;
        case "eight":
            input.innerText += `${8}`;
            break;
        case "nine":
            input.innerText += `${9}`;
            break;
        case "times":
            setOperator("×");
            break;
        case "four":
            input.innerText += `${4}`;
            break;
        case "five":
            input.innerText += `${5}`;
            break;
        case "six":
            input.innerText += `${6}`;
            break;
        case "plus":
            setOperator("+");
            break;
        case "one":
            input.innerText += `${1}`;
            break;
        case "two":
            input.innerText += `${2}`;
            break;
        case "three":
            input.innerText += `${3}`;
            break;
        case "minus":
            setOperator("-");
            break;
        case "zero":
            input.innerText += `${0}`;
            break;
        case "point":
            setOperator(".");
            break;
        case "delete":
            del();
            break;
        case "submit":
            execute();
            break;
    }
});

document.addEventListener("keydown", (e) => {
    //button.blur();
    let target = e.key;

    switch(target){
        case "1":
            document.activeElement.blur();
            input.innerText += "1";
            break;
        case "2":
            document.activeElement.blur();
            input.innerText += "2";
            break;
        case "3":
            document.activeElement.blur();
            input.innerText += "3";
            break;
        case "4":
            document.activeElement.blur();
            input.innerText += "4";
            break;
        case "5":
            document.activeElement.blur();
            input.innerText += "5";
            break;
        case "6":
            document.activeElement.blur();
            input.innerText += "6";
            break;
        case "7":
            document.activeElement.blur();
            input.innerText += "7";
            break;
        case "8":
            document.activeElement.blur();
            input.innerText += "8";
            break;
        case "9":
            document.activeElement.blur();
            input.innerText += "9";
            break;
        case "0":
            document.activeElement.blur();
            input.innerText += "0";
            break;
        case "c" || "C":
            document.activeElement.blur();
            previous.innerText = ""
            input.innerText = "";
            break;
        case "+":
            document.activeElement.blur();
            setOperator("+");
            break;
        case "-":
            document.activeElement.blur();
            setOperator("-");
            break;
        case "*":
            document.activeElement.blur();
            setOperator("×");
            break;
        case "/":
            document.activeElement.blur();
            setOperator("/");
            break;
        case "%":
            document.activeElement.blur();
            setOperator("%");
            break;
        case ".":
            document.activeElement.blur();
            setOperator(".");
            break;
        case "Backspace":
            document.activeElement.blur();
            del();
            break;
        case "Enter" || "enter":
            document.activeElement.blur();
            execute();
            break;
    }
});



