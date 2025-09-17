import { defaultComponents } from './defaultComponents';

import { ComponentMap } from '@/types';

export class ComponentRegistry {
  private components: ComponentMap;

  constructor(initial: ComponentMap = {}) {
    this.components = { ...defaultComponents, ...initial };
  }

  add(custom: ComponentMap) {
    this.components = { ...this.components, ...custom };
  }

  get(name: string) {
    return this.components[name];
  }

  getAll() {
    return this.components;
  }
}
