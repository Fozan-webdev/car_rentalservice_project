import React from "react";
import { styles } from "../assets/dummyStyles";

import axios from "axios";

const BASE = "http://localhost:5000";
const api = axios.create({
  baseURL: BASE,
  headers: { Accept: "application/json" },
});

const ManageCar = () => {
  return (
  <div className="min-h-screen bg-gray-950 p-4 sm:p-6">
    <div className="relative mb-8 pt-16 text-center">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
      </div>
      <h1 className="text-4xl font-extrabold py-4 text-white sm:text-5xl mb-3 tracking-wide">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
          GCB Management
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Manage your entire fleet, track bookings, and monitor vehicle status
        in real time
      </p>
    </div>
  </div>
);
};

export default ManageCar;