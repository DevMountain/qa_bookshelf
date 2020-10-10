const books = require("../data/books.json");
let nextId = 21;

export const getBooks = () => books;

export const getGenre = (genre) => books.filter((book) => book.genre === genre);

export const addBook = (book) => {
  const { title, author, genre, coverImd } = book;
  if (!title || !author || !genre) {
    return null;
  }
  books.push({
    id: nextId,
    title,
    author,
    genre,
    coverImd,
    completed: false,
  });
  nextId++;
  return books;
};

export const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === id);
  if (index < 0) return null;
  books.splice(index, 1);
  return books;
};

export const toggleComplete = (id) => {
  const index = books.findIndex((book) => book.id === id);
  if (index < 0) return null;
  books[index].completed = !books[index].completed;
  return books;
};
