function displayResult(result) {
    let resultParagraph = document.getElementById("Result");
    resultParagraph.style.display = "block";
    resultParagraph.textContent = result.toString();
}

function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
});
function handleDOMReady() {
    const additionButton = document.getElementById("additionButton");
    additionButton.addEventListener("click", triggerAddition);
    const multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.addEventListener("click", triggerMultiplication);
}
function triggerAddition() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let result = addition(firstNumber, secondNumber);
    displayResult(result);
}
function triggerMultiplication() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let result = multiplication(firstNumber, secondNumber);
    displayResult(result);
}
