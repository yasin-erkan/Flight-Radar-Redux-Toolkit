import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice.jsx";
import detailReducer from "./slices/detailSlice.jsx";

export default configureStore({
  reducer: {
    flight: flightReducer,
    detail: detailReducer,
  },
});
