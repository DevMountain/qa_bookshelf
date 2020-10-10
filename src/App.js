import React from "react";
import "./reset.css";
import "./App.css";
import Header from "./Components/Header";
import AddBook from "./Components/AddBook";
import Bookshelf from "./Components/Bookshelf";
import GenreSelector from "./Components/GenreSelector";
import {
  addBook,
  deleteBook,
  getBooks,
  getGenre,
  toggleComplete,
} from "./Components/Booklist";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
    this.getBooks = this.getBooks.bind(this);
    this.getGenre = this.getGenre.bind(this);
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.completeBook = this.completeBook.bind(this);
    this.updateBookshelf = this.updateBookshelf.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  updateBookshelf(books) {
    if (books)
      this.setState({
        books: books,
      });
    else console.error("attempted updating with invalid book list");
  }

  getBooks = () => {
    this.updateBookshelf(getBooks());
  };

  //Look at this - is this right?
  addBook = (e, title, author, genre, coverImg) => {
    e.preventDefault();
    this.updateBookshelf(addBook({ title, author, genre, coverImg }));
  };

  getGenre = (genre) => {
    this.updateBookshelf(getGenre(genre));
  };

  deleteBook = (id) => {
    this.updateBookshelf(deleteBook(id));
  };

  completeBook = (id) => {
    this.updateBookshelf(toggleComplete(id));
  };

  render() {
    return (
      <div className='App'>
        <div className='page'>
          <Header />
          <div className='under-header'>
            <Bookshelf
              completeBook={this.completeBook}
              deleteBook={this.deleteBook}
              books={this.state.books}
            />
            <div className='right-components'>
              <GenreSelector
                books={this.state.books}
                getGenre={this.getGenre}
              />
              <AddBook addBook={this.addBook} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//The getGenre isn't working.

//What's the e.preventDefault for?

//Do I need to bind all those functions? I know they're arrow functions. Does it matter?
