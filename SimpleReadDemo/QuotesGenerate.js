
//var request = 'https://www.stands4.com/services/v2/quotes.php?uid=11614&tokenid=BBpQfBISPLzoCnFW&searchtype=AUTHOR&query=';
/*
async function getQuote(author) {
  if (!author) {
    return "Please enter a valid author name";
  }
  
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(author)}&maxResults=10&fields=items(volumeInfo(title,authors,description))`
  );
  
  const data = await response.json();
  const quotes = [];
  
  if (data.items) {
    data.items.forEach((item) => {
      if (item.volumeInfo.authors && item.volumeInfo.authors.includes(author)) {
        quotes.push({
          title: item.volumeInfo.title,
          quote: item.volumeInfo.description
        });
      }
    });
  }
  
  if (quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return `"${quotes[randomIndex].quote}" - ${quotes[randomIndex].title}`;
  } else {
    return `No quotes found for ${author}.`;
  }
}


// get references to the HTML elements
const authorbox = document.querySelector("#quoteInput");
const searchBut = document.querySelector("#search-button");
const resultContainer = document.querySelector("#result-container");

// add a click event listener to the search button
searchBut.addEventListener("click", async () => {
  const author = authorbox.value;
  const quote = await getQuote(author);
  resultContainer.innerHTML = quote;
});

*/
const author = authorTextbox.value;
function generateQuote(author) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(author)}&maxResults=10&fields=items(volumeInfo(title,authors,description))`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const quoteIndex = Math.floor(Math.random() * data.items.length);
      const quote = data.items[quoteIndex].volumeInfo.description;
      const title = data.items[quoteIndex].volumeInfo.title;
      const authorName = data.items[quoteIndex].volumeInfo.authors[0];
      const quoteContainer = document.getElementById("quote-container");
      quoteContainer.innerHTML =`
      <p>Here is a quote from your author</p>
        <p>"${quote}"</p>
        <p>- ${authorName}, ${title}</p>
      `;
    })
    .catch(error => console.error(error));
}

document.getElementById("quote-button").addEventListener("click", generateQuote);

