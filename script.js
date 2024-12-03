const input = document.querySelector('#input-box');
const submit = document.querySelector('#submit');
const buttons = document.querySelector(".buttons");
// const digits = document.querySelector(".digits");

buttons.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){
        case "clear":
            console.log("AC was clicked");
            break;
        case "par":
            console.log("() was clicked");
            break;
        case "mod":
            console.log("% was clicked");
            break;
        case "divide":
            console.log("/ was clicked");
            break;
        case "seven":
            console.log("7 was clicked");
            break;
        case "eight":
            console.log("8 was clicked");
            break;
        case "nine":
            console.log("9 was clicked");
            break;
        case "times":
            console.log("* was clicked");
            break;
        case "four":
            console.log("4 was clicked");
            break;
        case "five":
            console.log("5 was clicked");
            break;
        case "six":
            console.log("6 was clicked");
            break;
        case "plus":
            console.log("+ was clicked");
            break;
    }
});



