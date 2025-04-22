import React from "react";
import "./Activities.css";
import activities from "./activities.json";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";

const Activities = () => {
  // Madiv icons from JSON to actual comdivonents
  // const getIcon = (action) => {
  //   return action === "Borrowed" ? <GiReceiveMoney className="icon" /> : <GiTakeMyMoney className="icon" />;
  // };

  return (
    <div className="activityBox">
      <div className="transactionsHead">
        <h2 className='h2'>Recent Loan History</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              {/* <td className="receiver">
                <input type="checkbox" />
                <img src={transaction.img} alt={transaction.name} />
                <span>{transaction.name}</span>
              </td> */}
              <td>{activity.date}</td>
              <td>{activity.type}</td>
              <td>{activity.duration}</td>
              <td className="amount11">{activity.amount}</td>
              <td>
                <span className={`status ${activity.status.toLowerCase()}`}>
                  {activity.status}
                </span>
              </td>
              <td>
                <button className="details-btn">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {/* {activities.map((activity, index) => (
          <div key={index} className="activityItem">

            <div className="iconContainer">{getIcon(activity.action)}</div>
            
            <div className="action"><strong>{activity.action}</strong></div>

            <div className="name">{activity.name}</div>

            <div className="date">{activity.dateBorrowed}</div>

            <div className="amount" style={{color: "#9a59ff"}}> <b><i>₦{activity.amount}</i></b></div>

            <div 
              className="status" 
              style={{ color: activity.status === "Cleared" ? "green" : "red" }}
            >
              {activity.status}
            </div>

          </div>
        ))} */}
    </div>
  );
};

export default Activities;
