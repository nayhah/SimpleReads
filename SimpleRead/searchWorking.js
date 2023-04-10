function removeSpaces(input) {
    return input.replaceAll(" ", "%20");
}

function searchKeywords(keyword) {
    api = "https://www.googleapis.com/books/v1/volumes?q=intitle:"

    // send a request and get a JSON response
    resp = urlopen(api + removeSpaces(keyword))
    // parse JSON into Python as a dictionary
    book_data = json.load(resp)
    return book_data
}

    function searchAuthor(author) {
        const response = fetch(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(
            author
          )}`
        );

        return response.then((r) => r.json());
      }

      const list = document.querySelector("#searchResults");
      //# id for textbox
      //query selector lets you selects things by css id
      const authorTextbox = document.querySelector("#authorTextbox");
      const searchButton = document.querySelector("#searchButton");

      searchButton.addEventListener("click", async () => {

        const author = authorTextbox.value;
        const result = await searchAuthor(authorTextbox.value);

        console.log(result);

        const results = result.items.slice(0, 5);

        for (const result of results) {
          const li = document.createElement("li");
          const a = document.createElement("a");

          a.href = result.volumeInfo.previewLink;
          a.textContent = result.volumeInfo.title;
          a.target = "_blank";
          a.rel = "noopener noreferrer";

          li.appendChild(a);
          list.appendChild(li);
        }
      });
    /*api = "https://www.googleapis.com/books/v1/volumes?q=inauthor:"
    var authorTextbox = document.getElementById("authorTextbox").value;

    // send a request and get a JSON response
    //get data at runtime
    const data
    resp = fetch(api + removeSpaces(authorTextbox))
    // parse JSON into Python as a dictionary
    book_data = json.load(resp)
    return book_data
    */

function searchGenre(subject) {
    api = "https://www.googleapis.com/books/v1/volumes?q=subject:"

    // send a request and get a JSON response
    resp = urlopen(api + removeSpaces(subject))
    // parse JSON into Python as a dictionary
    book_data = json.load(resp)
    return book_data
}

function jsonWrite(book_data) {
    f = open("search.json", "w")
    f.write(json.dumps(book_data))
    f.close()
}
/*<input type="text" id="userInput">
let userInput = document.getElementById("userInput").value;
*/
