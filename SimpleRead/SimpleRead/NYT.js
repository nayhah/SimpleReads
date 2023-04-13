var url_Summary = 'https://api.nytimes.com/svc/books/v3/reviews.json?';
var url_Age_Group = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?';
var apiKey = '&api-key=JVL7IxYLezwxfzydNdh2UWXqBl3XHCxu';

/* Haruki Murakami's 1Q84*/ 
var isbn = '9780307593313';
/* title can be used interchangibly with ISBN */ 
var bookTitle = '1Q84';

//var age = 18


//var example = 'https://api.nytimes.com/svc/books/v3/reviews.json?isbn=9780307476463&api-key=JVL7IxYLezwxfzydNdh2UWXqBl3XHCxu';

//function gives all the reviews from NYT people on the given isbn or for the other function the given book title

function getReviewUsingISBN(givenISBN) {
    fetch(url_Summary+'isbn='+givenISBN+apiKey)
    .then(res => res.json())
    .then(json => {
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].summary)
        }
        
        console.log()

        /*
        //return url to review on NYT
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].url)
        }
        //return publication date in form "2011-11-10"
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].publication_dt)
        }
        //return whoever wrote the review on NYT
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].byline)
        }
        //return the book title
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].book_title)
        }
        //return the author of the book
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].book_author)
        }
        //return the isbn
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].isbn13)
        }
        */
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
        
        /*
        //return url to review on NYT
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].url)
        }
        //return publication date in form "2011-11-10"
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].publication_dt)
        }
        //return whoever wrote the review on NYT
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].byline)
        }
        //return the book title
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].book_title)
        }
        //return the author of the book
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].book_author)
        }
        //return the isbn
        for (i = 0; i < json.results.length; ++i){
            console.log(json.results[i].isbn13)
        }
        */
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
         /*   
            for (i = 0; i < 5; ++i) {  //this can be any length we want it to just as long as it is less than the results length
                console.log("Title: " + json.results[i].title)
                console.log("Description: " + json.results[i].description)
                console.log("Author: " + json.results[i].author)
                console.log("Age Group: " + json.results[i].age_group)
                console.log("Publisher: " + json.results[i].publisher)
                console.log()
            }
            */
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