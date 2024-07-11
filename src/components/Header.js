import React, { useContext } from "react";
import ClickContext from "../context/ClickContext";

const Header = () => {
  const {
    projectRef,
    setProjectRef,
    skillRef,
    setSkillsClick,
    setEducationClick,
    educationRef,
  } = useContext(ClickContext);
  return (
    <header className="md:mx-24 mx-5 flex my-5 justify-between">
      <div className="flex w-full ">
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
        <div
          className=" bg-x-orange md:hidden rounded-full  p-2 px-6 font-semibold flex justify-center items-center ms-auto"
          style={{
            boxShadow: "6px 5px 0px 2px #000000",
          }}
        >
          2024
        </div>
      </div>
      <div className="md:w-full md:block hidden">
        <nav>
          <ul className="flex justify-between">
            <li
              className=" bg-white rounded-full cursor-pointer p-2 px-10 border flex justify-center items-center"
              onClick={() => {
                setProjectRef(true);
                projectRef.current.style.scrollMargin = "91px";
                projectRef.current?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  setProjectRef(false);
                }, 3050);
              }}
            >
              Projects
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
