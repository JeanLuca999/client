//STYLES
import { Button, Error, Submit, TextArea } from "../../styles/form";
import { Avatar, ButtonsContainer, Form, Wrapper } from "./styles";

//IMAGES
import avatar from "../../assets/images/avatar.png";

export const CreatePost = ({ onChange, handleSubmit, value, errors }) => {
  const handleDeleteContent = () => {
    onChange("");
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Form onSubmit={handleSubmit}>
        <TextArea
          placeholder="digite aqui..."
          onChange={handleChange}
          value={value}
        />

        {errors && <Error>{errors}</Error>}

        <ButtonsContainer>
          <Submit type="submit">postar</Submit>
          <Button type="button" onClick={handleDeleteContent}>
            descartar
          </Button>
        </ButtonsContainer>
      </Form>
    </Wrapper>
  );
};
