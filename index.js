const sp500Box = document.getElementById("sp500");

sp500Box.addEventListener("click", () => {
    console.log("routing to the projects");
    window.location.href = "/projects/stock-predictor";
})