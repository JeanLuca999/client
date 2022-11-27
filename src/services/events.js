//API
import { api } from "../api";

export const getEvents = () => {
  return api.get("/events");
};

export const createEvent = (data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  return api.post(`/events`, data, options);
};

export const deleteEvent = (id) => {
  return api.delete(`/events/${id}`);
};

export const updateEvent = (id, data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  return api.patch(`/events/${id}`, data, options);
};
