import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemText, Typography, Toolbar, AppBar } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import AuditLog from "./pages/AuditLog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            RBAC Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      <Box display="flex" height="100vh">
        {/* Sidebar*/}
        {isAuthenticated && (
          <Box
            width="240px"
            bgcolor="#333"
            px={2}
            py={3}
            borderRight="1px solid #ddd"
            className="sidebar"
          >
            <Typography variant="h5" fontWeight="bold" mb={2} color="white">
              Dashboard
            </Typography>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary={<span style={{ color: "white" }}>Overview</span>} />
              </ListItem>
              <ListItem button component={Link} to="/users">
                <ListItemText primary={<span style={{ color: "white" }}>User Management</span>} />
              </ListItem>
              <ListItem button component={Link} to="/roles">
                <ListItemText primary={<span style={{ color: "white" }}>Role Management</span>} />
              </ListItem>
              <ListItem button component={Link} to="/audit-log">
                <ListItemText primary={<span style={{ color: "white" }}>Audit Log</span>} />
              </ListItem>
            </List>
          </Box>
        )}

      
        <Box flex={1} p={3}>
          <Routes>
            
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />

            
            {isAuthenticated ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/roles" element={<RoleManagement />} />
                <Route path="/audit-log" element={<AuditLog />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
