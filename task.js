// task.js

// Class to represent a single task
export class Task {
  constructor(description) {
    this.description = description; // Description of the task
    this.isCompleted = false; // Task starts as not completed
  }

  // Method to toggle the completion status of the task
  toggleCompletion() {
    this.isCompleted = !this.isCompleted;
  }
}
