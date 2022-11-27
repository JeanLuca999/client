//HOOKS
import { useForm } from "../../hooks";

// COMPONENTS
import { EventForm } from "../../components/EventForm";

// STYLES
import { Box } from "../../styles/generics";

// SERVICES
import { createEvent, getEvents, deleteEvent } from "../../services/events";

export const Events = () => {
  const [fields, handleChange, onSubmit] = useForm({
    title: "",
    description: "",
    location: "",
    date: "",
    owner_id: "",
  });

  return (
    <>
      <Box style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}>
        <EventForm
          fields={fields}
          handleChange={handleChange}
          onSubmit={onSubmit}
          headerTitle="Criar Evento"
        />
      </Box>

      <Box
        style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}
      ></Box>
    </>
  );
};
