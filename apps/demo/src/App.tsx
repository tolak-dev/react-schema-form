import { Box, Button, Container, Typography } from '@mui/material';
import {
  ComponentRegistry,
  ComponentRenderer,
  defaultComponents,
  extractDefaultValues,
} from '@tolak-dev/react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import jobApplicationSchema from '@schemas/jobApplication.json';
import type { ComponentSchema } from '@tolak-dev/react';

type FormData = FieldValues;

const App = () => {
  const registry = new ComponentRegistry(defaultComponents);

  const defaultValues = extractDefaultValues(jobApplicationSchema as ComponentSchema);

  const formMethods = useForm<FormData>({
    mode: 'onChange',
    defaultValues,
  });

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log('Form submitted:', data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Job Application Form Demo
      </Typography>

      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleSubmit)} noValidate>
          <ComponentRenderer
            node={jobApplicationSchema as ComponentSchema}
            components={registry.getAll()}
          />

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={() => formMethods.reset()}
            >
              Reset
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Container>
  );
};

export default App;
