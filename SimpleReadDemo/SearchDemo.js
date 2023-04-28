
function removeSpaces(input) {
    return input.replaceAll(" ", "%20");
}

function searchKeywords(keyword) {
    const response = fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
          keyword
        )}`
      );

      return response.then((r) => r.json());
}
const list1 = document.querySelector("#searchResults");
      const keywordTextbox = document.querySelector("#keywordTextbox");
      const searchButton1 = document.querySelector("#searchButton");

      searchButton1.addEventListener("click", async () => {

        const keyword = keywordTextbox.value;
        const result = await searchKeywords(keywordTextbox.value);

        if(keyword.length > 0) {

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
                list1.appendChild(li);
            }
        }
      });

    function searchAuthor(author) {
        const response = fetch(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(
            author
          )}`
        );

        return response.then((r) => r.json());
      }

      const list2 = document.querySelector("#searchResults");
      const authorTextbox = document.querySelector("#authorTextbox");
      const searchButton = document.querySelector("#searchButton");

      searchButton.addEventListener("click", async () => {

        const author = authorTextbox.value;
        const result = await searchAuthor(authorTextbox.value);

        if(author.length > 0) {
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
                list2.appendChild(li);
                generateQuote(author);
            }
        }
      });

function searchGenre(subject) {
    const response = fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(
          author
        )}`
      );

      return response.then((r) => r.json());
}
      const list3 = document.querySelector("#searchResults");
      const genreTextbox = document.querySelector("#genreTextbox");
      const searchButton3 = document.querySelector("#searchButton");

      searchButton.addEventListener("click", async () => {

        const genre = genreTextbox.value;
        const result = await searchAuthor(genreTextbox.value);

        if(genre.length > 0) {
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
                list3.appendChild(li);
            }
        }
      });


function jsonWrite(book_data) {
    f = open("search.json", "w")
    f.write(json.dumps(book_data))
    f.close()
}
