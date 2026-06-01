const sp500Box = document.getElementById("sp500");

sp500Box.addEventListener("click", () => {
    console.log("routing to the projects");
    window.location.href = "/stock.html";
});

const weeknightBox = document.getElementById("weeknight");

weeknightBox.addEventListener("click", () => {
    window.open("https://aifood-sandy.vercel.app", "_blank");
});