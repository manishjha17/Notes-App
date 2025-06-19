const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";

    // Reattach listeners to all loaded notes
    const notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
        const img = note.querySelector("img");

        // Delete on click
        img.addEventListener("click", () => {
            note.remove();
            updateStorage();
        });

        // Update storage on typing
        note.addEventListener("keyup", updateStorage);
    });
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";

    // Add delete and update listeners
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });

    inputBox.addEventListener("keyup", updateStorage);

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

// Initial load
showNotes();
