"use client";

import { Box, Typography } from "@mui/material";

import { useAdminSession } from "@/hooks/server/admin/useAdminSession";

export default function AdminPage() {
  const { admin, isAuthenticated, isLoading } = useAdminSession();

  if (isLoading) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Checking session...</Typography>
      </Box>
    );
  }

  if (!isAuthenticated || !admin) {
    return <div>LOGIN FORM HERE</div>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Welcome {admin.email}</Typography>
    </Box>
  );
}
