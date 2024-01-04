// Function to update the time and date
function updateDateTime() {
    const dateTimeElement = document.getElementById("dateTime");
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const currentDateTime = new Date().toLocaleString('en-US', options);

    dateTimeElement.textContent = currentDateTime;
}

// Call the function initially to set the initial time and date
updateDateTime();

// Update the time and date every second
setInterval(updateDateTime, 1000);

// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to create a Lordicon with specified src and click handler
function createLordicon(src, clickHandler) {
    const lordicon = document.createElement("lord-icon");
    lordicon.setAttribute("src", src);
    lordicon.setAttribute("trigger", "hover");
    lordicon.style.width = "24px";
    lordicon.style.height = "24px";
    lordicon.style.cursor = "pointer";
    lordicon.onclick = clickHandler;

    return lordicon;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Define a character limit for task text
    const characterLimit = 30;

    if (taskText !== "") {
        // Truncate the task text if it exceeds the character limit
        const truncatedText = taskText.length > characterLimit
            ? taskText.substring(0, characterLimit) + "..."
            : taskText;

        // Create a new list item
        const listItem = document.createElement("li");

        // Create a span element for the truncated task text
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = truncatedText;

        // Create a Lordicon for deleting tasks
        const deleteLordicon = createLordicon("https://cdn.lordicon.com/lomfljuq.json", deleteTask);

        // Append elements to the list item with adjusted spacing
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(deleteLordicon);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to toggle the completion of a task
function completeTask() {
    const listItem = this.parentNode;
    listItem.classList.toggle("completed");
}

// Function to delete a task
function deleteTask() {
    const listItem = this.parentNode;
    taskList.removeChild(listItem);
}

// Event listener for adding a task when the button is clicked
document.querySelector("button").addEventListener("click", addTask);

// Event listener for adding a task when Enter is pressed in the input field
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
