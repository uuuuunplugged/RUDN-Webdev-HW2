import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { Create, Description } from "@mui/icons-material";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import type { Task } from "../../types/Task";

const TaskCreate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { updateTasks } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const currentTasks = queryClient.getQueryData<Task[]>(["tasks"]) || [];
    
    const maxId = currentTasks.length > 0 
      ? Math.max(...currentTasks.map(t => t.id)) 
      : 0;
    
    const newTask: Task = {
      id: maxId + 1,
      title: title || "Без названия",
      description: description || "",
      createdAt: new Date(),
      status: 0
    };

    const updatedTasks = [...currentTasks, newTask];
    queryClient.setQueryData(["tasks"], updatedTasks);
    updateTasks(updatedTasks);
    navigate("/board");
  };

  return (
    <Box sx={{
      minHeight: "calc(100vh - 80px)",
      backgroundColor: "#ffffff",
      py: 6,
      px: 2
    }}>
      <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#ffffff"
          }}
        >
          <Box sx={{ mb: 4, pb: 2, borderBottom: "2px solid #000000" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Create sx={{ color: "#000000", fontSize: "28px" }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: "#000000"
                }}
              >
                Создание задачи
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#666666",
                fontSize: "12px",
                fontFamily: "'Georgia', serif",
                fontStyle: "italic"
              }}
            >
              {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric", weekday: "long" })}
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <Description sx={{ fontSize: "18px", color: "#666666" }} />
              <Typography variant="body2" sx={{ color: "#666666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Название задачи
              </Typography>
            </Box>
            <TextField
              name="title"
              placeholder="Введите название задачи"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <Description sx={{ fontSize: "18px", color: "#666666" }} />
              <Typography variant="body2" sx={{ color: "#666666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Описание
              </Typography>
            </Box>
            <TextField
              name="description"
              placeholder="Добавьте описание задачи (необязательно)"
              fullWidth
              multiline
              rows={6}
              variant="outlined"
            />
          </Box>
          <Button 
            type="submit" 
            variant="contained" 
            size="large"
            fullWidth
            sx={{
              py: 1.5,
              fontSize: "14px",
              fontWeight: 500
            }}
          >
            Создать задачу
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TaskCreate;
