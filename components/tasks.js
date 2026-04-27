import { loadData, saveData } from "../data/storage.js";

let tasks = loadData("tasks");

export function renderTasks(list) {
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${task.text}</strong><br>
            <small>${task.date || "No date"}</small><br>
            <button onclick="deleteTask(${i})">Delete</button>
        `;
        list.appendChild(li);
    });
}

export function addTask(text, date, list) {
    if (!text) return;

    tasks.push({ text, date });
    saveData("tasks", tasks);
    renderTasks(list);
}

export function deleteTask(index, list) {
    tasks.splice(index, 1);
    saveData("tasks", tasks);
    renderTasks(list);
}