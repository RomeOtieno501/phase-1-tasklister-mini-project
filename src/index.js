document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

// Listening to submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Get the value of the input field
  const taskInput = document.getElementById('new-task-description').value;

  // new lis element
  const newTask = document.createElement('li');
  newTask.textContent = taskInput;

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Ondoa';
  
  // When button is clicked
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(newTask);
  });

  // Add the delete button to the end of the element
  newTask.appendChild(deleteButton);

  // Append the new list element to the existing element
  taskList.appendChild(newTask);

  // Clear the input field
  document.getElementById('new-task-description').value = '';
});

});
