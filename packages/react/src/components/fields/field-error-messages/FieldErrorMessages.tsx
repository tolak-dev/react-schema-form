import React from 'react';
import type { FieldErrors } from 'react-hook-form';

import type { FieldErrorMessagesProps } from '@/types';

export const FieldErrorMessages: React.FC<FieldErrorMessagesProps> = ({ name, errors, style }) => {
  const getErrorMessages = (errors: FieldErrors, name: string): string[] => {
    const error = errors[name];
    if (!error) return [];
    if ('types' in error && error.types) return Object.values(error.types);
    if ('message' in error && error.message) return [error.message as string];
    return [];
  };

  const messages = getErrorMessages(errors, name);

  if (messages.length === 0) return null;

  return (
    <>
      {messages.map((msg, idx) => (
        <span
          key={idx}
          style={{
            color: 'red',
            fontSize: '0.875rem',
            display: 'block',
            ...style,
          }}
        >
          {msg}
        </span>
      ))}
    </>
  );
};
