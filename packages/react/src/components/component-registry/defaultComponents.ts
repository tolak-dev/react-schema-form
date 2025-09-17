import {
  CheckboxInput,
  MultilineTextInput,
  NumberInput,
  RadioInput,
  SelectInput,
  TextInput,
} from '../fields';
import { FormContainer, FormGroup } from '../form';

export const defaultComponents = {
  form: FormContainer,
  group: FormGroup,
  text: TextInput,
  number: NumberInput,
  select: SelectInput,
  radio: RadioInput,
  checkbox: CheckboxInput,
  'multiline-text': MultilineTextInput,
} as const;
