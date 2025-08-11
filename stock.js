const tickerInput = document.getElementById("ticker-input");
const tickerButton = document.getElementById("ticker-submit");


tickerButton.addEventListener("click", () => {
    window.location.href = `/result.html?ticker=${tickerInput.value}`;
})