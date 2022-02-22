export default class BookList {
  constructor() {
    this.bookList = [];
    this.displayInfo();
  }

  add(title, author) {
    if (title && author) {
      const newBook = {
        title: title,
        author: author
      };
      this.bookList.push(newBook);
      localStorage.setItem('bookList', JSON.stringify(this.bookList));
      //this.bookList = JSON.parse(localStorage.getItem('bookList'));
      this.displayInfo();
    }
  }

  // Check localStorage and if there is any book saved in it, we render it on the page.
  // This method removed all the content first and then add items afterward.
  displayInfo() {
    if (JSON.parse(localStorage.getItem('bookList'))) {
      this.bookList = JSON.parse(localStorage.getItem('bookList'));
      const bookShelf = document.getElementById('bookShelf');
      bookShelf.innerHTML = '';
      this.bookList.forEach((book, index) => {
        bookShelf.innerHTML += `
              <div class="book-row">
                      <p class="title-p">"${book.title}" By: ${book.author}</p>
                      <button id="${index}" class="removeButton">Remove</button>
              </div> `;
      });
      const removeButtons = document.querySelectorAll('.removeButton');
      removeButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', (event) => {
          // remove the book
          const index = parseInt(event.target.id)
          this.remove(index)
        })
      });
    }
  }

  remove(index) {
    this.bookList.splice(index, 1);
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
    this.displayInfo();
  }
}