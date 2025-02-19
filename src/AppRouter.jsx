// import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
// import { useState } from "react";
// import HomePage from "../pages/HomePage/HomePage";
// import Loan from "../pages/Loan/Loan";
// import Sidebar from "../components/Sidebar/Sidebar";
// import DashBoard from "../components/DashBoard/DashBoard";

// const AppRouter = () => {
  
//   return (
//     <Router>
//       <Sidebar  />
//       <Routes>
//         <Route path="/" element={<Navigate to="/HomePage" />} />
//         <Route path="/HomePage" element={<Navigate to="/HomePage" />} />
//         <Route path="/DashBoard" index element={<DashBoard/>} />
//         <Route path="/Loan" element={<Loan />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;



import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Loan from "../pages/Loan/Loan";
import Sidebar from "../components/Sidebar/Sidebar";
import DashBoard from "../components/DashBoard/DashBoard";

const Layout = () => {
  const location = useLocation();
  const showSidebar = location.pathname.startsWith("/DashBoard"); // Sidebar only on dashboard routes

  return (
    <>
      {showSidebar && <Sidebar />}
      <Routes>
        {/* Redirect root to HomePage */}
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage />} />

        {/* Dashboard and its sub-routes */}
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/DashBoard/Loan" element={<Loan />} /> {/* Loan under Dashboard */}

        {/* Catch-all route (optional) */}
        <Route path="*" element={<Navigate to="/HomePage" />} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Layout /> {/* Ensure Layout is inside Router */}
    </Router>
  );
};

export default AppRouter;
