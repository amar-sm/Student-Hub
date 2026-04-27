import { loadData, saveData } from "../data/storage.js";

let notes = loadData("notes");

export function renderNotes(container) {
    container.innerHTML = "";

    notes.forEach((note, i) => {
        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <h4>${note.title}</h4>
            <p>${note.content}</p>
            <button onclick="deleteNote(${i})">Delete</button>
        `;
        container.appendChild(div);
    });
}

export function addNote(title, content, container) {
    if (!title || !content) return;

    notes.push({ title, content });
    saveData("notes", notes);
    renderNotes(container);
}

export function deleteNote(index, container) {
    notes.splice(index, 1);
    saveData("notes", notes);
    renderNotes(container);
}