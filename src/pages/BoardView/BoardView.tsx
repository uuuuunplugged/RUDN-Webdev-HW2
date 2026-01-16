import { Box, Typography } from "@mui/material";
import { Schedule, Work, CheckCircle } from "@mui/icons-material";
import { useTasks } from "../../hooks/useTasks";
import type { Task } from "../../types/Task";
import TaskCard from "../../components/TaskCard/TaskCard";

const BoardView = () => {
  const { data: tasks } = useTasks();

  const getTasksByStatus = (status: number) => {
    if (!tasks) return [];
    return tasks.filter((task: Task) => task.status === status);
  };

  const statusLabels = ["К выполнению", "В работе", "Выполнено"];

  return (
    <Box sx={{ 
      display: "flex", 
      gap: 0, 
      minHeight: "calc(100vh - 80px)",
      backgroundColor: "#ffffff",
      borderTop: "1px solid #e0e0e0"
    }}>
      {[0, 1, 2].map((status) => (
        <Box
          key={status} 
          sx={{ 
            flex: 1, 
            p: 4,
            minHeight: "calc(100vh - 80px)",
            borderRight: status < 2 ? "1px solid #e0e0e0" : "none",
            backgroundColor: "#ffffff"
          }}
        >
          <Box sx={{ mb: 3, pb: 2, borderBottom: "2px solid #000000" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {status === 0 && <Schedule sx={{ color: "#000000", fontSize: "18px" }} />}
              {status === 1 && <Work sx={{ color: "#000000", fontSize: "18px" }} />}
              {status === 2 && <CheckCircle sx={{ color: "#000000", fontSize: "18px" }} />}
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  color: "#000000",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}
              >
                {statusLabels[status]}
              </Typography>
            </Box>
            <Typography 
              variant="caption" 
              sx={{ 
                color: "#666666",
                fontSize: "11px",
                fontFamily: "'Georgia', serif",
                mt: 0.5,
                display: "block"
              }}
            >
              {getTasksByStatus(status).length} {getTasksByStatus(status).length === 1 ? "задача" : "задач"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {getTasksByStatus(status).map((task: Task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BoardView;
