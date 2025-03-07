import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

export default function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <ErrorOutline sx={{ fontSize: 64, color: 'error.main' }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Oops! Something went wrong
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {error?.message || 'An unexpected error occurred'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.href = '/'}
        >
          Return to Dashboard
        </Button>
      </Box>
    </Container>
  );
} 