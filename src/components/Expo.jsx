import React from "react";

const Expo = () => {
  return (
    <div className="mx-auto px-3 xl:px-52 lg:px-28 md:px-20 sm:px-16 bg-[#fff8ee]">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-x-5">
        <img
          className="h-5/6 w-5/6 self-end justify-self-center xl:justify-self-end lg:justify-self-end md:justify-self-end sm:justify-self-end relative z-10"
          src={require("../assets/selangor1.jpeg")}
          alt="selangor1"
        />
        <img
          className="h-5/6 w-5/6 self-end justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/selangor2.jpeg")}
          alt="selangor2"
        />
      </div>
      <div className="text-center pt-5">
        <p className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-extrabold">
          Selangor International Summit Expo 2019 (Malaysia)
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5">
        <img
          className="h-5/6 w-5/6 self-end justify-self-end relative z-10"
          src={require("../assets/singapore1.jpg")}
          alt="singapore1"
        />
        <img
          className="h-5/6 w-5/6 self-end relative z-10"
          src={require("../assets/singapore2.jpeg")}
          alt="singapore2"
        />
        <div className="hidden xl:grid lg:grid md:grid sm:grid xl:row-span-2 lg:row-span-2 md:row-span-2 sm:row-span-2 self-center">
          <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl">
            Singapore
            <br />
            <span className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl font-extrabold">
              Expo 2019
            </span>
          </h1>
        </div>
        <img
          className="h-5/6 w-5/6 justify-self-end relative z-10"
          src={require("../assets/singapore3.jpeg")}
          alt="singapore3"
        />
        <img
          className="h-5/6  w-5/6 relative z-10"
          src={require("../assets/singapore4.jpeg")}
          alt="singapore4"
        />
      </div>
      <div className="flex items-center text-center justify-center xl:hidden lg:hidden md:hidden sm:hidden self-center">
        <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl">
          Singapore
          <br />
          <span className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-extrabold">
            Expo 2019
          </span>
        </h1>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-5 gap-5 xl:pb-20 lg:pb-16 md:pb-20 sm:pb-16">
        <div className="xl:row-span-3 lg:row-span-3 md:row-span-3 sm:row-span-3 hidden xl:grid lg:grid md:grid sm:grid xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 self-center text-center">
          <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl">
            Domestik
            <br />
            <span className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl font-extrabold">
              Expo
            </span>
          </h1>
        </div>
        <img
          className="h-5/6 self-end xl:justify-self-end lg:justify-self-end md:justify-self-end sm:justify-self-end justify-self-center relative z-10"
          src={require("../assets/domestik1.jpeg")}
          alt="domestik1"
        />
        <img
          className="h-5/6 xl:self-end lg:self-end md:self-end sm:self-end self-center justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/domestik2.jpeg")}
          alt="domestik2"
        />
        <img
          className="h-5/6 xl:self-end lg:self-end md:self-end sm:self-end self-center justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/domestik3.jpeg")}
          alt="domestik3"
        />
        <img
          className="h-5/6 xl:self-end lg:self-end md:self-end sm:self-end self-center justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/domestik4.jpeg")}
          alt="domestik4"
        />
        <img
          className="h-5/6 xl:self-end lg:self-end md:self-end sm:self-end self-center justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/domestik5.jpeg")}
          alt="domestik5"
        />
        <img
          className="h-5/6 xl:self-end lg:self-end md:self-end sm:self-end self-center justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/domestik6.jpeg")}
          alt="domestik6"
        />
        <img
          className="h-5/6 xl:self-end lg:self-end md:self-end sm:self-end self-center justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/domestik7.jpeg")}
          alt="domestik7"
        />
        <img
          className="h-5/6 xl:self-end lg:self-end md:self-end sm:self-end self-center justify-self-center xl:justify-self-start lg:justify-self-start md:justify-self-start sm:justify-self-start relative z-10"
          src={require("../assets/domestik8.jpeg")}
          alt="domestik8"
        />
      </div>
      <div className="flex pb-20 justify-center xl:hidden lg:hidden md:hidden sm:hidden text-center">
        <h1 className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl">
          Domestik
          <br />
          <span className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-extrabold">
            Expo
          </span>
        </h1>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-33rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-55rem)] lg:top-[calc(100%-50rem)] md:top-[calc(100%-50rem)] sm:top-[calc(100%-50rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(11% 100%, 11% 56%, 6% 48%, 2% 44%, 0% 46%, 0% 89%)",
          }}
          className="relative left-[calc(50%+7rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem] xl:left-[calc(50%+1rem)] lg:left-[calc(50%+1rem)] md:left-[calc(50%+6rem)]"
        />
      </div>
    </div>
  );
};

export default Expo;
