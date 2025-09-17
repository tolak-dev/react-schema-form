import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FieldErrorMessages } from '../field-error-messages';

import type { CheckboxInputProps } from '@/types';

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  label,
  defaultValue = false,
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
        defaultValue={defaultValue}
        render={({ field }) => (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  onChange={e => field.onChange(e.target.checked)}
                  color={ui?.color ?? 'primary'}
                />
              }
              label={label ?? ''}
            />
            <FieldErrorMessages name={name} errors={formState.errors} />
          </FormGroup>
        )}
      />
    </div>
  );
};
