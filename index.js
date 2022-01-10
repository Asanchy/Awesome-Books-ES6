import displayLibrary from './modules/display-books.js';
import manipulateBooks from './modules/edit-library.js';
import navigation from './modules/navigations.js';
import booksData from './modules/books-data.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const addButton = document.querySelector('#add');
const listContainer = document.querySelector('.books');
const list = document.querySelector('#list');
const goAddBook = document.querySelector('#add-book');
const contact = document.querySelector('#contact');
const date = document.querySelector('#date');

function displayDate() {
  const dt = DateTime.now();
  date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}

setInterval(displayDate, 1000);

window.addEventListener('load', () => {
  list.classList.add('list');
  if (localStorage.getItem('books') === null) {
    booksData.updateData([]);
  }
  displayLibrary.loadBooks();
});

addButton.addEventListener('click', () => {
  manipulateBooks.addBook();
  displayLibrary.loadBooks();
});
list.addEventListener('click', () => {
  navigation.showList();
});
goAddBook.addEventListener('click', () => {
  navigation.showAddBook();
});
contact.addEventListener('click', () => {
  navigation.showContactInfo();
});

listContainer.addEventListener('click', (event) => {
  manipulateBooks.removeBook(event);
  displayLibrary.loadBooks();
});