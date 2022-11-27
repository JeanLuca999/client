import { useState, useCallback, useEffect } from "react";

// COMPONENTS
import { EventForm } from "../EventForm";

// STYLES
import {
  Wrapper,
  Title,
  Info,
  EditButton,
  DeleteButton,
  ButtonsContainer,
} from "./styles";

export const EditEvent = ({ event, handleDeleteEvent }) => {
  const DEFAULT_FIELDS = {
    title: "",
    description: "",
    date: "",
    location: "",
    owner_id: "",
  };

  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setFields({
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      owner_id: event.owner_id,
    });
  }, [event]);

  const handleChange = useCallback((name, value) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <>
      {edit && (
        <EventForm
          isEdit={true}
          fields={fields}
          handleChange={handleChange}
          headerTitle="Editar Evento"
          setEdit={setEdit}
        />
      )}

      {!edit && (
        <Wrapper>
          <Title>{event.title}</Title>
          <Info>Descrição: {event.description}</Info>
          <Info>Local: {event.location}</Info>
          <Info>Data e Horário: {event.date}</Info>
          <Info>Organizador: {event.user.name}</Info>
          <ButtonsContainer>
            <DeleteButton onClick={() => handleDeleteEvent(event.id)}>Deletar</DeleteButton>
            <EditButton onClick={() => setEdit(true)}>Editar</EditButton>
          </ButtonsContainer>
        </Wrapper>
      )}
    </>
  );
};
