import { renderTasks, addTask, deleteTask } from "./components/tasks.js";
import { renderNotes, addNote, deleteNote } from "./components/notes.js";

const taskList = document.getElementById("taskList");
const notesContainer = document.getElementById("notesContainer");

//buttons
window.deleteTask = (i) => deleteTask(i, taskList);
window.deleteNote = (i) => deleteNote(i, notesContainer);

//task
document.getElementById("addTaskBtn").addEventListener("click", () => {
    const text = document.getElementById("taskInput").value.trim();
    const date = document.getElementById("dateInput").value;

    addTask(text, date, taskList);

    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
});

//note
document.getElementById("addNoteBtn").addEventListener("click", () => {
    const title = document.getElementById("noteTitle").value.trim();
    const content = document.getElementById("noteContent").value.trim();

    addNote(title, content, notesContainer);

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
});

//theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});

//initial render
renderTasks(taskList);
renderNotes(notesContainer);