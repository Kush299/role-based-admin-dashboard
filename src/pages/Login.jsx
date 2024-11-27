import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (username === "admin" && password === "password123") {
      onLogin(); 
      navigate("/"); 
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
      <Box width="350px" p={4} bgcolor="#f5f5f5" borderRadius="10px">
        <Typography variant="h5" mb={3}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username (admin)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password (password123)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit"  variant="contained" color="primary" fullWidth>
            Login
            
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
