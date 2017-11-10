import React from 'react'
import Book from './Book'

function BookShelf(props) {
  const bookshelfArray = [
    {"bookshelfTitle":"Currently Reading", "bookshelfName":"currentlyReading"},
    {"bookshelfTitle":"Want To Read", "bookshelfName":"wantToRead"},
    {"bookshelfTitle":"Read", "bookshelfName":"read"}

  ]
  return(
    bookshelfArray.map(item =>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{item.bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props
            .state.filter((book) => book.shelf === item.bookshelfName)
            .map((book) => {
              return <li key={book.id}>
                <Book book={book}/>
              </li>
            })
          }
        </ol>
      </div>

    </div>
    )
  )
}

export default BookShelf
