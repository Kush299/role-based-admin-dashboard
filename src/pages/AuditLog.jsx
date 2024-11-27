import React from "react";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const mockAuditLog = [
  { id: 1, action: "Created Role: Admin", timestamp: "2024-11-25 10:00"},
  { id: 2, action: "Updated Permissions for Role: Editor", timestamp: "2024-11-25 12:00" },
  { id: 3, action: "Deactivated User: John Doe", timestamp: "2024-11-25 14:00" },
];

const AuditLog = () => {
  return (
    <Box>
      <Typography variant="h4" mb={4} color="white">
        Audit Log
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockAuditLog.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.action}</TableCell>
              <TableCell>{log.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AuditLog;
