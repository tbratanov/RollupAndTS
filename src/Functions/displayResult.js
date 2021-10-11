export function displayResult(result) {
    let resultParagraph = document.getElementById("Result");
    resultParagraph.style.display = "block";
    resultParagraph.textContent = result.toString();
}
;
