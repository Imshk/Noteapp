document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector("#toggleSwitch");

    toggleSwitch.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode");
    });
});

const addTitle = document.getElementById("addTitle");
const addText = document.getElementById("addText");
const addNoteButton = document.getElementById("addNote");
const notes = document.getElementById("notes");

addNoteButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    const noteText = addText.value.trim(); 
    const titleText = addTitle.value.trim(); 
    
    if (noteText !== "") {
        // Create a new note element
        const noteItem = document.createElement("div");
        noteItem.className = "note";
        noteItem.innerHTML = `
            <h3>${titleText}</h3>
            <p>${noteText}</p>
            <button class="deleteBtn">Delete</button>
        `;

        
        // Append the note to the list of notes
        notes.appendChild(noteItem);

        // Add delete button functionality
        const deleteButton = noteItem.querySelector(".deleteBtn");
        deleteButton.addEventListener("click", function () {
            notes.removeChild(noteItem);
        });


        // Clear the input
        addText.value = "";
        addTitle.value = "";
    }
});
