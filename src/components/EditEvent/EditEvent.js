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

export const EditEvent = ({ eventData, handleDeleteEvent, handleUpdateEvent }) => {
  const DEFAULT_FIELDS = {
    title: "",
    description: "",
    date: "",
    location: "",
  };

  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setFields({
      title: eventData.title,
      description: eventData.description,
      date: eventData.date,
      location: eventData.location,
    });
  }, [eventData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleUpdateEvent(eventData.id, fields, setEdit);
  };

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
          onSubmit={handleSubmit}
        />
      )}

      {!edit && (
        <Wrapper>
          <Title>{eventData.title}</Title>
          <Info>Descrição: {eventData.description}</Info>
          <Info>Local: {eventData.location}</Info>
          <Info>Data e Horário: {eventData.date}</Info>
          <Info>Organizador: {eventData.user.name}</Info>
          <ButtonsContainer>
            <DeleteButton onClick={() => handleDeleteEvent(eventData.id)}>
              Deletar
            </DeleteButton>
            <EditButton onClick={() => setEdit(true)}>Editar</EditButton>
          </ButtonsContainer>
        </Wrapper>
      )}
    </>
  );
};
