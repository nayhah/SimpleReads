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
    api = "https://www.googleapis.com/books/v1/volumes?q=inauthor:"

    // send a request and get a JSON response
    resp = urlopen(api + removeSpaces(author))
    // parse JSON into Python as a dictionary
    book_data = json.load(resp)
    return book_data
}

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
