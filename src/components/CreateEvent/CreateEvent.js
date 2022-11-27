// STYLES

import { Wrapper, Form } from "./styles";
import { Anchor, Field, Input, Label, Submit, Error } from "../../styles/form";

export const CreateEvent = ({
  fields,
  handleChange,
  onSubmit,
  validations,
}) => {
  const { title, description, location, date } = fields;

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Field>
          <Label>Título</Label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={handleFormFieldChange}
          />
        </Field>

        <Field>
          <Label>Descrição</Label>
          <Input
            type="text"
            name="description"
            value={description}
            onChange={handleFormFieldChange}
          />
        </Field>

        <Field>
          <Label>Endereço</Label>
          <Input
            type="text"
            name="location"
            value={location}
            onChange={handleFormFieldChange}
          />
        </Field>

        <Field>
          <Label>Data e Horário</Label>
          <Input
            type="text"
            name="date"
            value={date}
            onChange={handleFormFieldChange}
          />
        </Field>

        <Submit type="submit">Salvar</Submit>
      </Form>
    </Wrapper>
  );
};
