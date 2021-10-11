export function displayResult(result:number) {
    let resultParagraph = document.getElementById("Result");
    resultParagraph.style.display = "block";
    resultParagraph.textContent = result.toString();
};