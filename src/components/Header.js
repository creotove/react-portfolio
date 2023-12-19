import React from "react";

const Header = () => {
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
          Resume
        </div>
      </div>
      <div className="navlinksslot w-full">
        <nav>
          <ul className="flex justify-between">
            <li className=" bg-white rounded-full  p-2 px-10 border flex justify-center items-center">
              Objective
            </li>
            <li className=" bg-white rounded-full  p-2 px-10 border flex justify-center items-center">
              skills
            </li>
            <li className=" bg-white rounded-full  p-2 px-10 border flex justify-center items-center">
              education
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
