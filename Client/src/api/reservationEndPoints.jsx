import axios from 'axios';

const baseURL = 'http://localhost:8080/user-reservation';

const agent = axios.create({ baseURL });

const reservationEndPoints = {
  getAllReservationList: () => agent.get(''),
  getReservationByID: (reservationID) => agent.get(`/${reservationID}`),
  createNewReservation: (body) => agent.post('/', body),
  updateReservation: (reservationID, body) =>
    agent.put(`/${reservationID}`, body),
  deleteReservation: (reservationID) => agent.delete(`/${reservationID}`),
};

export default reservationEndPoints;
