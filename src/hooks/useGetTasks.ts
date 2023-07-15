import { LocalStorageTaskRepository } from "@/services/TaskRepository/LocalStorageTaskRepository";

import useSwr from "swr";

const repository = new LocalStorageTaskRepository();

const useGetTasks = () => {
  const { data, isLoading, error } = useSwr("localstorage:tasks", () =>
    repository.getAllTasks()
  );

  return {
    tasks: data,
    isLoading: isLoading,
    error: error,
  };
};

export default useGetTasks;
