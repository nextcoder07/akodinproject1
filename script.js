const myLibrary = [];

function Book(book,author,pages,read) {
  // the constructor...
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

Book.prototype.info = function() {
    return `${this.book} by ${this.author}, ${this.pages} pages, ${this.read?"read":"not read yet"}`;
}

function addBookToLibrary(book,author,pages,read) {
  // take params, create a book then store it in the array
  const newBook = new Book(book,author,pages,read);
  myLibrary.push(newBook);
}


function handlesubmit(){
    const book=document.getElementById("book").value
    const author =document.getElementById("author").value
    const pages=document.getElementById("pages").value
    const read=document.getElementById("readcheck").checked
    
    addBookToLibrary(book,author,pages,read);
    renderLibrary();
}
function renderLibrary() {
    const booklist=document.getElementById("booklist");
    booklist.innerHTML="";
    for(let i=0; i<myLibrary.length;i++){
        let div = document.createElement("div");
        div.textContent = myLibrary[i].info();
        let button = document.createElement("button");
        button.textContent = "Toggle Read"; 
        button.addEventListener("click",function() {
            myLibrary[i].toggleRead();
            renderLibrary(); // Refresh the book list
        }
        );
        div.appendChild(button);
        booklist.appendChild(div);
    }   
    
}   
