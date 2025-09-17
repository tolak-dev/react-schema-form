import { Box, FormHelperText, FormLabel } from '@mui/material';
import React from 'react';

import { FormGroupProps } from '@/types';

export const FormGroup: React.FC<FormGroupProps> = ({ label, description, children, ui }) => {
  return (
    <>
      {label && (
        <FormLabel component="legend" sx={{ fontWeight: 'bold', mb: 2 }}>
          {label}
        </FormLabel>
      )}

      {description && <FormHelperText sx={{ mb: 2 }}>{description}</FormHelperText>}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${ui?.totalColumns ?? 12}, 1fr)`,
          gap: ui?.spacing ?? 2,
          width: '100%',
        }}
      >
        {children}
      </Box>
    </>
  );
};
