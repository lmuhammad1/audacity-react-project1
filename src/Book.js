import React from 'react'

class Book extends React.Component{

  ShelfChanger = (e) => {
    const shelf = e.target.value;
    this.props.onShelfChange(this.props.book, shelf)
  };

  render() {
    const {book} = this.props;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}>
          </div>
          <div className="book-shelf-changer">
            <select onChange={this.ShelfChanger} value={book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      </div>
      )
  }
}
export default Book
