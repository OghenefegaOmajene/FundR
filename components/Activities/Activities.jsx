import React from "react";
import "./Activities.css";
import activities from "./activities.json";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";

const Activities = () => {
  // Madiv icons from JSON to actual comdivonents
  const getIcon = (action) => {
    return action === "Borrowed" ? <GiReceiveMoney className="icon" /> : <GiTakeMyMoney className="icon" />;
  };

  return (
    <div className="activityBox">
      <div className="activityTxt"> 
        <h1>Recent Activities</h1>
      </div>
      
      <div className="activitiesList">
        {activities.map((activity, index) => (
          <div key={index} className="activityItem">

            <div className="iconContainer">{getIcon(activity.action)}</div>
            
            <div className="action"><strong>{activity.action}</strong></div>

            <div className="name">{activity.name}</div>

            <div className="date">{activity.dateBorrowed}</div>

            <div className="amount" style={{color: "#9a59ff"}}> <b><i>${activity.amount}</i></b></div>

            <div 
              className="status" 
              style={{ color: activity.status === "Cleared" ? "green" : "red" }}
            >
              {activity.status}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
