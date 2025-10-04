const portfolio = document.getElementById("portfolio");
portfolio.setAttribute("hidden", "hidden");

const portfolioButton = document.getElementById("portfolioButton");
console.log(portfolioButton);

const homediv = document.getElementById("homediv");
const home1 = document.getElementById("home1");


console.log('Script loaded');
portfolioButton.addEventListener("click", function() {
    homediv.setAttribute("hidden", "hidden");
    home1.setAttribute("hidden", "hidden");
    console.log('Section is now invisible');
    portfolio.removeAttribute("hidden");
    console.log('Portfolio is now visible');

});


