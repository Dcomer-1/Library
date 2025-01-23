
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





<div style="border: 2px solid black; display: flex; flex-direction: column;" class="bookCard">
            <h1 style="margin-bottom: 0;"> Book Title</h2>
            <h3> book author</h3>
            <p style="margin-top: 0;"> Num Of Pages: </p>
            <p> Read Status: </p>

</div>
*/



let bookTitle = '';
let author = '';
let numOfPages = 0;
let readStatus = '';

let buttonElement = document.getElementById('submitButton')
let bookCardContainer = document.getElementById("bookContainer")

function addBookCard(title, author, numPages){
    let bookCard = document.createElement("div");
    bookCardContainer.appendChild(bookCard);
    bookCard.classList.add('bookCard');

    let bookTitle = document.createElement('h1');
    bookTitle.textContent = title;
    bookCard.appendChild(bookTitle);
    bookTitle.classList.add('bookCardTitle');

    let Cardauthor = document.createElement('h3');
    Cardauthor.textContent = author;
    bookCard.appendChild(Cardauthor);
    Cardauthor.classList.add('bookCardAuthor');

    let numOfPages = document.createElement('p');
    numOfPages.textContent = 'pages: ' + numPages;
    bookCard.appendChild(numOfPages);
    numOfPages.classList.add('bookCardPages');

    let switchClass = document.createElement('label');
    switchClass.classList.add('switch');
    let checkBox = document.createElement('input type=checkbox')
    bookCard.appendChild(switchClass);
    switchClass.appendChild(checkBox);

    let slider = document.createElement('span');
    switchClass.appendChild(slider);
    slider.classList.add('slider-round');

}

buttonElement.addEventListener("click", function(){
    bookTitle = document.getElementById('title').value;
    if(bookTitle == '' || bookTitle == null){
        return;
    }else{
    author = document.getElementById('author').value;
    numOfPages = document.getElementById('NumberOfPages').value;
    readStatus = document.getElementById('ReadStatus').value;

    myLibrary[y] = new Book(bookTitle, author, numOfPages, readStatus);
    addBookCard(bookTitle, author, numOfPages);
    y++;
    } 
})



let createNewBook = document.getElementById('createBook');

createNewBook.addEventListener("click", function(){
    document.querySelector('.book-information-card').classList.add('active');
});

document.getElementById('close-button').addEventListener('click', function(){
    document.querySelector('.book-information-card').classList.remove('active');
});