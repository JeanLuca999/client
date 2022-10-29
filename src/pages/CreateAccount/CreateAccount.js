//HOOKS
import { useForm } from "../../hooks";

//COMPONENTS
import { BannerForm } from "../../components/BannerForm";

//STYLES
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

//HELPERS
import {
  validateEmail,
  validateIsPasswordsEqual,
  validateName,
  validatePassword,
} from "../../helpers";

export const CreateAccount = () => {
  const [
    { name, email, password, confirmPassword },
    handleChange,
    onSubmit,
    validations,
  ] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleValidateForm = () => {
    return [
      validations.register("name", validateName, "este campo é obrigatório"),
      validations.register("email", validateEmail, "email inválido"),
      validations.register("password", validatePassword, "senha inválida"),
      validations.register(
        "confirmPassword",
        () => validateIsPasswordsEqual(password, confirmPassword),
        "as senhas devem ser iguais"
      ),
      validations.register(
        "confirmPassword",
        validatePassword,
        "senha inválida"
      ),
    ];
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
    console.log("post data");
  };

  return (
    <Grid>
      <BannerForm />
      <Center vertically>
        <Box width="90%" maxWidth="500px" margin="0 auto">
          <Form
            method="post"
            onSubmit={(event) =>
              onSubmit(event, handleSubmit, handleValidateForm)
            }
          >
            <Field>
              <Label>Nome</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Field>
            {validations?.errors?.name && (
              <Error>{validations?.errors?.name}</Error>
            )}
            <Field>
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Field>
            {validations?.errors?.email && (
              <Error>{validations?.errors?.email}</Error>
            )}
            <Field>
              <Label>Senha</Label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Field>
            {validations?.errors?.password && (
              <Error>{validations?.errors?.password}</Error>
            )}
            <Field>
              <Label>Senha</Label>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
            </Field>
            {validations?.errors?.confirmPassword && (
              <Error>{validations?.errors?.confirmPassword}</Error>
            )}

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
