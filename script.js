const input = document.querySelector('#input-box');
const submit = document.querySelector('#submit');
const buttons = document.querySelector(".buttons");
// const digits = document.querySelector(".digits");

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
    if(arr[arr.length - 1] !== Number){
        arr.pop();
        arr.push(operator);
        let out = arr.join("");
        input.innerText = out;
    } else {
        str += operator;
    }
};

const parentheses = () => {}

buttons.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "clear":
            input.innerText = "";
            break;
        case "par":
            break;
        case "mod":
            input.innerText += "%";
            break;
        case "divide":
            input.innerText += "/";
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
            input.innerText += "×";
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
            input.innerText += "+";
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
            input.innerText += `.`;
            break;
        case "delete":
            del();
            break;
        case "submit":
            console.log("= was clicked");
            break;
    }
});



