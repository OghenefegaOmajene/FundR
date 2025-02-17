import React from 'react';
import './Overview.css';
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { TbBusinessplan } from "react-icons/tb";
import { data } from '../Chart';

const Overview = () => {
  // Extract amounts for each loan type
  const totalPersonal = data.reduce((sum, entry) => sum + entry.Personal, 0);
  const totalStudent = data.reduce((sum, entry) => sum + entry.Student, 0);
  const totalBusiness = data.reduce((sum, entry) => sum + entry.Business, 0);


  return (
    <div className="overviewBox">
      {/* Personal Loans */}
      <div className="loanBox">
        <FaPersonDotsFromLine className="loanIcon" />
        <h3>Personal Loans</h3>
        <p><b>₦{totalPersonal.toLocaleString()}</b></p>
      </div>

      {/* Student Loans */}
      <div className="loanBox">
        <FaUserGraduate className="loanIcon" />
        <h3>Student Loans</h3>
        <p><b>₦{totalStudent.toLocaleString()}</b></p>
      </div>

      {/* Business Loans */}
      <div className="loanBox">
        <TbBusinessplan className="loanIcon" />
        <h3>Business Loans</h3>
        <p><b>₦{totalBusiness.toLocaleString()}</b></p>
      </div>
    </div>
  );
}

export default Overview;
