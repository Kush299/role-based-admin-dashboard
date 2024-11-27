import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" mb={4} color="white">
        Overview
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Card style={{ flex: 1, margin: "10px" }}>
          <CardContent>
            <Typography variant="h5">Total Users</Typography>
            <Typography variant="h3" color="primary">
              2
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ flex: 1, margin: "10px" }}>
          <CardContent>
            <Typography variant="h5">Active Roles</Typography>
            <Typography variant="h3" color="primary">
              1
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ flex: 1, margin: "10px" }}>
          <CardContent>
            <Typography variant="h5">Inactive Users</Typography>
            <Typography variant="h3" color="primary">
              1
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
