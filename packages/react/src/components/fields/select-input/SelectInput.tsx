import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FieldErrorMessages } from '../field-error-messages';

import type { SelectInputProps } from '@/types';

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  placeholder,
  defaultValue,
  validation,
  ui,
  options = [],
}) => {
  const { control, formState } = useFormContext();

  if (!name) return null;

  return (
    <div
      style={{
        gridColumn: `span ${ui?.colSpan?.md ?? 12}`,
        ...(ui?.style ?? {}),
      }}
      className={ui?.className}
    >
      <Controller
        name={name}
        control={control}
        rules={{ ...validation }}
        defaultValue={defaultValue ?? ''}
        render={({ field }) => (
          <TextField
            select
            {...field}
            id={name}
            label={label ?? undefined}
            variant={ui?.variant ?? 'outlined'}
            color={ui?.color ?? 'primary'}
            fullWidth
            error={!!formState.errors[name]}
            helperText={
              formState.errors[name] ? (
                <FieldErrorMessages name={name} errors={formState.errors} />
              ) : undefined
            }
          >
            {placeholder && (
              <MenuItem value="" disabled>
                {placeholder}
              </MenuItem>
            )}
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </div>
  );
};
