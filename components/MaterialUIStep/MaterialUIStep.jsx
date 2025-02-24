import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {StepConnector} from '@mui/material';
import { styled } from "@mui/material";

const steps = ["Personal Details", "Payment Details", "Summary"];


const CustomStepConnector = styled(StepConnector)({
    "& .MuiStepConnector-line": {
      borderLeftWidth: "3px", // Make the line thicker
      marginLeft: "7px",
      minHeight: "60px", // Adjust height of the connecting line
    },
    "&.Mui-completed .MuiStepConnector-line": {
        borderColor: "#9a59ff",
    },
    // "& .MuiStepConnector-root": {
    //     marginLeft: "24px",
    // },

});



// const CustomStepConnector = styled(StepConnector)(({ ownerState }) => ({
//     "& .MuiStepConnector-line": {
//       borderLeftWidth: "3px",
//       marginLeft: "12px",
//       minHeight: "60px",
//       borderColor: ownerState.active || ownerState.completed ? "#9a59ff" : "#ccc",
//     },
// }));
  


// const CustomStepConnector = styled(StepConnector)(({ theme, ownerState }) => ({
//     "& .MuiStepConnector-line": {
//       borderLeftWidth: "3px",
//       marginLeft: "7px",
//       minHeight: "60px",
//       borderColor: ownerState?.active || ownerState?.completed ? "#9a59ff" : "#ccc",
//     },
//   }));
  
  
// Define the animation using styled-components
const PulsatingStep = styled(StepLabel)({
    // "& .MuiStepConnector-line.MuiStepConnector-lineVertical": {
    //     borderLeftWidth: "3px",
    //     minHeight: "40px",
    // },
    
    "& .MuiStepIcon-root": {
        width: "40px",
        height: "40px",
    },

  "& .MuiStepIcon-root.Mui-active": {
    // backgroundColor: "",
    color: "#9a59ff",
    borderRadius: "50%",
    animation: "pulsate 1.5s infinite",
    // padding: "8px",
  },

  "& .MuiStepIcon-root.Mui-completed": {
    backgroundColor: "f",
    color: "#9a59ff",
    borderRadius: "50%",
  },

  "@keyframes pulsate": {
    "0%": {
      transform: "scale(1)",
      boxShadow: "0 0 5px #9a59ff",
    },
    "50%": {
      transform: "scale(1.1)",
      boxShadow: "0 0 15px #9a59ff",
    },
    "100%": {
      transform: "scale(1)",
      boxShadow: "0 0 5px #9a59ff",
    },
  }
});

const MaterialUIStep = ({ step }) => {
  return (
    <Box 
        sx={{ 
            // maxWidth: 400, 
            width: "20%",
            height: "80%", 
            marginBottom: 3, 
            // border: "1px solid black",
            display: "flex", 
            flexDirection: "column",
            alignItems: "center"
            // justifyContent: "center", 
        }}
    >
      <Stepper activeStep={step} orientation="vertical" connector={<CustomStepConnector />}>
        {steps.map((label, index) => (
          <Step 
            key={index} 
            completed={step > index} 
          >
            <PulsatingStep>{label}</PulsatingStep>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default MaterialUIStep;
