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

function clearTable(){
    tbody.textContent = "";
}


function createRmBtn(index){
    const td = document.createElement("td");
    const rmBtn = document.createElement("button");
    rmBtn.textContent = "remove";
    rmBtn.id = index;
    rmBtn.classList.add("remove");
    td.appendChild(rmBtn);
    return td;
}

function removeBook(){
    const rmBtn = document.querySelectorAll(".remove");
    for (let i = 0; i < rmBtn.length; i++) {
        rmBtn[i].addEventListener("click", () => {
            const index = rmBtn[i].id;
            myLibrary.splice(index,1);

            const row = rmBtn[i].parentElement.parentElement;
            row.remove();
        });
    }
}

function createReadButton(className){
    const td = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "read";
    button.classList.add(className);
    td.appendChild(button);
    return td;
}


function showBookInTable(libraryArray){
    clearTable();
    libraryArray.forEach( (book,index) => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
        for(let value in book){
            if (book[value] === 'read') {
               const td = createReadButton("read");
               tr.appendChild(td);
            }
            else if (book[value] === 'noRead') {
                const td =createReadButton("no-read");
                tr.appendChild(td);
                book[value] = 'read';     
            }else{
                const td = document.createElement("td");
                td.textContent = book[value];
                tr.appendChild(td);
            }
        }
        tr.appendChild(createRmBtn(index));
    });
}

function clearModal(){
    title.value = "";
    author.value = "";
    numOfPages.value = "";
}


btn.addEventListener("click", () => {
    dialog.showModal();
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const read = document.querySelector('input[name="status"]:checked').value;
    addBookToLibrary(title.value, author.value, numOfPages.value, read);
    showBookInTable(myLibrary);
    removeBook();
    clearModal();
    dialog.close();
})


