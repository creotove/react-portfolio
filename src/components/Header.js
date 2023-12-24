import React, { useContext } from "react";
import ClickContext from "../context/ClickContext";

const Header = () => {
  const {
    objectiveRef,
    setObjectiveClick,
    skillRef,
    setSkillsClick,
    setEducationClick,
    educationRef,
  } = useContext(ClickContext);
  return (
    <header className="mx-24 flex my-5 justify-between">
      <div className="leftslot flex w-full">
        <div
          className="profileslot px-6 py-6 bg-x-cyan rounded-full me-3"
          style={{
            boxShadow: "3px 3px 0px 1px #000000",
          }}
        ></div>
        <div
          className=" bg-x-yellow rounded-full  p-2 px-10 font-semibold flex justify-center items-center"
          style={{
            boxShadow: "6px 5px 0px 2px #000000",
          }}
        >
          Portfolio
        </div>
      </div>
      <div className="navlinksslot w-full">
        <nav>
          <ul className="flex justify-between">
            <li
              className=" bg-white rounded-full cursor-pointer p-2 px-10 border flex justify-center items-center"
              onClick={() => {
                setObjectiveClick(true);
                objectiveRef.current.style.scrollMargin = "91px";
                objectiveRef.current?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  setObjectiveClick(false);
                }, 3050);
              }}
            >
              Objective
            </li>
            <li
              className=" bg-white rounded-full  p-2 px-10 border flex justify-center items-center cursor-pointer"
              onClick={() => {
                setSkillsClick(true);
                skillRef.current.style.scrollMargin = "91px";
                skillRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => {
                  setSkillsClick(false);
                }, 3050);
              }}
            >
              skills
            </li>
            <li
              className=" bg-white rounded-full  p-2 px-10 border flex justify-center items-center cursor-pointer"
              onClick={() => {
                setEducationClick(true);
                educationRef.current.style.scrollMargin = "91px";
                educationRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => {
                  setEducationClick(false);
                }, 3050);
              }}
            >
              education
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
