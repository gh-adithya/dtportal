import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Person as ProfileIcon,
  Favorite as HeartIcon,
  TrendingUp as TrendIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Profile", icon: <ProfileIcon />, path: "/profile" },
    { text: "Heart Rate", icon: <HeartIcon />, path: "/heart-rate" },
    { text: "Trends", icon: <TrendIcon />, path: "/trends" },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component={Link}
          to={item.path}
          selected={location.pathname === item.path}
          onClick={handleDrawerToggle}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          <ListItemIcon sx={{ color: theme.palette.primary.main }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Digital Twin Portal
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
