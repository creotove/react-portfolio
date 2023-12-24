import React from "react";
import adinath from "../assets/projectLogos/adinathGroup.png";
import spellGrowth from "../assets/projectLogos/spellGrowth.png";
import workItOut from "../assets/projectLogos/workItOut.png";
import mernSticker from "../assets/stickers/mernSticker.svg";
import javaSticker from "../assets/stickers/javaSticker.svg";
import gMail from "../assets/socials/gMail.svg";
import insta from "../assets/socials/insta.svg";
import linkedIn from "../assets/socials/linkedIn.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
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
  return (
    <>
      <div className="relative bg-x-orange w-full">
        <div className="absolute top-64 -left-32">
          <div className="rotate-[270deg]">
            <div className="flex flex-row-reverse gap-x-6">
              <a href="mailto:shaikhaltamash411@gmail.com">
                <img
                  src={gMail}
                  className="h-11 w-11 p-2 bg-white rounded-[10px] "
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
                  className="h-11 w-11 p-2 bg-white rounded-[10px] "
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
                  className="h-11 w-11 p-2 bg-white rounded-[10px] "
                  alt="linkedIn_image"
                />
              </a>
              <p className="text-2xl px-3 py-2 font-semibold w-fit bg-x-cyan rounded-full text-white   border border-black">
                Social Links
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-center my-10">
        <p
          className="text-2xl px-10 py-1 font-semibold bg-x-cyan rounded-full w-fit uppercase shadow-x"
          // style={{
          //   boxShadow: "5px 5px 0px 2px black !important",
          // }}
        >
          Projects
        </p>
      </div>
      {/* card */}
      <div className="mx-24 mb-16">
        <div className="">
          <Slider {...settings}>
            {projects && projects.length > 0
              ? projects.map((project, idx) => (
                  <div
                    className="w-[350px] h-[350px] rounded-[50px] bg-white shadow-x my-4"
                    key={idx}
                  >
                    <div
                      className={`bg-x-${project.bgColor} m-6 h-3/4 rounded-[40px] flex justify-center items-center`}
                    >
                      <img src={project.img} alt="" />
                    </div>
                    <p className=" text-center font-semibold text-xl">
                      {project.name}
                    </p>
                  </div>
                ))
              : ""}
          </Slider>
        </div>
      </div>
      {/* Social Links */}
    </>
  );
};

export default Projects;
