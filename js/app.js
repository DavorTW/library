const myLibrary = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numOfPages = document.querySelector("#numOfPages");



function Book(title, author, numOfPages, read){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

const btn = document.querySelector(".add-book");
const dialog = document.querySelector(".dialog-modal");
const btnSubmit = document.querySelector(".submit");

btn.addEventListener("click", () => {
    dialog.showModal();
});

function addBookToLibrary(title, author, numOfPages, read){
    myLibrary.push(new Book(title, author, numOfPages, read));
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const read = document.querySelector('input[name="status"]:checked').value;
    addBookToLibrary(title.value, author.value, numOfPages.value, read);
    dialog.close();
    console.log(myLibrary);
})


