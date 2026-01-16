import { AppBar, Toolbar, Typography, Button, IconButton, Divider } from "@mui/material";
import { Assignment, List, Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        mb: 0,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0"
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 4 }, py: 2 }}>
        <IconButton 
          edge="start" 
          sx={{ 
            mr: 2,
            color: "#000000",
            "&:hover": { backgroundColor: "#f5f5f5" }
          }}
        >
          <Assignment />
        </IconButton>
        <Typography 
          variant="h6" 
          sx={{ 
            flexGrow: 1,
            color: "#000000",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "0.5px"
          }}
        >
          Доска задач
        </Typography>
        <Button 
          variant="text"
          startIcon={<List />}
          onClick={() => navigate("/board")}
          sx={{
            color: "#000000",
            mr: 1,
            "&:hover": { backgroundColor: "#f5f5f5" }
          }}
        >
          Задачи
        </Button>
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
        <Button 
          variant="outlined"
          startIcon={<Add />}
          onClick={() => navigate("/create")}
          sx={{
            color: "#000000",
            borderColor: "#000000",
            "&:hover": { 
              borderColor: "#000000",
              backgroundColor: "#f5f5f5"
            }
          }}
        >
          Создать
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
