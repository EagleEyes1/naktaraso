import React from "react";

const Expo = () => {
  return (
    <div className="mx-auto px-52 bg-[#fff8ee]">
      <div className="grid grid-cols-3 gap-5">
        <img
          className="h-5/6 w-5/6 self-end justify-self-end"
          src={require("../assets/singapore1.jpg")}
          alt="singapore1"
        />
        <img
          className="h-5/6 w-5/6 self-end"
          src={require("../assets/singapore2.jpeg")}
          alt="singapore2"
        />
        <div className="row-span-2  self-center">
          <h1 className="text-2xl">
            Singapore
            <br />
            <span className="text-4xl font-extrabold">Expo 2019</span>
          </h1>
        </div>
        <img
          className="h-5/6 w-5/6 justify-self-end"
          src={require("../assets/singapore3.jpeg")}
          alt="singapore3"
        />
        <img
          className="h-5/6  w-5/6"
          src={require("../assets/singapore4.jpeg")}
          alt="singapore4"
        />
      </div>
      <div className="grid grid-cols-5 gap-5 pb-24">
        <div className="row-span-3 col-span-2 self-center text-center">
          <h1 className="text-2xl">
            Domestik
            <br />
            <span className="text-4xl font-extrabold">Expo</span>
          </h1>
        </div>
        <img
          className="h-5/6 self-end justify-self-end"
          src={require("../assets/domestik1.jpeg")}
          alt="domestik1"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/domestik2.jpeg")}
          alt="domestik2"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/domestik3.jpeg")}
          alt="domestik3"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/domestik4.jpeg")}
          alt="domestik4"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/domestik5.jpeg")}
          alt="domestik5"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/domestik6.jpeg")}
          alt="domestik6"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/domestik7.jpeg")}
          alt="domestik7"
        />
        <img
          className="h-5/6 self-end"
          src={require("../assets/domestik8.jpeg")}
          alt="domestik8"
        />
      </div>
    </div>
  );
};

export default Expo;
