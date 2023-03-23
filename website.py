from flask import Flask, jsonify, request
from Search import *

app = Flask(__name__)

# create an API endpoint to search for books by author name
@app.route('/api/searchAuthor', methods=['GET'])
def searchAuthor():
    author_name = request.args.get('Author')
    result = searchAuthor(author_name)
    jsonWrite(result)
    printBooks(result)

# create an API endpoint to search for books by book name
@app.route('/api/searchBook', methods=['GET'])
def searchBook():
    book_name = request.args.get('Book')
    result = searchBook(book_name)
    jsonWrite(result)
    printBooks(result)

# create an API endpoint to search for books by genre
@app.route('/api/searchGenre', methods=['GET'])
def searchGenre():
    genre_name = request.args.get('Genre')
    result = searchGenre(genre_name)
    jsonWrite(result)
    printBooks(result)

# create an API endpoint to search for books by keywords
@app.route('/api/searchKeywords', methods=['GET'])
def searchKeywords():
    keywords = request.args.get('Keywords')
    result = searchKeywords(keywords)
    jsonWrite(result)
    printBooks(result)

if __name__ == '__main__':
    app.run(debug=True)
