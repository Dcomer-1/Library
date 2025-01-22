
let myLibrary = [];
let i = 0;
let y = 0;
function Book(title, author, numOfPages, read){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

function displayBooks(params){
    console.log(params.title);
}


function displayLibrary(myLibrary){
    for(r=0; r < myLibrary.length; r++){
        displayBooks(myLibrary[r]);
    }
      
}
/*
let book1 = new Book('the end', 'random guy', 295, 'yes');
addBookToLibrary(book1);
let book2 = new Book('the nedd', 'random guy', 295, 'no');
addBookToLibrary(book2);
let book3 = new Book('the thed', 'random guy', 295, 'yes');
addBookToLibrary(book3);
displayLibrary(myLibrary);
*/



let bookTitle = '';
let author = '';
let numOfPages = 0;
let readStatus = '';

let buttonElement = document.getElementById('submitButton')
let bookForm = document.getElementsByClassName("Book-form")
function handleForm(event){ event.preventDefault();}

buttonElement.addEventListener("click", function(){
    bookTitle = document.getElementById('title').value;
    author = document.getElementById('author').value;
    numOfPages = document.getElementById('NumberOfPages').value;
    readStatus = document.getElementById('ReadStatus').value;

    myLibrary[y] = new Book(bookTitle, author, numOfPages, readStatus);
    alert(myLibrary);
    

    
    
    y++;
})