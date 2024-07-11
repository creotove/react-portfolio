import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../utils.css";
import pic from "../assets/pic.png";
import ClickContext from "../context/ClickContext";

const Hero = () => {
  const { skillsClick, skillRef } = useContext(ClickContext);
  const enthusiastRef = useRef(null);
  const highlyMotivatedRef = useRef(null);
  const mernDevRef = useRef(null);
  const hireMeRef = useRef(null);
  const handWaveRef = useRef(null);

  useEffect(() => {
    swing(enthusiastRef.current);
    swing(highlyMotivatedRef.current);
    swing(mernDevRef.current);

    gsap.fromTo(
      handWaveRef.current,
      { rotation: 0 },
      {
        rotation: 30,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  const swing = (target) => {
    const vars = {
      origin: 'top center',
      perspective: 600,
      ease: 'power1.inOut',
      power: 1,
      duration: 2,
      rotation: -90,
      maxrotation: 60,
      speed: 0.3,
      maxspeed: 0.1,
    };

    vars.target = target;

    gsap.set(vars.target, { rotationX: vars.rotation, transformOrigin: vars.origin, transformPerspective: vars.perspective });

    gsap.to(vars, vars.duration, { power: 0, delay: 0.5, onStart: nextSwing, onStartParams: [vars] });
  };

  const nextSwing = (vars) => {
    if (vars.power > 0) {
      vars.rotation = (vars.rotation > 0 ? -1 : 1) * vars.maxrotation * vars.power;
      gsap.to(vars.target, vars.speed + vars.maxspeed * vars.power, { rotationX: vars.rotation, ease: vars.ease, onComplete: nextSwing, onCompleteParams: [vars] });
    } else {
      gsap.to(vars.target, vars.speed, { rotationX: 0, ease: vars.ease, clearProps: 'all' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const button = hireMeRef.current;
      const rect = button.getBoundingClientRect();
      const distanceX = e.clientX - (rect.left + rect.width / 2);
      const distanceY = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      const maxDistance = 150; // max distance to start the effect
      if (distance < maxDistance) {
        gsap.to(button, {
          x: distanceX * 0.2,
          y: distanceY * 0.2,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    {
      name: "Node js",
      know: 75,
      color: "cyan",
    },
    {
      name: "React",
      know: 70,
      color: "yellow",
    },
    {
      name: "Javascript",
      know: 90,
      color: "orange",
    },
    {
      name: "Mongo DB",
      know: 80,
      color: "green",
    },
  ];

  return (
    <main className="bg-vector-img bg-x-gray-dark text-white">
      <div className="md:mx-24 mx-5 pt-16 flex md:flex-row flex-col-reverse items-center justify-center">
        {/* upper container (intro and pic) */}
        <div className="about w-full text-center md:text-left">
          <div className="text-2xl mt-3 md:mt-0 md:text-3xl">
            <p className="inline-block" ref={handWaveRef}>👋</p>Hello! I am
          </div>
          <h1 className="altamas text-6xl md:text-8xl text-x-yellow whitespace-nowrap">
            Altamas Shaikh
          </h1>
          {/* objective and introduction */}
          <div>
            <span className="md:text-2xl text-xl">
              An
              <div ref={enthusiastRef} className="bg-x-cyan inline-block text-black px-1 rounded mx-1 w-min">
                Enthusiast
              </div>
              and
              <div ref={highlyMotivatedRef} className="bg-x-orange inline-block text-black px-1 rounded mx-1 whitespace-nowrap w-min">
                Highly Motivated
              </div>
              fresher seeking a challenging role as a
              <div ref={mernDevRef} className="bg-x-yellow inline-block text-black px-1 rounded whitespace-nowrap w-min">
                MERN Developer
              </div>
              to leverage my strong foundation in web development,
              problem-solving skills, and passion for creating responsive and
              interactive web applications.
            </span>
          </div>
          <button
            ref={hireMeRef}
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
      <div
        className="flex md:justify-end justify-center py-10 mx-3 md:py-0 md:mx-24"
        ref={skillRef}
      >
        <div
          className={`flex flex-col text-left items-end ${skillsClick ? "animate-wiggle" : ""
            } `}
        >
          {/* one skill slot */}
          {skills && skills.length > 0 ? (
            skills.map((skill, i) => <SkillBar key={i} skill={skill} />)
          ) : (
            <p className="text-6xl">Failed to load skills</p>
          )}
        </div>
      </div>
    </main>
  );
};

const SkillBar = ({ skill }) => {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { width: "0%" },
      { width: `${skill.know}%`, duration: 2 }
    );
  }, [skill.know]);

  return (
    <div className="flex justify-center items-center mb-3">
      <p className="me-3 text-left">{skill.name}</p>
      <div className="bg-x-gray-dark-v2 rounded-full w-64 md:w-72 h-3">
        <div
          className={`bg-x-${skill.color} rounded-full h-3`}
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

export default Hero;