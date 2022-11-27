//HOOKS
import { useForm } from "../../hooks";

// STYLES
import { Box, Center, Grid } from "../../styles/generics";

import {
  Anchor,
  Field,
  Form,
  Input,
  Label,
  Submit,
  Error,
} from "../../styles/form";

export const CreateEvent = () => {
  const [fields, handleChange, onSubmit, validations] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = fields;

  const handleFormFieldChange = () => {};

  return (
    <Center vertically="center" horizontally="center">
      <Box
        width="660px"
        style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}
      >
        <Form>
          <Field>
            <Label>Título</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleFormFieldChange}
            />
          </Field>
        </Form>

        <Form>
          <Field>
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleFormFieldChange}
            />
          </Field>
        </Form>

        <Form>
          <Field>
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleFormFieldChange}
            />
          </Field>
        </Form>
      </Box>
    </Center>
  );
};
