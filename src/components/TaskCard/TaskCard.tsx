import { Card, CardContent, Typography, Box } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import type { Task } from "../../types/Task";
import { useNavigate } from "react-router-dom";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      elevation={0}
      sx={{ 
        cursor: "pointer", 
        transition: "all 0.2s ease",
        backgroundColor: "#ffffff",
        border: "none",
        borderBottom: "1px solid #e0e0e0",
        "&:hover": { 
          backgroundColor: "#fafafa"
        },
        "&:last-child": {
          borderBottom: "none"
        }
      }}
      onClick={() => navigate(`/task/${task.id}`)}
    >
      <CardContent sx={{ py: 2.5, px: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "#666666",
              fontSize: "11px",
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.5px",
              textTransform: "uppercase"
            }}
          >
            Задача #{task.id}
          </Typography>
          <ArrowForwardIos sx={{ fontSize: "12px", color: "#999999" }} />
        </Box>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 400,
            color: "#000000",
            fontSize: "17px",
            lineHeight: 1.6,
            fontFamily: "'Georgia', serif",
            mb: 1
          }}
        >
          {task.title}
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            color: "#999999",
            fontSize: "12px",
            fontFamily: "'Georgia', serif",
            fontStyle: "italic"
          }}
        >
          {task.createdAt.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
