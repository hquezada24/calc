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

const switchOperator = () => {};

const parentheses = () => {}

buttons.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "clear":
            console.log("AC was clicked");
            input.innerText = "";
            break;
        case "par":
            console.log("() was clicked");
            break;
        case "mod":
            console.log("% was clicked");
            input.innerText += "% ";
            break;
        case "divide":
            console.log("/ was clicked");
            input.innerText += "/ ";
            break;
        case "seven":
            console.log("7 was clicked");
            input.innerText += `${7} `;
            break;
        case "eight":
            console.log("8 was clicked");
            input.innerText += `${8} `;
            break;
        case "nine":
            console.log("9 was clicked");
            input.innerText += `${9} `;
            break;
        case "times":
            console.log("* was clicked");
            input.innerText += "× ";
            break;
        case "four":
            console.log("4 was clicked");
            input.innerText += `${4} `;
            break;
        case "five":
            console.log("5 was clicked");
            input.innerText += `${5} `;
            break;
        case "six":
            console.log("6 was clicked");
            input.innerText += `${6} `;
            break;
        case "plus":
            console.log("+ was clicked");
            input.innerText += "+ ";
            break;
        case "one":
            console.log("1 was clicked");
            input.innerText += `${1} `;
            break;
        case "two":
            console.log("2 was clicked");
            input.innerText += `${2} `;
            break;
        case "three":
            console.log("3 was clicked");
            input.innerText += `${3} `;
            break;
        case "minus":
            console.log("4 was clicked");
            input.innerText += "- ";
            break;
        case "zero":
            console.log("0 was clicked");
            input.innerText += `${0} `;
            break;
        case "point":
            console.log(". was clicked");
            input.innerText += `. `;
            break;
        case "delete":
            console.log("<- was clicked");
            del();
            break;
        case "submit":
            console.log("= was clicked");
            break;
    }
});



