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
      <h1>Recent Activities</h1>
      <div className="activitiesList">
        {activities.map((activity, index) => (
          <div key={index} className="activityItem">

            <div className="iconContainer">{getIcon(activity.action)}</div>
            
            <div><strong>{activity.action}</strong></div>

            <div>{activity.name}</div>

            <div>{activity.dateBorrowed}</div>

            <div style={{color: "#9a59ff"}}> <b><i>${activity.amount}</i></b></div>

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
