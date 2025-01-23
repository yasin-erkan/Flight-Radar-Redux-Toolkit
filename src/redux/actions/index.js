import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // create the parametres for api request
  const params = {
    bl_lat: "50.0682",
    bl_lng: "-5.7160",
    tr_lat: "58.6350",
    tr_lng: "1.7800",
    speed: "3",
  };

  // api request
  const res = await api.get("/flights/list-in-boundary", { params });

  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  console.log(formatted);
  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  // determine the parameters again
  const params = {
    flight: id,
  };

  // get details from IPI
  const res = await api.get("/flights/detail", { params });

  // confirm the payload of the action
  return res.data;
});
