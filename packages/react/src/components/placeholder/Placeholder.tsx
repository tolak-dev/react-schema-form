import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

import { PlaceholderProps } from '@/types';

export const Placeholder: React.FC<PlaceholderProps> = ({
  label = 'Placeholder',
  style,
  children,
}) => {
  return (
    <Paper
      variant="outlined"
      style={{
        border: '2px dashed #888',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        color: '#555',
        ...style,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        {label}
      </Typography>
      {children && <Box mt={1}>{children}</Box>}
    </Paper>
  );
};
