// task.js

export class Task {
    constructor(description) {
      this.description = description;
      this.isCompleted = false;
    }
  
    toggleCompletion() {
      this.isCompleted = !this.isCompleted;
    }
  }
  