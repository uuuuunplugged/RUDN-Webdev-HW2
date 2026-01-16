import axios from "axios";
import type { Task } from "../types/Task";

export const loadTasks = async (): Promise<Task[]> => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  
  return response.data.slice(0, 12).map((item: any) => ({
    id: item.id,
    title: item.title,
    description: "",
    createdAt: new Date(),
    status: item.completed ? 2 : 0
  }));
};

export const fetchTasks = loadTasks;
