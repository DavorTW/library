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



//show the book info inside the table
function showBookInfoInTable(myLibrary){
    tbody.textContent = ""; //we clear the body so we don't have duplicates
    myLibrary.forEach((book, index)  => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        for (const key in book) {

            if (book[key] === "yes") {
                const td = removeBookBtn("yes", "Read", "read");
                tr.appendChild(td);
            }else if (book[key] === "no") {
                const td = removeBookBtn("no", "Read", "no-read");
                tr.appendChild(td);
            }else{
                const td = document.createElement("td");
                td.textContent = book[key];
                tr.appendChild(td);
            }
        }
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