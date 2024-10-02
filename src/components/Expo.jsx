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
      <div className="grid grid-cols-3 gap-5">
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
          className="h-5/6"
          src={require("../assets/domestik4.jpeg")}
          alt="domestik4"
        />
        <img
          className="h-5/6"
          src={require("../assets/domestik5.jpeg")}
          alt="domestik5"
        />
        <img
          className="h-5/6"
          src={require("../assets/domestik6.jpeg")}
          alt="domestik6"
        />
        <img
          className="h-5/6"
          src={require("../assets/domestik7.jpeg")}
          alt="domestik7"
        />
        <img
          className="h-5/6"
          src={require("../assets/domestik8.jpeg")}
          alt="domestik8"
        />
      </div>
      <h1 className="-mt-14 text-2xl text-center font-semibold">
        DOMESTIK EXPO 
      </h1>
    </div>
  );
};

export default Expo;
