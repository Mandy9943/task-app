import { Task } from "@/types/task.interface";
import { v4 as uuidv4 } from "uuid";

export class LocalStorageTaskRepository {
  constructor() {
    const initialTask = this.fetchTasks();
    if (initialTask.length === 0) {
      this.addTask("Comprar comida");
      this.addTask("Trabajar en lading page");
      this.addTask("Limpiar la ropa");
    }
  }

  private saveTasks(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  private fetchTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks");

    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  async getAllTasks(): Promise<Task[]> {
    const allTasks = this.fetchTasks();
    return allTasks;
  }

  async addTask(description: string): Promise<Task> {
    const newTask: Task = {
      id: uuidv4(),
      description,
      completed: false,
    };
    const allTasks = this.fetchTasks();
    const updatedTasks = [...allTasks, newTask];

    this.saveTasks(updatedTasks);

    return newTask;
  }

  async markTaskAsCompleted(
    taskId: string,
    value: boolean
  ): Promise<Task | undefined> {
    const allTasks = this.fetchTasks();

    const taskIndex = allTasks.findIndex((t) => t.id === taskId);

    if (taskIndex !== -1) {
      allTasks[taskIndex].completed = value;
      this.saveTasks(allTasks);
      return allTasks[taskIndex];
    }

    return undefined;
  }

  async deleteTask(taskId: string): Promise<boolean> {
    const allTasks = this.fetchTasks();

    try {
      const updatedTasks = allTasks.filter((t) => t.id !== taskId);
      this.saveTasks(updatedTasks);

      return true;
    } catch (error) {
      return false;
    }
  }
}
