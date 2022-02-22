import * as navItems from './modules/nav.js';

import displayCurrentDate from './modules/date.js';

const dateContainer = document.getElementById('time');

displayCurrentDate(dateContainer);

import BookList from './modules/bookList.js';

const bookList = new BookList();

document.getElementById('addButton').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  
  bookList.add(title, author);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
