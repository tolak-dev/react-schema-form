import type { ReactNode } from 'react';
import type { FieldErrors } from 'react-hook-form';
import type { FieldSchema, FieldType } from './fields';
import type { LayoutSchema, LayoutType } from './layouts';
import type { UIProps } from './ui';

// Shared props for *any* component
export interface BaseSchema {
  component: ComponentType;
  name?: string;
  children?: ComponentSchema[];
}

// Unified schema type
export type ComponentSchema = FieldSchema | LayoutSchema;

// Form container/group props
export interface FormGroupProps {
  label?: string;
  description?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  readOnly?: boolean;
  ui: UIProps;
}

export interface FieldErrorMessagesProps {
  name: string;
  errors: FieldErrors;
  style?: React.CSSProperties;
}

export interface FormContainerProps {
  name: string;
  children?: React.ReactNode;
}

export type ComponentMap = Record<string, React.ComponentType<any>>;

export interface PlaceholderProps {
  label?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// Component type union
export type ComponentType = FieldType | LayoutType | string;

export interface ComponentRendererProps {
  node: ComponentSchema;
  components: Record<string, React.ComponentType<any>>;
}
