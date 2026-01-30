import { createTheme } from "@mui/material/styles";

// src/theme/colors.ts

export const color = {
  // 🔥 Brand / Primary
  primary: {
    main: "#eb5a25", // orange-600
    light: "#f3a588",
    dark: "#581f0a",
    contrastText: "#dee112",
  },

  // 🎨 Secondary
  secondary: {
    main: "#9333ea", // purple-600
    light: "#c084fc",
    dark: "#6b21a8",
    contrastText: "#ffffff",
  },

  // ✅ Status colors
  success: {
    main: "#16a34a",
    light: "#4ade80",
    dark: "#166534",
    contrastText: "#ffffff",
  },

  warning: {
    main: "#f59e0b",
    light: "#fde68a",
    dark: "#92400e",
    contrastText: "#000000",
  },

  error: {
    main: "#dc2626",
    light: "#fca5a5",
    dark: "#7f1d1d",
    contrastText: "#ffffff",
  },

  // 🧠 Neutral / Greys (VERY IMPORTANT)
  grey: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5f5",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },

  // 🖥 Backgrounds
  background: {
    default: "#f8fafc",
    paper: "#ffffff",
    subtle: "#f1f5f9",
  },

  // ✍ Text
  text: {
    primary: "#0f172a",
    secondary: "#475569",
    disabled: "#94a3b8",
    inverse: "#ffffff",
  },

  // 🧱 Borders & dividers
  border: {
    light: "#e2e8f0",
    main: "#cbd5e1",
    dark: "#94a3b8",
  },

  // 🌫 Overlays / shadows helpers
  overlay: {
    light: "rgba(15, 23, 42, 0.04)",
    medium: "rgba(15, 23, 42, 0.08)",
    heavy: "rgba(15, 23, 42, 0.16)",
  },
};

export const theme = createTheme({
  spacing: 8,

  shape: {
    borderRadius: 10,
  },

  palette: {
    mode: "light",

    primary: {
      main: color.primary.main,
      light: color.primary.light,
      dark: color.primary.dark,
      contrastText: color.primary.contrastText,
    },

    secondary: {
      main: color.secondary.main,
      light: color.secondary.light,
      dark: color.secondary.dark,
      contrastText: color.secondary.contrastText,
    },

    success: {
      main: color.success.main,
    },

    warning: {
      main: color.warning.main,
    },

    error: {
      main: color.error.main,
    },

    background: {
      default: color.background.default,
      paper: color.background.paper,
    },

    text: {
      primary: color.text.primary,
      secondary: color.text.secondary,
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 16px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow:
            "0px 1px 3px rgba(0,0,0,0.08), 0px 1px 2px rgba(0,0,0,0.04)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: color.background.paper,
          color: color.text.primary,
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: color.background.subtle,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "0.75rem",
          borderRadius: 6,
        },
      },
    },
  },
});
