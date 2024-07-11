import React, { useRef, useState } from "react";
import ClickContext from "./ClickContext";

const ClickContextProvider = ({ children }) => {
  const [projectClick, setProjectRef] = useState(false);
  const [skillsClick, setSkillsClick] = useState(false);
  const [educationClick, setEducationClick] = useState(false);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const educationRef = useRef(null);
  return (
    <ClickContext.Provider
      value={{
        projectClick,
        setProjectRef,
        projectRef,
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
