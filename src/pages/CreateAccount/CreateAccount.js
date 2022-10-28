//COMPONENTS
import { BannerForm } from "../../components/BannerForm";

//STLYES
import { Box, Center, Grid } from "../../styles/generics";
import { Anchor, Field, Form, Input, Label, Submit } from "../../styles/form";

export const CreateAccount = () => {
  return (
    <Grid>
      <BannerForm />
      <Center vertically>
        <Box width="90%" maxWidth="500px" margin="0 auto">
          <Form>
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
              <Input type="password" />
            </Field>
            <Field>
              <Label>Confirmar Senha</Label>
              <Input type="password" />
            </Field>
            <Submit type="submit">Cadastrar-se</Submit>
          </Form>
          <Box margin="1rem 0">
            <Anchor to="/login">Já tem uma conta? Entre aqui</Anchor>
          </Box>
        </Box>
      </Center>
    </Grid>
  );
};
