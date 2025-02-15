
import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './MultiStepProgressBar.css'

  export const MultiStepProgressBar = () => {
    return (

      <div className="progressBar">
        <ProgressBar
          percent={70}
          filledBackground="linear-gradient(to right, #9a59ff, #ff7ce0)"
        >

          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>
                1
              </div>
            )}
          </Step>

          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>
                2
              </div>
            )}
          </Step>

          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>
                3
              </div>
            )}
          </Step>

        </ProgressBar>
      </div>
      
    );
  }
