import { useState, useEffect, useCallback } from "react";

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
  const DEFAULT_FIELDS = {
    title: "",
    description: "",
    date: "",
    location: "",
    owner_id: "",
  };

  const [events, setEvents] = useState([]);
  const [fields, setFields] = useState(DEFAULT_FIELDS);

  const handleChange = useCallback((name, value) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  }, []);

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
      toast.success("Evento deletado com sucesso!");
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateEvent = async (id, data, setData) => {
    try {
      await updateEvent(id, data);
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
      const user = JSON.parse(localStorage.getItem("user"));
      const data = { ...fields, owner_id: user.id };
      await createEvent(data);
      await fetchEvents();

      toast.success("Evento criado com sucesso");
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEventSubmit();
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
