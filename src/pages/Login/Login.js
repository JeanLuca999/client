//HOOKS
import { useForm } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

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
import { validateEmail, validatePassword } from "../../helpers";

//SERVICES
import { loginUser } from "../../services";

export const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [fields, handleChange, onSubmit, validations] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { email, password } = fields;

  const handleValidateForm = () => {
    return [
      validations.register("email", validateEmail, "email inválido"),
      validations.register("password", validatePassword, "senha inválida"),
    ];
  };

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  const handleSubmit = async (event) => {
    event?.preventDefault();

    const formData = JSON.stringify({ email, password });
    try {
      const response = await loginUser(formData);
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
        Entre para criar e visualizar <br /> postagens
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

            <Submit type="submit">Entrar</Submit>
          </Form>
          <Box margin="1rem 0">
            <Anchor to="/register">Ainda não tem uma conta? Cadastre-se</Anchor>
          </Box>
        </Box>
      </Center>
    </Grid>
  );
};
