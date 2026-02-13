const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    // Performance: Event delegation or direct listeners
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
});