const myLibrary = [];
const addBookBtn = document.querySelector(".add-book");
const dialog = document.querySelector(".dialog-modal");
const saveChangesBtn = document.querySelector(".submit");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#numOfPages");
const bookStatus = document.querySelector("#read");
const tbody = document.querySelector("tbody");



//Book object constructor
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


//push new Book object to the library
function addBookToLibrary(title, author, pages, status){
    myLibrary.push(new Book(title, author, pages, status));
}


function showBookInTable(myLibrary){
    tbody.textContent = "";
    myLibrary.forEach((book, index)  => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        for (const key in book) {
            const td = document.createElement("td");
            td.textContent = book[key];
            tr.appendChild(td);
        }
    });
}

function clearForm(){
    form = document.querySelector("form");
    form.reset();
}


//when clicking add book button
addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

//when clicking save changes
saveChangesBtn.addEventListener("click", (e) =>{
    e.preventDefault(); //we prevent the default behavior of the submit button so we can get the form values
    
    if (bookStatus.value == "yes" || bookStatus.value == "no") {
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
        showBookInTable(myLibrary);
        clearForm();
        dialog.close();
    }else{
        console.log("please enter a valid value");
    }
});