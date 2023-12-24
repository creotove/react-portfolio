import React, { useRef, useState } from "react";
import ClickContext from "./ClickContext";

const ClickContextProvider = ({ children }) => {
  const [objectiveClick, setObjectiveClick] = useState(false);
  const [skillsClick, setSkillsClick] = useState(false);
  const [educationClick, setEducationClick] = useState(false);
  const objectiveRef = useRef(null);
  const skillRef = useRef(null);
  const educationRef = useRef(null);
  return (
    <ClickContext.Provider
      value={{
        objectiveClick,
        setObjectiveClick,
        objectiveRef,
        skillsClick,
        setSkillsClick,
        skillRef,
        educationClick,
        setEducationClick,
        educationRef,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
};

export default ClickContextProvider;
