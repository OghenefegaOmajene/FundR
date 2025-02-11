import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CurrentLoan = ({ borrowed, remaining }) => {
  const [progress, setProgress] = useState(0); // State to track progress
  const totalProgress = 100 - ((remaining / borrowed) * 100); // Calculate the percentage of the loan paid

  // UseEffect to animate the progress bar when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < totalProgress) {
          return prev + 1; // Increase progress until it reaches the final value
        } else {
          clearInterval(interval); // Stop the animation when it reaches the final value
          return prev;
        }
      });
    }, 20); // Adjust the speed of animation by changing this value

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [totalProgress]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black"}}>
      <div style={{ width: 200, height: 200, position: "relative" }}>
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
          value={progress} // Current progress value
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: 2, // Animation duration
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
          <div style={{ fontSize: "18px" }}>${borrowed.toLocaleString()}</div>
          <div style={{ fontSize: "22px" }}>{Math.round(progress)}%</div> {/* Percentage paid */}
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
        Remaining: <b>${remaining.toLocaleString()}</b>
      </p>
    </div>
  );
};

export default CurrentLoan;
