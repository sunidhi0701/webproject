// Get references to the input and task list
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim(); // Trim to remove any extra spaces
  
  if (taskText !== "") {
    const li = document.createElement('li');
    
    // Create task text node
    const taskNode = document.createElement('span');
    taskNode.innerText = taskText;
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
      li.remove(); // Remove the task when the delete button is clicked
    };
    
    // Append task text and delete button to the list item
    li.appendChild(taskNode);
    li.appendChild(deleteButton);
    
    // Add the list item to the task list
    taskList.appendChild(li);
    
    // Clear the input field after adding the task
    taskInput.value = '';
  } else {
    alert("Please enter a task.");
  }
}
