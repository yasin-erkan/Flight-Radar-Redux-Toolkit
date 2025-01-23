import axios from "axios";
const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "09ade5c599mshe1bd8f17b33f1c9p192ccajsn09ef96995416",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
