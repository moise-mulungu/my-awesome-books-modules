import { logo, Navigation } from './modules/nav.js';

import displayCurrentDate from './modules/date.js';

import BookList from './modules/bookList.js';

const dateContainer = document.getElementById('time');

displayCurrentDate(dateContainer);

const bookList = new BookList();

document.getElementById('addButton').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  bookList.add(title, author);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
const navItems = new Navigation();

logo.addEventListener('click', navItems.homePage);
