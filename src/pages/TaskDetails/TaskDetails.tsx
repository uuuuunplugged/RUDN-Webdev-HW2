import { Box, Button, Typography, Container, Stack, Divider } from "@mui/material";
import { Article, Schedule, Work, CheckCircle, Delete } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useTasks } from "../../hooks/useTasks";
import type { Task } from "../../types/Task";

const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { updateTasks } = useTasks();

  const statusIcons: { [key: number]: React.ReactElement } = {
    0: <Schedule />,
    1: <Work />,
    2: <CheckCircle />
  };

  const tasks = queryClient.getQueryData<Task[]>(["tasks"]) || [];
  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return (
      <Container>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Задача не найдена
        </Typography>
      </Container>
    );
  }

  const updateStatus = (newStatus: number) => {
    const updatedTasks = tasks.map(t => 
      t.id === task.id ? { ...t, status: newStatus } : t
    );
    queryClient.setQueryData(["tasks"], updatedTasks);
    updateTasks(updatedTasks);
  };

  const handleDelete = () => {
    const filteredTasks = tasks.filter(t => t.id !== task.id);
    queryClient.setQueryData(["tasks"], filteredTasks);
    updateTasks(filteredTasks);
    navigate("/board");
  };

  const statusNames = ["К выполнению", "В работе", "Выполнено"];

  return (
    <Box sx={{
      minHeight: "calc(100vh - 80px)",
      backgroundColor: "#ffffff",
      py: 6,
      px: 2
    }}>
      <Container maxWidth="md">
        <Box sx={{ 
          backgroundColor: "#ffffff",
          borderTop: "2px solid #000000",
          pt: 3
        }}>
          <Box sx={{ mb: 4, pb: 2, borderBottom: "1px solid #e0e0e0" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Article sx={{ color: "#000000", fontSize: "28px" }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  color: "#000000"
                }}
              >
                Детали задачи
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
              {task.createdAt.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric", weekday: "long" })}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 5 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#666666", 
                mb: 1,
                fontSize: "12px",
                letterSpacing: "0.5px",
                textTransform: "uppercase"
              }}
            >
              Номер
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                fontSize: "17px",
                color: "#000000"
              }}
            >
              #{task.id}
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#666666", 
                mb: 1,
                fontSize: "12px",
                letterSpacing: "0.5px",
                textTransform: "uppercase"
              }}
            >
              Название
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                fontSize: "17px",
                color: "#000000",
                fontWeight: 500
              }}
            >
              {task.title}
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#666666", 
                mb: 1,
                fontSize: "12px",
                letterSpacing: "0.5px",
                textTransform: "uppercase"
              }}
            >
              Описание
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                fontSize: "17px", 
                color: "#333333",
                lineHeight: 1.7
              }}
            >
              {task.description || "Нет описания"}
            </Typography>
            
            <Typography variant="body2" sx={{ color: "#666666", mb: 1, fontSize: "12px" }}>
              Дата создания: {task.createdAt.toLocaleDateString()}
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#666666", 
                mb: 1,
                fontSize: "12px",
                letterSpacing: "0.5px",
                textTransform: "uppercase"
              }}
            >
              Статус
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ color: "#000000", fontSize: "20px" }}>
                {statusIcons[task.status]}
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: "17px",
                  color: "#000000",
                  fontWeight: 500
                }}
              >
                {statusNames[task.status]}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />
          <Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#666666",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                mb: 2
              }}
            >
              Действия
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
              <Button 
                variant={task.status === 0 ? "contained" : "outlined"}
                startIcon={statusIcons[0]}
                onClick={() => updateStatus(0)}
                disabled={task.status === 0}
              >
                К выполнению
              </Button>
              <Button 
                variant={task.status === 1 ? "contained" : "outlined"}
                startIcon={statusIcons[1]}
                onClick={() => updateStatus(1)}
                disabled={task.status === 1}
              >
                В работу
              </Button>
              <Button 
                variant={task.status === 2 ? "contained" : "outlined"}
                startIcon={statusIcons[2]}
                onClick={() => updateStatus(2)}
                disabled={task.status === 2}
              >
                Выполнено
              </Button>
            </Stack>

            <Button 
              variant="outlined" 
              startIcon={<Delete />}
              onClick={handleDelete}
              sx={{
                borderColor: "#666666",
                color: "#666666",
                "&:hover": {
                  borderColor: "#000000",
                  color: "#000000",
                  backgroundColor: "#f5f5f5"
                }
              }}
            >
              Удалить задачу
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TaskDetails;
