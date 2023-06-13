const form = document.getElementById('form');
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.toggleRead = function() {
    this.read = read ? 0 : 1;
       }


function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const book = new Book(title, author, pages, read);
    const testBook = new Book("PIPI","KAKA","TITI",true);
    myLibrary.push(book);


};

function displayBooks() {
    const bookTable =document.getElementById("book-table");
    bookTable.innerHTML = "";
    const tableHeader = document.createElement("tr");
    tableHeader.innerHTML = "<th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Action</th>"
    bookTable.appendChild(tableHeader);

    for(let i = 0; i < myLibrary.length; i++) {
       const book = myLibrary[i];

       let tableRow = document.createElement("tr");

       let titleData = document.createElement("td");
       titleData.textContent = book.title;
       tableRow.appendChild(titleData);

       let authorData = document.createElement("td");
       authorData.textContent = book.author;
       tableRow.appendChild(authorData);

       let pagesData = document.createElement("td");
       pagesData.textContent = book.pages;
       tableRow.appendChild(pagesData);

       let readData = document.createElement("td");
       let checkbox =  document.createElement("input")
       checkbox.type = "checkbox";
       checkbox.checked = book.read;
       checkbox.addEventListener("click", (e) =>{
        myLibrary[i].read = myLibrary[i].read ? 0 : 1;
       })
       readData.appendChild(checkbox);
       tableRow.appendChild(readData);

       const removeButton = document.createElement("button");
       removeButton.textContent = "Remove";
       removeButton.addEventListener("click", (e) =>{
        myLibrary.splice(i, 1);
        displayBooks();
       });
       tableRow.appendChild(removeButton);

       bookTable.appendChild(tableRow);
       
    }
};

function clearFields() {
    document.getElementById('form').reset();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    clearFields();
    form.style.display = "none";
  });

  const newBook = document.getElementById("NEW-BOOK");
  newBook.addEventListener('click', (e) => {
    form.style.display = "flex"
  })


//   displayedBook.title + "/" + displayedBook.author + "/" + displayedBook.pages + "/" + displayedBook.read + "/n";