import type { ComponentSchema, FieldValue } from '@/types';

// Extract default values from a ComponentSchema
export const extractDefaultValues = (schema: ComponentSchema): Record<string, FieldValue> => {
  const values: Record<string, FieldValue> = {};

  const traverse = (node: ComponentSchema) => {
    // If it's a field with defaultValue
    if ('defaultValue' in node && node.name) {
      values[node.name] = node.defaultValue;
    }

    // Only traverse children if they exist
    if ('children' in node && Array.isArray(node.children)) {
      node.children.forEach(traverse);
    }
  };

  traverse(schema);
  return values;
};
