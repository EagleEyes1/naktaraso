import React from "react";

const Expo = () => {
  return (
    <div className="mx-auto px-52">
      <div className="grid grid-cols-2 gap-5">
        <img
          className="h-5/6 self-end justify-self-end"
          src={require("../assets/singapore1.jpg")}
          alt="singapore1"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/singapore2.jpeg")}
          alt="singapore2"
        />
        <img
          className="h-5/6 justify-self-end"
          src={require("../assets/singapore3.jpeg")}
          alt="singapore3"
        />
        <img
          className="h-5/6"
          src={require("../assets/singapore4.jpeg")}
          alt="singapore4"
        />
      </div>
      <h1 className="-mt-14 text-2xl text-center font-semibold">
        Singapore EXPO 2019
      </h1>
    </div>
  );
};

export default Expo;
