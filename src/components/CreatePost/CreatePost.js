//STYLES
import { Button, Error, Submit, TextArea } from "../../styles/form";
import { Add, Avatar, ButtonsContainer, Form, Wrapper } from "./styles";

//IMAGES
import avatar from "../../assets/images/avatar.png";
import add from "../../assets/images/add.svg";
import { useState } from "react";

export const CreatePost = ({ onChange, handleSubmit, value, errors }) => {
  const [dragEnter, setDragEnter] = useState(false);

  const handleDeleteContent = () => {
    onChange("");
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleDragEnter = () => {
    setDragEnter(true);
  };

  const handleDragLeave = () => {
    setDragEnter(false);
  };

  const handleDrop = (event) => {
    event.stopPropagation && event.stopPropagation();
    event.preventDefault && event.preventDefault();

    handleDragLeave();
    const file = event.dataTransfer.files[0];
    if (file.type !== "text/plain") return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      onChange(evt.target.result);
    };

    reader.readAsText(file);
  };

  const handleStopPropagation = (event) => {
    event.stopPropagation && event.stopPropagation();
    event.preventDefault && event.preventDefault();
  };

  return (
    <Wrapper
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragOver={handleStopPropagation}
    >
      <Avatar src={avatar} />
      {dragEnter && <Add src={add} />}
      <Form onSubmit={handleSubmit} onDragEnter={handleDragEnter}>
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
