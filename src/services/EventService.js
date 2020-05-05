import axios from "axios";

export function getEvents() {
  return axios.get("http://localhost:3000/events");
}

export function getEvent(id) {
  return axios.get(`http://localhost:3000/events/${id}`);
}

export function createEvent(event) {
  return axios.post("http://localhost:3000/events", event);
}
