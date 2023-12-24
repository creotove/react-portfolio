import React, { useContext } from "react";
import mapImg from "../assets/icons/map.png";
import phoneImg from "../assets/icons/phone.png";
import degreeImg from "../assets/icons/degree.png";
import ClickContext from "../context/ClickContext";
const Footer = () => {
  const { educationRef,educationClick } = useContext(ClickContext);
  const educations = [
    {
      name: "MCA (pursuing)",
      from: "R. B. Institute of Management (sem-2)",
      marks: "7.91(SPI)",
    },
    {
      name: "BCA",
      from: "Lokmanya College of Computer Applications",
      marks: "77%",
    },
    {
      name: "Class 12 – Commerce",
      from: "Nelson's High Secondary School",
      marks: "69%",
    },
  ];
  return (
    <div className=" bg-x-gray-dark-v2 h-96 flex gap-8 font-medium">
      {/* left-side Contact details*/}
      <div
        className="bg-x-green w-1/3 h-full flex justify-center"
        style={{
          borderRadius: "0px 50px 50px 0",
        }}
      >
        <div className="mt-5 w-full flex flex-col items-center">
          <p
            className="text-2xl px-3 py-2 font-semibold w-fit bg-x-yellow rounded-full "
            style={{
              boxShadow: "5px 5px 0px 2px black",
            }}
          >
            Contact Details
          </p>
          <div className="details">
            <div className="flex mt-10">
              <img src={mapImg} className=" h-9 object-contain" alt="" />
              <p className="ms-10 mb-5">
                2FF, Hariyali Nagar,
                <br />
                Nr. Old Octroi Naka,
                <br />
                Bh. New Faisal Nagar Police Choki,
                <br />
                Danilimda Road Ahmd-28
              </p>
            </div>

            <div className="flex mt-10 items-center">
              <img src={phoneImg} className=" h-9 object-contain" alt="" />
              <p className="ms-10">+91-9265704645</p>
            </div>
          </div>
        </div>
      </div>
      {/* right-side Education details*/}
      <div
        className={`left-side bg-x-orange w-2/3 h-full ${educationClick ? "animate-wiggle" : ""}`}
        style={{
          borderRadius: "50px 0 0 50px",
        }}
        ref={educationRef}
      >
        <div className="mt-5 w-full flex flex-col items-center">
          <p
            className="text-2xl px-3 py-2 font-semibold w-fit bg-x-yellow rounded-full "
            style={{
              boxShadow: "5px 5px 0px 2px black",
            }}
          >
            Education Details
          </p>
        </div>
        <div className="ms-12">
          {/* degree one slot */}
          {educations && educations.length > 0 ? (
            educations.map((education, i) => (
              <div
                className="flex mt-10 items-center font-medium text-white w-full  whitespace-nowrap"
                key={i + 1}
              >
                <img src={degreeImg} className=" h-9 object-contain" alt="" />
                <div className="flex flex-col w-full">
                  <p className="ms-10 text-x-orange-shade">{education.name}</p>
                  <div className="flex justify-between">
                    <p className="ms-10">{education.from}</p>
                    <div
                      className="w-full h-3 mx-3"
                      style={{
                        borderBottom: `1px dashed white`,
                      }}
                    ></div>
                    <p className="me-10">{education.marks}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white font-3xl">
              Failed to load the education dedtails
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
