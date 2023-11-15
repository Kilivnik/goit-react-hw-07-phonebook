import axios from 'axios';

const baseURL = 'https://65548d9163cafc694fe6a097.mockapi.io/contacts';

export function fetchContacts() {
  return axios.get(baseURL);
}

export function addContact(contact) {
  return axios.post(baseURL, contact);
}

export function deleteContact(id) {
  const deleteURL = baseURL + '/' + id.toString();
  return axios.delete(deleteURL);
}
