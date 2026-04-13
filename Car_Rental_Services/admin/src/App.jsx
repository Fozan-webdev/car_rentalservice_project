import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar";
import ManageCar from "./components/ManageCar";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddCar />} />
        <Route path="/manage-cars" element={<ManageCar />} />
      </Routes>
    </>
  );
};

export default App;
