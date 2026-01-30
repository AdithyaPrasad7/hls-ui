import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
