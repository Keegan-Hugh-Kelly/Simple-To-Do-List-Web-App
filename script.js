// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");

        // Create a span element for the task text
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;

        // Create buttons for completing and deleting tasks
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = completeTask;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = deleteTask;

        // Append elements to the list item
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to mark a task as complete
function completeTask() {
    const listItem = this.parentNode;
    listItem.classList.toggle("completed");
}

// Function to delete a task
function deleteTask() {
    const listItem = this.parentNode;
    taskList.removeChild(listItem);
}
