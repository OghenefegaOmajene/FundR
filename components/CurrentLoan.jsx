import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CurrentLoan = ({borrowed, remaining }) => {
  const [progress, setProgress] = useState(0);
  const totalProgress = borrowed > 0 ? 100 - ((remaining / borrowed) * 100) : 0;

  // const totalProgress = 100 - ((remaining / borrowed) * 100);
  const animationDuration = 1000; // Total animation duration in ms
  const incrementSpeed = Math.max(animationDuration / totalProgress, 15); // Adaptive speed

  useEffect(() => {
    let interval;
    if (progress < totalProgress) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < totalProgress) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, incrementSpeed);
    }
    return () => clearInterval(interval);
  }, [totalProgress, progress]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="gradientThing" style={{ width: 150, height: 150, position: "relative" }}>
        {/* Background Blur Effect */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, #d8b1ff 30%, transparent 70%)",
            filter: "blur(10px)",
            borderRadius: "50%",
            zIndex: 0,
            
          }}
        ></div>

        {/* Circular Progress Bar */}
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: animationDuration / 1000, // Smooth transition
            pathColor: `url(#gradient)`,
            textColor: "#9a59ff",
            trailColor: "#e0d3ff",
            backgroundColor: "#fff",
          })}
        />

        {/* Borrowed Amount & Progress Inside the Circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#6a11cb",
            fontWeight: "bold",
          }}
        >
          
          <div style={{ fontSize: "22px" }}>{Math.round(progress)}% complete</div>
        </div>

        {/* SVG Gradient Definition */}
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9a59ff" />
              <stop offset="100%" stopColor="#ff7ce0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Remaining Amount Outside the Progress Bar */}
      <p style={{ marginTop: "10px", color: "#888", fontSize: "16px" }}>
        Category: <b>Personal</b>
      </p>
      <p style={{ marginTop: "10px", color: "#888", fontSize: "16px" }}>
        Remaining Debt: <b>₦{remaining.toLocaleString()}</b>
      </p>
    </div>
  );
};

export default CurrentLoan;
