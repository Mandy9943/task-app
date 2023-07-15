import useGetTasks from "@/hooks/useGetTasks";
import { LocalStorageTaskRepository } from "@/services/TaskRepository/LocalStorageTaskRepository";
import { Card } from "antd";
import TaskItem from "./TaskItem";

const taskRepository = new LocalStorageTaskRepository();

const TaskCard = () => {
  const { tasks } = useGetTasks();

  const handleCompleteTask = (id: string, value: boolean) => {
    taskRepository.markTaskAsCompleted(id, value);
  };
  const handleDeleteTask = (id: string) => {
    taskRepository.deleteTask(id);
  };

  console.log("tasks", tasks);

  return (
    <Card title="Tareas" className="min-w-[400px]">
      <TaskItem
        isChecked={false}
        label="Comprar comida"
        onComplete={() => handleCompleteTask("", true)}
        onDelete={() => handleDeleteTask("")}
      />
    </Card>
  );
};

export default TaskCard;
