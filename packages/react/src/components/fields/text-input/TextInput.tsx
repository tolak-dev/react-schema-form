import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FieldErrorMessages } from '../field-error-messages';

import type { TextInputProps } from '@/types';

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label = undefined,
  placeholder = undefined,
  defaultValue,
  validation,
  ui,
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
            {...field}
            id={name}
            label={label}
            variant={ui?.variant ?? 'outlined'}
            color={ui?.color ?? 'primary'}
            fullWidth
            error={!!formState.errors[name]}
            helperText={
              formState.errors[name] ? (
                <FieldErrorMessages name={name} errors={formState.errors} />
              ) : undefined
            }
            {...(placeholder ? { placeholder } : {})}
          />
        )}
      />
    </div>
  );
};
