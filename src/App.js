import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  };
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  componentDidMount() {
    BooksAPI
    .getAll()
    .then(books => {
      this.setState({books})
    });
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
          </div>
          <div>
            <BookShelf state={this.state.books}></BookShelf>
          </div>
        </div>
      </div>
    )
  }
}
export default BooksApp



























