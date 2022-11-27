// STYLES

import { Wrapper, Form, Title } from "./styles";
import { Field, Input, Label, Submit } from "../../styles/form";

export const EventForm = ({ fields, handleChange, onSubmit, headerTitle }) => {
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

        <Submit type="submit">Salvar</Submit>
      </Form>
    </Wrapper>
  );
};
