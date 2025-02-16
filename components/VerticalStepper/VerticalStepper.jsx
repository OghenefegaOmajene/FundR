import React, { useState, useEffect } from "react";
import Stepper from "@keyvaluesystems/react-stepper";
import { initialStepsArr } from "./constants";
import "./VerticalStepper.css";

const VerticalStepper = ({ currentStep }) => {
  const [orientation, setOrientation] = useState("vertical");
  const [labelPosition, setLabelPosition] = useState("right");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setOrientation("horizontal");
        setLabelPosition("bottom");
      } else {
        setOrientation("vertical");
        setLabelPosition("right");
      }
    };

    // Run once on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="verticalStep">
      <h3>Apply for a Loan</h3>
      <Stepper
        steps={initialStepsArr}
        currentStepIndex={currentStep}
        orientation={orientation}
        labelPosition={labelPosition}
        completedStepIndex={currentStep - 1}
 
      />
    </div>
  );
};

export default VerticalStepper;
