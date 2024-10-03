import { TaskManager } from './taskManager.js';

const taskManager = new TaskManager();
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterCompleted = document.getElementById('filterCompleted');
const filterPending = document.getElementById('filterPending');
const showAll = document.getElementById('showAll');

// Function to render tasks in the DOM
const renderTasks = (tasks) => {
  taskList.innerHTML = ''; // Clear the task list before rendering
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.description} - ${task.isCompleted ? 'Completed' : 'Pending'}`; // Task description and status
    taskItem.addEventListener('click', () => {
      taskManager.toggleTaskCompletion(index); // Toggle task completion on click
      renderTasks(taskManager.getTasks()); // Re-render the tasks after toggling
    });
    taskList.appendChild(taskItem);
  });
};

// Event listener for adding tasks
addTaskBtn.addEventListener('click', () => {
  const taskDescription = taskInput.value;
  if (taskDescription) {
    taskManager.addTask(taskDescription); // Add task to task manager
    renderTasks(taskManager.getTasks()); // Re-render tasks after adding new task
    taskInput.value = ''; // Clear input field
  }
});

// Event listener for filtering completed tasks
filterCompleted.addEventListener('click', () => {
  const completedTasks = taskManager.filterTasks(true); // Get completed tasks
  renderTasks(completedTasks); // Render only completed tasks
});

// Event listener for filtering pending tasks
filterPending.addEventListener('click', () => {
  const pendingTasks = taskManager.filterTasks(false); // Get pending tasks
  renderTasks(pendingTasks); // Render only pending tasks
});

// Event listener to show all tasks
showAll.addEventListener('click', () => {
  renderTasks(taskManager.getTasks()); // Render all tasks
});
