import axios from "axios";
const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "72f90ac0e9msh0609ce52e953a5ap113d0djsnc9a8a7e6c123",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
