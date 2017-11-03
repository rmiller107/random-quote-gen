// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// all the variables
var message = '';
var quoteText;
var quoteSource;
var quoteYear;
var quoteTags;
var quoteNum;

// function to print the quote to the page
function print(quote) {
    var div = document.getElementById('quote-box');
    div.innerHTML = quote;
}
// function to get a random quote from the list
function getRandomQuote() {
    var key = Math.floor(Math.random() * (quotes.length));   
    quoteText = quotes[key].quote;
    quoteSource = quotes[key].source;
    quoteYear = quotes[key].year;
    quoteTags = quotes[key].tags;
}

function printQuote(){
    var quotes = getRandomQuote();
    message = '<p class="quote">' + quoteText + '</p>';
    message += '<p class="source">' + quoteSource;
    message += '<span class="year">' + quoteYear + '</span></p>';
    print(message);
}

