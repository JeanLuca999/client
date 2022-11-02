//HOOKS
import { useForm } from "../../hooks";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

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

//SERVICES
import { createUser } from "../../services";

export const CreateAccount = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [fields, handleChange, onSubmit, validations] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = fields;

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

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  const handleSubmit = async (event) => {
    const formData = JSON.stringify({ name, email, password });
    try {
      const response = await createUser(formData);
      if (response) {
        const { data: user } = response;
        handleLogin(user);
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid>
      <BannerForm>
        Crie sua conta para <br /> começar
      </BannerForm>
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
                onChange={handleFormFieldChange}
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
                onChange={handleFormFieldChange}
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
                onChange={handleFormFieldChange}
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
                onChange={handleFormFieldChange}
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
