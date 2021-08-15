let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return (`${title} by ${author}, ${pages} pages`);
  }
}

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "false");

myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  let bookToAdd = new Book(title, author, pages, read);
  library = document.getElementById("booksContainer")
  myLibrary.push(bookToAdd);
  console.log(bookToAdd);
  let p = document.createElement("p");
  let divbtn = document.createElement("div");
  let btn = document.createElement("button");
  let btnr = document.createElement("button");
  btn.classList.add('deleteButton');
  btnr.classList.add('readButton');
  btn.innerText = "Remove";
  btnr.innerText = read == "false" ? "Not read" : "Read";
  p.textContent = bookToAdd.info();
  divbtn.appendChild(btn);
  divbtn.appendChild(btnr);
  p.appendChild(divbtn);
  library.appendChild(p);

  btn.onclick = function () {
    p.remove();
  }

  btnr.onclick = function () {
    btnr.innerText = btnr.innerText == "Read" ? "Not read" : "Read";
    bookToAdd.read = bookToAdd.read == "false" ? "false" : "true";
  }


}

library = document.getElementById("booksContainer")

for (let book of myLibrary) {
  console.log(book);
  let p = document.createElement("p");
  let info = document.createElement("div");
  let btn = document.createElement("button");
  btn.classList.add('deleteButton');
  let btnr = document.createElement("button");
  btnr.classList.add('readButton');
  btn.innerText = "Remove";
  btnr.innerText = book.read == "false" ? "Not read" : "Read";
  info.textContent = book.info();
  p.appendChild(info);
  p.appendChild(btn);
  p.appendChild(btnr);
  library.appendChild(p);

  btn.onclick = function () {
    p.remove();
  }

  btnr.onclick = function () {
    btnr.innerText = btnr.innerText == "Read" ? "Not read" : "Read";
    book.read = book.read == "false" ? "false" : "true";
  }

}

const btn = document.querySelector('#btn');
const frm = document.querySelector('#frm1');

btn.onclick = function () {
  const rbs = document.querySelectorAll('input[name="read"]');
  console.log(rbs);
  let selectedValueRead;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValueRead = rb.value;
      break;
    }
  }

  let title = document.querySelector('input[name="title"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let pages = document.querySelector('input[name="pages"]').value;

  addBookToLibrary(title, author, pages, selectedValueRead);

  frm.reset();
}