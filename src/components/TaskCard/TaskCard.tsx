"use client";
import useGetTasks from "@/hooks/useGetTasks";
import { LocalStorageTaskRepository } from "@/services/TaskRepository/LocalStorageTaskRepository";
import { Card, Space } from "antd";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

const taskRepository = new LocalStorageTaskRepository();

const TaskCard = () => {
  const { tasks, mutate, isLoading } = useGetTasks();
  console.log("tasks", tasks);

  const handleCompleteTask = async (id: string, value: boolean) => {
    await taskRepository.markTaskAsCompleted(id, value);
    mutate();
  };
  const handleDeleteTask = async (id: string) => {
    await taskRepository.deleteTask(id);
    console.log("id", id);

    mutate();
  };
  const handleAddTask = async (description: string) => {
    taskRepository.addTask(description);
    mutate();
  };

  return (
    <Card title="Tareas" className="max-w-[600px] w-full" loading={isLoading}>
      <Space
        direction="vertical"
        size="large"
        style={{ display: "flex" }}
        className="mb-5"
      >
        {tasks?.map((task) => {
          return (
            <TaskItem
              key={task.id}
              isChecked={task.completed}
              label={task.description}
              onComplete={(value) => handleCompleteTask(task.id, value)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          );
        })}
      </Space>

      <AddTask onSubmit={handleAddTask} />
    </Card>
  );
};

export default TaskCard;
