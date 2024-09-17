const myLibrary = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numOfPages = document.querySelector("#numOfPages");
const btn = document.querySelector(".add-book");
const dialog = document.querySelector(".dialog-modal");
const btnSubmit = document.querySelector(".submit");
const tbody = document.querySelector("tbody");



function Book(title, author, numOfPages, read){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

function addBookToLibrary(title, author, numOfPages, read){
    myLibrary.push(new Book(title, author, numOfPages, read));
}



function showBookInTable(libraryArray){
    tbody.textContent = "";
    libraryArray.forEach(book => {
        const tr = document.createElement("tr");
        console.log("tr created")
        tbody.appendChild(tr);
        for(let value in book){
            const td = document.createElement("td");
            td.textContent = book[value];
            tr.appendChild(td);
        }
    });
}


btn.addEventListener("click", () => {
    dialog.showModal();
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const read = document.querySelector('input[name="status"]:checked').value;
    addBookToLibrary(title.value, author.value, numOfPages.value, read);
    showBookInTable(myLibrary);
    dialog.close();
})


