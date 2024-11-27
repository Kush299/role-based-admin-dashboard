import React, { useEffect, useState } from "react";
import { fetchRoles, updateRole } from "../mock/api";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Typography,
  Checkbox,
  TextField,
} from "@mui/material";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const togglePermission = (id, permission) => {
    const updatedRoles = roles.map((role) =>
      role.id === id
        ? {
            ...role,
            permissions: role.permissions.includes(permission)
              ? role.permissions.filter((perm) => perm !== permission)
              : [...role.permissions, permission],
          }
        : role
    );
    setRoles(updatedRoles);
    updateRole(updatedRoles.find((r) => r.id === id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.permissions.some((perm) =>
        perm.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <Box>
      <Typography variant="h4" mb={3} color="white">
        Role Management
      </Typography>
      <Box mb={3}>
        <TextField
          label="Search Roles"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          fullWidth
          style={{ marginBottom: "20px" }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Permissions</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRoles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>
                  {["Read", "Write", "Delete"].map((perm) => (
                    <Box key={perm} display="inline-block" mr={2}>
                      <Checkbox
                        checked={role.permissions.includes(perm)}
                        onChange={() => togglePermission(role.id, perm)}
                      />
                      {perm}
                    </Box>
                  ))}
                </TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => console.log("Edit Role")}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RoleManagement;
