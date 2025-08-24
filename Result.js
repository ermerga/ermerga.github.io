const queryString = window.location.search;
const params = new URLSearchParams(queryString)

const stockNameDiv = document.getElementById("stock-name");
const closePriceDiv = document.getElementById("close-price");
const predictionDiv = document.getElementById("prediction");

const backButton = document.getElementById("back-button");


let closePrice = "";
let prediction = "";
const ticker = params.get("ticker");
let loading = true;




stockNameDiv.innerText = "Loading Prediction...";

fetch(`https://sp500backend.onrender.com/predict?ticker=${ticker}`)
    .then(res => res.json())
    .then(data => {
        prediction = data.prediction;
        closePrice = data.close;

        
        stockNameDiv.innerText = `Prediction for ${ticker.toUpperCase()}`;
        closePriceDiv.innerText = `Close Price: ${closePrice}`;
        predictionDiv.innerText = `The model predicts the stock will go ${prediction.toUpperCase()} the next trading day.`;
    })
    .catch(error => {
        console.error(error);
        stockNameDiv.innerText = "Error fetching prediction";
    });

backButton.addEventListener("click", () => {
    window.location.href = "/stock.html";
})


