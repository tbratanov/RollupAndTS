import {displayResult} from "./Functions/displayResult"
import { addition } from "./Functions/addition"
import { multiplication } from "./Functions/multiplication"

document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
});

function handleDOMReady() {
    const additionButton = document.getElementById("additionButton");
    additionButton.addEventListener("click", triggerAddition);
    const multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.addEventListener("click", triggerMultiplication);
};

function triggerAddition() {
    let firstNumber = parseFloat((document.getElementById("firstNumber") as HTMLInputElement).value);
    let secondNumber = parseFloat((document.getElementById("secondNumber") as HTMLInputElement).value); 
    let result = addition(firstNumber, secondNumber);
    displayResult(result);
};

function triggerMultiplication() {
    let firstNumber = parseFloat((document.getElementById("firstNumber") as HTMLInputElement).value);
    let secondNumber = parseFloat((document.getElementById("secondNumber") as HTMLInputElement).value); 
    let result = multiplication(firstNumber, secondNumber);
    displayResult(result);
};