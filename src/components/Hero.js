import React from "react";
import "../utils.css";
import pic from "../assets/pic.png";

const Hero = () => {
  const skills = [
    {
      name: "React",
      know: 70,
      color: "yellow"
    },
    {
      name: "Node js",
      know: 75,
      color: "cyan"
    },
    {
      name: "Mongo DB",
      know: 80,
      color: "green"
    },
    {
      name: "Javascript",
      know: 90,
      color: "orange"
    },
  ];
  Object.entries(skills).map((i) => console.log(i));
  return (
    <main
      className="bg-vector-img bg-x-gray-dark text-white"
    >
      <div className="mx-24 pt-16 flex">
        {/* upper container (intro and pic) */}
        <div className="about w-full">
          <div className=" text-3xl">👋Hello! I am</div>
          <h1 className="altamas text-8xl text-x-yellow">Altamas Shaikh</h1>
          {/* objecttive and introduction */}
          <p className="text-2xl">
            An Enthusiast and highly motivated fresher seeking a challenging
            role as a MERN developer to leverage my strong foundation in web
            development, problem-solving skills, and passion for creating
            responsive and interactive web applications.
          </p>
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
        <div className="w-full flex justify-end mt-10">
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
      <div className="flex justify-end mx-24">
        <div className="flex flex-col text-left items-end ">
          {/* one skill slot */}
          {skills && skills.length > 0 ? (
            skills.map((skill, i) => (
              <div
                className="flex justify-center items-center mb-3 "
                key={i + 1}
              >
                <p className="skillName me-3 text-left">{skill.name}</p>
                <div className="skillKnow bg-x-gray-dark-v2 rounded-full w-72 h-3">
                  <div
                    className={`skillKnow bg-x-${skill.color} rounded-full h-3`}
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
