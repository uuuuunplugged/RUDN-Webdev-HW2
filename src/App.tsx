import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./theme/theme";
import Header from "./components/Header/Header";
import BoardView from "./pages/BoardView/BoardView";
import TaskCreate from "./pages/TaskCreate/TaskCreate";
import TaskDetails from "./pages/TaskDetails/TaskDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/board" replace />} />
            <Route path="/board" element={<BoardView />} />
            <Route path="/create" element={<TaskCreate />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
