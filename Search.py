import json
from urllib.request import urlopen

def removeSpaces(input):
    return input.replace(" ", "%20")

def searchKeywords(keyword):
    api = "https://www.googleapis.com/books/v1/volumes?q=intitle:"

    # send a request and get a JSON response
    resp = urlopen(api + removeSpaces(keyword))
    # parse JSON into Python as a dictionary
    book_data = json.load(resp)
    return book_data

def searchAuthor(author):
    api = "https://www.googleapis.com/books/v1/volumes?q=inauthor:"

    # send a request and get a JSON response
    resp = urlopen(api + removeSpaces(author))
    # parse JSON into Python as a dictionary
    book_data = json.load(resp)
    return book_data

def searchGenre(subject):
    api = "https://www.googleapis.com/books/v1/volumes?q=subject:"

    # send a request and get a JSON response
    resp = urlopen(api + removeSpaces(subject))
    # parse JSON into Python as a dictionary
    book_data = json.load(resp)
    return book_data

def printBooks(bookData):
    for x in range(0, 5):
        # create additional variables for easy querying
        volume_info = book_data["items"][x]["volumeInfo"]
        author = volume_info["authors"]
        # practice with conditional expressions!
        prettify_author = author if len(author) > 1 else author[0]

        # display title, author, page count, publication date
        # fstrings require Python 3.6 or higher
        # \n adds a new line for easier reading
        print(f"\nTitle: {volume_info['title']}")
        print(f"Author: {prettify_author}")
        print(f"Page Count: {volume_info['pageCount']}")
        print(f"Publication Date: {volume_info['publishedDate']}")
        print("\n***\n")

def jsonWrite(book_data):
    f = open("sample.json", "w")
    f.write(json.dumps(book_data))
    f.close()

if __name__ == '__main__':
    book_data = searchGenre("Dystopian Future")
    jsonWrite(book_data)
    printBooks(book_data)



