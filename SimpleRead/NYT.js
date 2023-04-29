var url_Summary = 'https://api.nytimes.com/svc/books/v3/reviews.json?';
var url_Age_Group = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?';
var apiKey = 'API#1';

/* Haruki Murakami's 1Q84*/ 
var isbn = '9780307593313';
/* title can be used interchangibly with ISBN */ 
var bookTitle = '1Q84';

function getReviewUsingISBN(givenISBN) {
    fetch(url_Summary+'isbn='+givenISBN+apiKey)
    .then(res => res.json())
    .then(json => {
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].summary)
        }
        
        console.log()
    })
}

function getReviewUsingBookTitle(givenBookTitle) {
    fetch(url_Summary+'title='+givenBookTitle+apiKey)
    .then(res => res.json())
    .then(json => {
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].summary)
        }

        console.log()
        
    })
}

//this function returns a certain amount of books for a specific age group

function bestSellersForAge(givenAge) {
    const button = document.getElementById("search-button");
    const input = document.getElementById("ageInput");
    const resultContainer = document.getElementById("result-container");
    button.addEventListener("click", () => {
        const givenAge = input.value;
        fetch(url_Age_Group+'age-group='+givenAge.toString()+apiKey)
        .then(res => res.json())
        .then(json => {
            resultContainer.innerHTML = "";
            for (let i = 0; i < 5 && i < json.results.length; i++) {
              const book = json.results[i];
              const bookElement = document.createElement("div");
              bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p>Description: ${book.description}</p>
                <p>Author: ${book.author}</p>
                <p>Age Group: ${book.age_group}</p>
                <p>Publisher: ${book.publisher}</p>
              `;
              resultContainer.appendChild(bookElement);
            }
        })
    })
}


getReviewUsingISBN(isbn)
getReviewUsingBookTitle(bookTitle)
bestSellersForAge(18)