import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div
      style={{ fontFamily: "Work Sans, sans-serif" }}
      className="max-w-screen-xl mx-auto p-6 flex items-center text-white justify-between border-b-[1px] border-zinc-700"
    >
      <div className="nleft flex items-center ">
        <img
          className="mr-12 "
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />

        <div className="links flex items-center capitalize gap-14 ml-20 font-regular">
          {["home", "work", "culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              //border with index-3
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                href="#"
                className="text-sm flex items-center gap-1"
              >
                {index === 1 && (
                  <span
                    key={index}
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Nav;
