import { ComponentSchema } from './components';

// Layout or container components
export type LayoutType = 'group' | 'form' | 'section' | 'card' | 'tabs' | 'accordion';

export interface LayoutSchema {
  component: LayoutType | (string & {});
  name?: string;
  children?: ComponentSchema[];
}
