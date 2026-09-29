function addNote() {
    let text = document.getElementById("note").value;

    if (text == "") {
        return alert("Enter a note");
    }

    let note = document.createElement("div");
    note.className = "note";

    note.innerHTML =
        "<span>" + text + "</span>" +
        '<button onclick="deleteNote(this)">Delete</button>' +
        '<button onclick="editNote(this)">Edit</button>';

    document.getElementById("notes").appendChild(note);
    document.getElementById("note").value = "";
}

function editNote(btn) {
    let span = btn.parentElement.querySelector("span");

    let text = prompt("Edit note:", span.textContent);

    if (text) {
        span.textContent = text;
    }
}

function deleteNote(btn) {
    btn.parentElement.remove();
}
