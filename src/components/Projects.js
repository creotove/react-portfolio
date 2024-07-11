import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import adinath from "../assets/projectLogos/adinathGroup.png";
import spellGrowth from "../assets/projectLogos/spellGrowth.png";
import workItOut from "../assets/projectLogos/workItOut.png";
import mernSticker from "../assets/stickers/mernSticker.svg";
import javaSticker from "../assets/stickers/javaSticker.svg";
import gMail from "../assets/socials/gMail.svg";
import insta from "../assets/socials/insta.svg";
import linkedIn from "../assets/socials/linkedIn.svg";
import "../utils.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClickContext from "../context/ClickContext";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const { projectClick, projectRef } = useContext(ClickContext);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const projects = [
    {
      id: 1,
      name: "Adinath Group",
      img: adinath,
      bgColor: "green",
      technologySticker: mernSticker,
    },
    {
      id: 2,
      name: "Spell Growth",
      img: spellGrowth,
      bgColor: "yellow",
      technologySticker: mernSticker,
    },
    {
      id: 3,
      name: "Work It Out",
      img: workItOut,
      bgColor: "orange",
      technologySticker: javaSticker,
    },
  ];

  useEffect(() => {

    // Animate projects on scroll
    gsap.fromTo(
      containerRef.current.children,
      { x: "100%", },
      {
        x: "0%",
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 85%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className={`${projectClick ? "animate-wiggle" : ""}`}>
      {/* Social Links */}
      <div className="md:relative w-full md:mx-0" ref={projectRef}>
        <div className="md:absolute md:top-64 md:-left-32">
          <div className="md:rotate-[270deg]">
            <div className="md:flex flex gap-x-2 justify-center flex-row-reverse py-5 md:py-0 bg-white/70 md:bg-white/0 items-center md:flex-row-reverse md:gap-x-6">
              <a href="mailto:shaikhaltamash411@gmail.com">
                <img
                  src={gMail}
                  className="h-11 w-11 p-2 bg-white rounded-[10px] md:hover:hover:rotate-90 hover:scale-110 transition-all duration-300 ease-in-out"
                  alt="gmail_image"
                />
              </a>
              <a
                href="https://www.instagram.com/1altamas/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={insta}
                  className="h-11 w-11 p-2 bg-white rounded-[10px] md:hover:rotate-90 hover:scale-110 transition-all duration-300 ease-in-out"
                  alt="instagram_image"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/altamas-shaikh-8a150b23a"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={linkedIn}
                  className="h-11 w-11 p-2 bg-white rounded-[10px] hover:transform md:hover:hover:rotate-90 hover:scale-110 transition-all duration-300 ease-in-out"
                  alt="linkedIn_image"
                />
              </a>
              <p className="text-2xl px-3 py-2 font-semibold w-fit bg-x-cyan rounded-full   border border-black">
                Social Links
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-center my-10">
        <p className="text-2xl px-10 py-1 font-semibold bg-x-cyan rounded-full w-fit uppercase shadow-x">
          Projects
        </p>
      </div>

      {/* card */}
      <div className="md:mx-24 mx-7 mb-16 overflow-hidden">
        <div ref={containerRef}>
          <Slider {...settings}>
            {projects &&
              projects.length > 0 &&
              projects.map((project, idx) => (
                <div
                  className="w-96 h-96 md:w-[350px] md:h-[350px] rounded-[50px] bg-white shadow-x my-4"
                  key={idx}
                >
                  <div className="relative">
                    <img
                      className="absolute -left-5 -top-3 h-20"
                      src={project.technologySticker}
                      alt=""
                    />
                  </div>
                  <div
                    className={`bg-x-${project.bgColor} m-6 h-3/4 rounded-[40px] flex justify-center items-center`}
                  >
                    <img src={project.img} alt="" />
                  </div>
                  <p className="text-center font-semibold text-xl">
                    {project.name}
                  </p>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
