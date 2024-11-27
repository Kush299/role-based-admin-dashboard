import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchUsers, updateUser } from "../mock/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]); 
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", role: "", status: "Active" });


  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setFilteredUsers(data); 
    });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  const handleOpen = (user = { name: "", role: "", status: "Active" }) => {
    setCurrentUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentUser({ name: "", role: "", status: "Active" });
  };

  const handleSave = () => {
    if (currentUser.id) {
      setUsers(users.map((u) => (u.id === currentUser.id ? currentUser : u)));
    } else {
      const newUser = { ...currentUser, id: Date.now() };
      setUsers([...users, newUser]);
    }
    updateUser(currentUser);
    handleClose();
  };

  return (
    <Box>
      <Typography variant="h4" mb={3} color="white">
        User Management
      </Typography>

      {/* Search Input */}
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      {/*User Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        style={{ marginBottom: "20px" }}
      >
        Add User
      </Button>

      {/* User Table */}
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Role</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Box
                    component="span"
                    bgcolor={user.status === "Active" ? "green" : "red"}
                    color="white"
                    px={2}
                    py={0.5}
                    borderRadius="8px"
                  >
                    {user.status}
                  </Box>
                </TableCell>
                <TableCell>
                  <Button variant="text" onClick={() => handleOpen(user)}>
                    Edit
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() =>
                      setUsers(users.filter((u) => u.id !== user.id))
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentUser.id ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={currentUser.name}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, name: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Role"
            value={currentUser.role}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, role: e.target.value })
            }
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;
