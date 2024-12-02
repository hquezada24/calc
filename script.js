let input = document.querySelector('#input-box');
const submit = document.querySelector('#submit');



submit.addEventListener('click', calc);

function calc() {
    let operation = input.value;
    operation.includes('+') ? sum() : 0;
    let array = operation.split('');
    console.log(array);
}

function sum(){

}
