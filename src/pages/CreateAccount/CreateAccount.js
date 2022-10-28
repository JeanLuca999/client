//COMPONENTS
import { BannerForm } from "../../components/BannerForm";

//STLYES
import { Grid } from "../../styles/generics";
import { Field, Form, Input, Label } from "../../styles/form";

export const CreateAccount = () => {
  return (
    <Grid>
      <BannerForm />
      <Form style={{ padding: "2rem" }}>
        <Field>
          <Label>Nome</Label>
          <Input type="text" />
        </Field>

        <Field>
          <Label>Email</Label>
          <Input type="text" />
        </Field>

        <Field>
          <Label>Senha</Label>
          <Input type="text" />
        </Field>

        <Field>
          <Label>Confirmar Senha</Label>
          <Input type="text" />
        </Field>
      </Form>
    </Grid>
  );
};
