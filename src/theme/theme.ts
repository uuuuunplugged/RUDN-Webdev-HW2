import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
    },
    secondary: {
      main: "#666666",
      light: "#999999",
      dark: "#333333",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    h1: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: 1.2,
      letterSpacing: "-0.5px",
    },
    h2: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      fontSize: "28px",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: "'Georgia', serif",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: 1.5,
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    body1: {
      fontFamily: "'Georgia', serif",
      fontSize: "17px",
      lineHeight: 1.6,
      color: "#000000",
    },
    body2: {
      fontFamily: "'Georgia', serif",
      fontSize: "14px",
      lineHeight: 1.5,
      color: "#666666",
    },
    button: {
      fontFamily: "'Georgia', serif",
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "10px 24px",
          fontSize: "14px",
        },
        contained: {
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#333333",
          },
        },
        outlined: {
          borderColor: "#000000",
          color: "#000000",
          borderWidth: "1px",
          "&:hover": {
            borderColor: "#000000",
            backgroundColor: "#f5f5f5",
            borderWidth: "1px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "& fieldset": {
              borderColor: "#cccccc",
            },
            "&:hover fieldset": {
              borderColor: "#000000",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000000",
              borderWidth: "1px",
            },
          },
        },
      },
    },
  },
});
