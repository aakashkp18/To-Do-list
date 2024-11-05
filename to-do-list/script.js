// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task element
function createTaskElement(taskText) {
  const li = document.createElement('li');

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(taskTextSpan);
  li.appendChild(deleteBtn);
  return li;
}

// Event listener for adding a new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = ''; // Clear input field
  } else {
    alert("Please enter a task.");
  }
});

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTaskBtn.click();
  }
});
