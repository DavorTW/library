const myLibrary = [
    {
        title: "the hobbit",
        author: "JRR Tolkien",
        pages: "345",
        read: false,
    }
];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numOfPages = document.querySelector("#numOfPages");
const btn = document.querySelector(".add-book");
const dialog = document.querySelector(".dialog-modal");
const btnSubmit = document.querySelector(".submit");


function Book(title, author, numOfPages, read){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

function addBookToLibrary(title, author, numOfPages, read){
    myLibrary.push(new Book(title, author, numOfPages, read));
}

function createBookCard(){

}

btn.addEventListener("click", () => {
    dialog.showModal();
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const read = document.querySelector('input[name="status"]:checked').value;
    addBookToLibrary(title.value, author.value, numOfPages.value, read);
    dialog.close();
})


