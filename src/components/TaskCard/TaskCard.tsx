"use client";
import useGetTasks from "@/hooks/useGetTasks";
import { LocalStorageTaskRepository } from "@/services/TaskRepository/LocalStorageTaskRepository";
import { Card, Space } from "antd";
import TaskItem from "./TaskItem";

const taskRepository = new LocalStorageTaskRepository();

const TaskCard = () => {
  const { tasks, mutate } = useGetTasks();
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

  return (
    <Card title="Tareas" className="min-w-[400px]">
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
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
    </Card>
  );
};

export default TaskCard;
