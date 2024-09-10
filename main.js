// main.js
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
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.description} - ${task.isCompleted ? 'Completed' : 'Pending'}`;
    taskItem.addEventListener('click', () => {
      taskManager.toggleTaskCompletion(index);
      renderTasks(taskManager.getTasks());
    });
    taskList.appendChild(taskItem);
  });
};

// Event listener for adding tasks
addTaskBtn.addEventListener('click', () => {
  const taskDescription = taskInput.value;
  if (taskDescription) {
    taskManager.addTask(taskDescription);
    renderTasks(taskManager.getTasks());
    taskInput.value = ''; // Clear input
  }
});

// Event listeners for filtering tasks
filterCompleted.addEventListener('click', () => {
  const completedTasks = taskManager.filterTasks(true);
  renderTasks(completedTasks);
});

filterPending.addEventListener('click', () => {
  const pendingTasks = taskManager.filterTasks(false);
  renderTasks(pendingTasks);
});

showAll.addEventListener('click', () => {
  renderTasks(taskManager.getTasks());
});
