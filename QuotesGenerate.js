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