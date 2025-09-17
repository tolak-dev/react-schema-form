import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FieldErrorMessages } from '../field-error-messages';

import type { RadioInputProps } from '@/types';

export const RadioInput: React.FC<RadioInputProps> = ({
  name,
  label,
  defaultValue,
  validation,
  options = [],
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
          <FormControl component="fieldset" error={!!formState.errors[name]} fullWidth>
            {label && <FormLabel component="legend">{label}</FormLabel>}
            <RadioGroup {...field} row>
              {options.map(option => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio color={ui?.color ?? 'primary'} />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
            <FieldErrorMessages name={name} errors={formState.errors} />
          </FormControl>
        )}
      />
    </div>
  );
};
