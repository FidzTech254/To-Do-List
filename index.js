
 // Getting elements from the HTML page
const formInput = document.querySelector("#formInput");
const inputTask = document.querySelector("#inputTask");
const addTask = document.querySelector("#addTask");
const taskContainer = document.querySelector("#taskContainer");
const taskList = document.querySelector("#taskList");

// Retrieving stored tasks
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Adding a task0
formInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = inputTask.value.trim();

    if (task === "") {
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    inputTask.value = "";
    displayTasks();
});

// Displaying tasks
const displayTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const list = document.createElement("li");
        list.textContent = task + " ";

        // Creating a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Deleting a task
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        });
        taskList.textContent=task;

        list.appendChild(deleteBtn);
        taskList.appendChild(list);
    });
};

// Display saved tasks when the page loads
displayTasks();


