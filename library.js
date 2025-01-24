
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

    let btnClass = document.createElement('button');
    btnClass.textContent = readStatus === 'yes' ? ' Book Read': 'Book Not Read';
    btnClass.classList.add('read-status-btn', readStatus === 'yes' ? 'read':'notread');
    bookCard.appendChild(btnClass);

    let removeBook = document.createElement('button');
    removeBook.textContent = 'Remove Book';
    removeBook.classList.add('remove-book-btn');
    bookCard.appendChild(removeBook);

    
    
    btnClass.addEventListener('click', function(){
        if(btnClass.classList.contains('read')){
            btnClass.classList.remove('read');
            btnClass.classList.add('notread');
            btnClass.textContent = 'Book Not Read';
        }else{
            btnClass.classList.remove('notread');
            btnClass.classList.add('read');
            btnClass.textContent = 'Book Read';
        }
        
    });

    removeBook.addEventListener('click', function(){
        bookCard.remove();
    })
    
}

function clearInput(){
    document.getElementById('author').value = '';
    document.getElementById('NumberOfPages').value='';
    document.getElementById('ReadStatus').value ='';
    document.getElementById('title').value = '';
}


buttonElement.addEventListener("click", function(){
    bookTitle = document.getElementById('title').value;
    author = document.getElementById('author').value;
    numOfPages = document.getElementById('NumberOfPages').value;
    readStatus = document.getElementById('ReadStatus').value;
    if(bookTitle === '' || author === '' || readStatus ===''|| isNaN(numOfPages)|| readStatus.toLowerCase() !== 'yes' && readStatus.toLowerCase() !=='no'){
        return;
    }else{
    myLibrary[y] = new Book(bookTitle, author, numOfPages, readStatus);
    addBookCard(bookTitle, author, numOfPages);
    clearInput();
    y++;
    } 
});


let createNewBook = document.getElementById('createBook');

createNewBook.addEventListener("click", function(){
    document.querySelector('.book-information-card').classList.add('active');
});

document.getElementById('close-button').addEventListener('click', function(){
    document.querySelector('.book-information-card').classList.remove('active');
});