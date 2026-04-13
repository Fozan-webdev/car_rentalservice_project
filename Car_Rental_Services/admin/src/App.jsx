import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddCar />} />
      </Routes>
    </>
  );
};

export default App;
