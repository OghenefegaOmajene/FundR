import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";
import Loan from "../pages/Loan/Loan";
import Sidebar from "../components/Sidebar/Sidebar";
import DashBoard from "../components/DashBoard/DashBoard";

const AppRouter = () => {
  
  return (
    <Router>
      <Sidebar  />
      <Routes>
        <Route path="/" element={<Navigate to="/DashBoard" />} />
        <Route path="/DashBoard" index element={<DashBoard/>} />
        <Route path="/Loan" element={<Loan />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
