// STYLES

import {
  Wrapper,
  Form,
  Title,
  Submit,
  ButtonsContainer,
  DiscardButton,
} from "./styles";
import { Field, Input, Label } from "../../styles/form";

export const EventForm = ({
  fields,
  handleChange,
  onSubmit,
  headerTitle,
  isEdit,
  setEdit,
}) => {
  const { title, description, location, date } = fields;

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  return (
    <Wrapper>
      <Title>{headerTitle}</Title>
      <Form onSubmit={onSubmit}>
        <Field>
          <Label>Título</Label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={handleFormFieldChange}
            required
          />
        </Field>

        <Field>
          <Label>Descrição</Label>
          <Input
            type="text"
            name="description"
            value={description}
            onChange={handleFormFieldChange}
            required
          />
        </Field>

        <Field>
          <Label>Endereço</Label>
          <Input
            type="text"
            name="location"
            value={location}
            required
            onChange={handleFormFieldChange}
          />
        </Field>

        <Field>
          <Label>Data e Horário</Label>
          <Input
            type="text"
            name="date"
            value={date}
            required
            onChange={handleFormFieldChange}
          />
        </Field>

        <ButtonsContainer isEdit={isEdit}>
          {isEdit && (
            <DiscardButton onClick={() => setEdit(false)} type="button">
              Descartar
            </DiscardButton>
          )}

          <Submit type="submit">Salvar</Submit>
        </ButtonsContainer>
      </Form>
    </Wrapper>
  );
};
