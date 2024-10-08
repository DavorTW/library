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

Book.prototype.toggleStatus = function(){
    this.status = (this.status === "yes") ? "no" : "yes";
}

//push new Book object to the library
function addBookToLibrary(title, author, pages, status){
    myLibrary.push(new Book(title, author, pages, status));
}

//create a button to remove the book
function removeBookBtn(id, textCnt, class1){
    const rmvBtn = document.createElement("button");
    const td = document.createElement("td");
    rmvBtn.textContent = textCnt;
    rmvBtn.classList.add(class1);
    rmvBtn.id = id;
    td.appendChild(rmvBtn);
    return td;
}

//remove book logic
function removeBook(index){
    myLibrary.splice(index, 1);
    showBookInfoInTable(myLibrary);
}

//create button to toggle status
function toggleStatusBtn(book){
    const statusBtn = document.createElement("button");
    const td = document.createElement("td");
    statusBtn.textContent = "read";
    statusBtn.classList.add((book.status === "yes") ? "read" : "no-read");

    statusBtn.addEventListener("click", () => {
        book.toggleStatus();
        showBookInfoInTable(myLibrary);
    });

    td.appendChild(statusBtn);
    return td;
}


//show the book info inside the table
function showBookInfoInTable(myLibrary){
    tbody.textContent = ""; //we clear the body so we don't have duplicates
    myLibrary.forEach((book, index)  => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        for (const key in book) {
            if (book.hasOwnProperty(key) && key !== "status") {
                const td = document.createElement("td");
                td.textContent = book[key];
                tr.appendChild(td);
            }
        }
       
        const statusBtnTd = toggleStatusBtn(book);
        tr.appendChild(statusBtnTd);

        const td = removeBookBtn(index, "Delete", "delete");
        tr.appendChild(td);
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
        showBookInfoInTable(myLibrary);
        clearForm();
        dialog.close();
    }else{
        console.log("please enter a valid value");
    }
});

//using event delegation to delete the book
tbody.addEventListener("click", (e)=> {
    if (e.target.classList.contains("delete")) {
        const id = Number(e.target.id);
        removeBook(id);
    }
});