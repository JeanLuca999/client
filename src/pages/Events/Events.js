import { useState, useEffect } from "react";

//HOOKS
import { useForm } from "../../hooks";

// COMPONENTS
import { EventForm } from "../../components/EventForm";
import { EditEvent } from "../../components/EditEvent";
import { toast } from "react-toastify";

// STYLES
import { Box } from "../../styles/generics";

// SERVICES
import {
  createEvent,
  getEvents,
  deleteEvent,
  updateEvent,
} from "../../services/events";

export const Events = () => {
  const [events, setEvents] = useState([]);

  const [fields, handleChange, onSubmit] = useForm({
    title: "",
    description: "",
    location: "",
    date: "",
    owner_id: "",
  });

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      if (response) {
        const { data } = response;
        setEvents(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent(id);
      await fetchEvents();
    } catch (e) {
      console.log(e);
    }
  };

  const renderEvents = () => {
    return events.map((event) => {
      return (
        <Box style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}>
          <EditEvent
            key={event.id}
            event={event}
            handleDeleteEvent={handleDeleteEvent}
          />
        </Box>
      );
    });
  };

  const handleEventSubmit = async () => {
    try {
      console.log(fields);
      const data = JSON.stringify(fields);
      await createEvent(data);
      await fetchEvents();
      handleChange("title", "");
      handleChange("description", "");
      handleChange("location", "");
      handleChange("date", "");
      handleChange("owner_id", "");
      toast.success("Evento criado com sucesso");
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    onSubmit(event, handleEventSubmit);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Box style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}>
        <EventForm
          fields={fields}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          headerTitle="Criar Evento"
        />
      </Box>

      {renderEvents()}
    </>
  );
};
