export const fetchUsers = async () => [
    { id: 1, name: "Kush", role: "Admin", status: "Active" },
    { id: 2, name: "Ruchi", role: "Editor", status: "Inactive" },
  ];
  
  export const fetchRoles = async () => [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  
  export const updateUser = async (user) => {
    console.log("User updated:", user);
  };
  
  export const updateRole = async (role) => {
    console.log("Role updated:", role);
  };
  