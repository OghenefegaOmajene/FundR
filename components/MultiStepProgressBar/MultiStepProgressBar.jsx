
// import React from "react";
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
// import './MultiStepProgressBar.css'

//   export const MultiStepProgressBar = (props) => {
//     return (

//         <ProgressBar
//           percent={((props.step -1) * 100) / 2}
//           filledBackground="linear-gradient(to right, #9a59ff, #ff7ce0)"
//         >

//           <Step transition="scale">
//             {({ accomplished, index }) => (
//               <div id="first" className={`step ${accomplished ? "completed" : ""}`}>
//                 1
//               </div>
//             )}
//           </Step>

//           <Step transition="scale">
//             {({ accomplished, index }) => (
//               <div id="second" className={`step ${accomplished ? "completed" : ""}`}>
//                 2
//               </div>
//             )}
//           </Step>

//           <Step transition="scale">
//             {({ accomplished, index }) => (
//               <div id="third" className={`step ${accomplished ? "completed" : ""}`}>
//                 3
//               </div>
//             )}
//           </Step>

//         </ProgressBar>
  
      
//     );
//   }



import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./MultiStepProgressBar.css";

export const MultiStepProgressBar = ({ step }) => {
    return (
        <ProgressBar
            percent={((step - 1) * 100) / 2}
            filledBackground="linear-gradient(to right, #9a59ff, #ff7ce0)"
        >
            <Step>
                {({ accomplished }) => (
                    <div className={`step ${accomplished ? "completed" : ""}`}>1</div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div className={`step ${accomplished ? "completed" : ""}`}>2</div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div className={`step ${accomplished ? "completed" : ""}`}>3</div>
                )}
            </Step>
        </ProgressBar>
    );
};
