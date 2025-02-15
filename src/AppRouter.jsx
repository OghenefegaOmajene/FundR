import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";
import Loan from "../pages/Loan/Loan";
import Body from "../components/Body/Body";
import Sidebar from "../components/Sidebar/Sidebar";

const AppRouter = () => {
  
  return (
    <Router>
      <Sidebar  />
      <Routes>
        <Route path="/" element={<Navigate to="/Body" />} />
        <Route path="/Body" index element={<Body/>} />
        <Route path="/Loan" element={<Loan />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
