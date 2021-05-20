const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuote array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //Appending quotes to html
  quoteText.innerText = quote.text;

  //Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  // Check if author field is blank and replace with unknown
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else authorText.innerText = quote.author;
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch('https://type.fit/api/quotes');
    apiQuotes = await response.json();
    newQuote();
  } catch (err) {
    //Catch Error Here
    console.log(err.message);
  }
}

// To Tweet a quote
function tweetQuote() {
  twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners

newQuoteBtn.addEventListener('click', newQuote);

twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuotes();
