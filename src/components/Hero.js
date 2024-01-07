import React, { useContext } from "react";
import "../utils.css";
import pic from "../assets/pic.png";
import ClickContext from "../context/ClickContext";

const Hero = () => {
  const { objectiveClick, skillsClick, objectiveRef, skillRef } =
    useContext(ClickContext);
  const skills = [
    {
      name: "React",
      know: 70,
      color: "yellow",
    },
    {
      name: "Node js",
      know: 75,
      color: "cyan",
    },
    {
      name: "Mongo DB",
      know: 80,
      color: "green",
    },
    {
      name: "Javascript",
      know: 90,
      color: "orange",
    },
  ];
  return (
    <main className="bg-vector-img bg-x-gray-dark text-white">
      <div className="md:mx-24 mx-5 pt-16 flex md:flex-row flex-col-reverse items-center justify-center">
        {/* upper container (intro and pic) */}
        <div className="about w-full text-center md:text-left">
          <div className="text-2xl  mt-3 md:mt-0 md:text-3xl ">
            👋Hello! I am
          </div>
          <h1 className="altamas text-6xl md:text-8xl text-x-yellow whitespace-nowrap">
            Altamas Shaikh
          </h1>
          {/* objecttive and introduction */}
          <div className={`${objectiveClick ? "animate-wiggle" : ""}`}>
            <p className="md:text-2xl  text-xl " ref={objectiveRef}>
              An
              <span className="bg-x-cyan text-black pe-1  rounded mx-1">
                Enthusiast
              </span>{" "}
              and
              <span className="bg-x-orange text-black px-1  rounded mx-1 whitespace-nowrap">
                Highly Motivated
              </span>{" "}
              fresher seeking a challenging role as a{" "}
              <span className="bg-x-yellow text-black px-1 rounded whitespace-nowrap">
                MERN Developer
              </span>{" "}
              to leverage my strong foundation in web development,
              problem-solving skills, and passion for creating responsive and
              interactive web applications.
            </p>
          </div>
          <button
            className="bg-x-cyan text-2xl rounded-full text-x-gray-dark font-bold h-14 w-48 mt-5"
            style={{
              boxShadow: "5px 5px 0px 5px black",
            }}
          >
            HIRE ME
          </button>
        </div>
        {/* pic slot */}
        <div className="w-full flex justify-center md:justify-end mt-10">
          <div
            className="bg-x-yellow h-72 w-72 rounded-[50px] relative"
            style={{
              boxShadow: "5px 5px 0px 5px black",
            }}
          >
            <img
              src={pic}
              className="absolute -top-[60px] rounded-[50px]"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* lower container skills */}
      <div className="flex md:justify-end justify-center py-10 mx-3 md:py-0 md:mx-24" ref={skillRef}>
        <div
          className={`flex flex-col text-left items-end ${
            skillsClick ? "animate-wiggle" : ""
          } `}
        >
          {/* one skill slot */}
          {skills && skills.length > 0 ? (
            skills.map((skill, i) => (
              <div
                className="flex justify-center items-center mb-3 "
                key={i + 1}
              >
                <p className="me-3 text-left">{skill.name}</p>
                <div className="bg-x-gray-dark-v2 rounded-full w-64 md:w-72 h-3">
                  <div
                    className={`bg-x-${skill.color} rounded-full h-3`}
                    style={{
                      width: `${skill.know}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-6xl">Failed to load skills</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Hero;
