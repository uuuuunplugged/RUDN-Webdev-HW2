import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "../api/taskService";
import type { Task } from "../types/Task";

export const useTasks = () => {
  const queryClient = useQueryClient();

  const query = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks
  });

  const updateTasks = (tasks: Task[]) => {
    queryClient.setQueryData(["tasks"], tasks);
  };

  return {
    ...query,
    updateTasks
  };
};
