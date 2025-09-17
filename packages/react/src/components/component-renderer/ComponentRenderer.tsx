import React, { memo } from 'react';

import { Placeholder } from '../placeholder';

import type { ComponentRendererProps } from '@/types';

export const ComponentRenderer: React.FC<ComponentRendererProps> = memo(({ node, components }) => {
  const { component, children, ...rest } = node;

  if (!component) {
    return <Placeholder label="No component specified" />;
  }

  const Component = components[component];

  if (!Component) {
    return <Placeholder label={`Unsupported component: ${component}`} />;
  }

  return (
    <Component {...rest}>
      {children?.map((child, idx) => (
        <ComponentRenderer
          key={child.name ? `${child.name}-${idx}` : `${child.component}-${idx}`}
          node={child}
          components={components}
        />
      ))}
    </Component>
  );
});

ComponentRenderer.displayName = 'ComponentRenderer';
