import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import HeartRate from "./pages/HeartRate";
import Trends from "./pages/Trends";
import TopBar from "./components/TopBar";

function App({ darkMode, setDarkMode }) {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
          }}
        >
          <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Toolbar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/heart-rate" element={<HeartRate />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
