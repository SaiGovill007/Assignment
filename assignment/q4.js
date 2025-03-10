function addTask() {
    // Get the input value
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();

    // Check if input is empty
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    let li = document.createElement('li');
    li.innerText = task;

    // Create a remove button
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.onclick = function () {
        this.parentElement.remove();
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    let taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
}
