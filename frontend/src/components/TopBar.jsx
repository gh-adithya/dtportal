import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  FormControlLabel,
  Switch,
  useTheme,
} from "@mui/material";

const TopBar = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const handleThemeToggle = () => setDarkMode(!darkMode);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: "240px" },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Digital Twin Portal
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleThemeToggle}
              color="secondary"
            />
          }
          label={darkMode ? "Dark Mode" : "Light Mode"}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
