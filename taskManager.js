// taskManager.js
import { Task } from './task.js';

export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  toggleTaskCompletion(index) {
    this.tasks[index].toggleCompletion();
  }

  getTasks() {
    return this.tasks;
  }

  filterTasks(completed = null) {
    if (completed === null) {
      return this.tasks;
    }
    return this.tasks.filter(task => task.isCompleted === completed);
  }
}
