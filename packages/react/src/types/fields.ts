import { FieldValues, RegisterOptions } from 'react-hook-form';

import type { ComponentSchema, FieldValue, UIProps } from './index';

// Field-only components
export type FieldType = 'text' | 'number' | 'select' | 'checkbox' | 'radio' | 'multiline-text';

export interface FieldSchema {
  name: string;
  component: FieldType;
  label?: string;
  description?: string;
  placeholder?: string;
  defaultValue?: FieldValue;
  readOnly?: boolean;
  validation?: RegisterOptions<FieldValues, string>;
  options?: Array<{ label: string; value: string | number }>;
  children?: ComponentSchema[];
  ui?: UIProps;
}

// Individual field props
export interface CheckboxInputProps extends Partial<FieldSchema> {
  name: string;
}
export interface MultilineTextInputProps extends Partial<FieldSchema> {
  name: string;
  rows?: number;
}
export interface NumberInputProps extends Partial<FieldSchema> {
  name: string;
}
export interface RadioInputProps extends Partial<FieldSchema> {
  name: string;
}
export interface SelectInputProps extends Partial<FieldSchema> {
  name: string;
}
export interface TextInputProps extends Partial<FieldSchema> {
  name: string;
}
