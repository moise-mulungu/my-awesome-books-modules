const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
export const logo = document.getElementById('logo');
const addSection = document.getElementById('addSection');
const listSection = document.getElementById('listSection');
const contactSection = document.getElementById('contactSection');
const home = document.getElementById('homePage');

export class Navigation {
  constructor() {
    this.addSection = document.getElementById('addSection');
    this.listSection = document.getElementById('listSection');
    this.contactSection = document.getElementById('contactSection');
    this.home = document.getElementById('homePage');
  }

  homePage() {
    this.addSection.style.display = 'none';
    this.listSection.style.display = 'none';
    this.contactSection.style.display = 'none';
    this.home.style.display = 'block';
    this.list.style.color = 'black';
    this.addNew.style.color = 'black';
  }
}

list.addEventListener('click', (event) => {
  addSection.style.display = 'none';
  listSection.style.display = 'block';
  contactSection.style.display = 'none';
  home.style.display = 'none';
  addNew.style.color = 'black';
  contact.style.color = 'black';
  event.target.style.color = 'rgb(59, 59, 190)';
});

addNew.addEventListener('click', (event) => {
  addSection.style.display = 'flex';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  home.style.display = 'none';
  list.style.color = 'black';
  contact.style.color = 'black';
  event.target.style.color = 'rgb(59, 59, 190)';
});

contact.addEventListener('click', (event) => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'flex';
  home.style.display = 'none';
  list.style.color = 'black';
  addNew.style.color = 'black';
  event.target.style.color = 'rgb(59, 59, 190)';
});
