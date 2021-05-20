let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuote array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
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

//On Load
getQuotes();
