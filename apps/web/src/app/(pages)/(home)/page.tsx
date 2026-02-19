'use client';

import { Container, Typography, Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" gutterBottom>
          Studio
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Next.js + MUI is running.
        </Typography>
        <Button variant="contained">Let’s build</Button>
      </Box>
    </Container>
  );
}
