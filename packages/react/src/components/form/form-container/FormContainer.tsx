import { Box, Paper } from '@mui/material';
import React from 'react';

import { FormContainerProps } from '@/types';

export const FormContainer: React.FC<FormContainerProps> = ({ children, name, ...rest }) => {
  return (
    <Paper
      data-form-name={name}
      style={{
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 16,
        boxSizing: 'border-box',
      }}
      {...rest}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{children}</Box>
    </Paper>
  );
};
