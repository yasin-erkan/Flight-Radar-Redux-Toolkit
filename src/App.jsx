import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Map from "./pages/Map";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";
import Modal from "./components/modal";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/list" element={<list />} />
      </Routes>
      <Modal />
    </BrowserRouter>
  );
};

export default App;
