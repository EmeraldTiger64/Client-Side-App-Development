// Queries the various parts of the HTML document and sets them to variables to be used by the JavaScript.
const taskInput = document.querySelector(".taskInput");
const taskButton = document.querySelector(".taskButton");
const tasksList = document.querySelector(".tasksList");
const tasksForm = document.querySelector(".tasksForm");

// Adds an event listener that is triggered when an item is submitted to the list.
tasksForm.addEventListener("submit", (event) => {
    // Prevents default submission of the form.
    event.preventDefault();

    // Grabs the text from the task input in the form.
    const taskText = taskInput.value;

    // Alerts the user if the task input is empty.
    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // Creates a new line and a checkbox for the new task.
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Adds the text of the task being inputted.
    const taskElement = document.createTextNode(" " + taskText + " ");

    // Creates a delete button for the task.
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Appends the various buttons and the text into a new task line, then appends the new task to the tasks list.
    newTask.appendChild(checkbox);
    newTask.appendChild(taskElement);
    newTask.appendChild(deleteButton);
    tasksList.appendChild(newTask);

    // Adds functionality to the delete button through an event listener.
    deleteButton.addEventListener("click", () => {
        newTask.remove();
    });

    // Blanks-out the task input field.
    inputTask.value = "";
});