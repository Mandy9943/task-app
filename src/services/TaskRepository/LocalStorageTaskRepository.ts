import { Task } from "@/types/task.interface";

export class LocalStorageTaskRepository {
  private tasks: Task[];

  constructor() {
    const storedTasks = localStorage.getItem("tasks");
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];

    if (this.tasks.length === 0) {
      this.addTask("Comprar comida");
      this.addTask("Trabajar en lading page");
      this.addTask("Limpiar la ropa");
    }
  }

  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  async getAllTasks(): Promise<Task[]> {
    const allTasks = this.tasks;
    return allTasks;
  }

  addTask(description: string): Task {
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      completed: false,
    };

    this.tasks.push(newTask);
    this.saveTasks();

    return newTask;
  }

  markTaskAsCompleted(taskId: string, value: boolean): Task | undefined {
    const task = this.tasks.find((t) => t.id === taskId);

    if (task) {
      task.completed = value;
      this.saveTasks();
    }

    return task;
  }

  deleteTask(taskId: string): boolean {
    const taskIndex = this.tasks.findIndex((t) => t.id === taskId);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.saveTasks();
      return true;
    }

    return false;
  }
}
