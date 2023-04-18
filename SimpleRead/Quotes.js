
var request = 'https://www.stands4.com/services/v2/quotes.php?uid=11614&tokenid=BBpQfBISPLzoCnFW&searchtype=AUTHOR&query=';

function getQuote(authorName) {
    fetch(request + authorName + '&format=json')
    .then(res => res.json())
    .then(json => {
        console.log(json.result[0].quote)
        console.log(json.result[0].author)
    })
}
