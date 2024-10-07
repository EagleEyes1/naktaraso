import React from "react";

const Partner = () => {
  return (
    <div className="mx-auto px-5 xl:px-48 lg:px-40 md:px-28 sm:px-16 bg-[#fff8ee]">
      <div className="xl:pb-32 lg:pb-44 md:pb-64 sm:pb-32 pb-20">
        <h1 className="pt-16 text-center text-3xl font-bold font-headertiga tracking-wider">
          Mitra Kami
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center gap-3 xl:gap-5 lg:gap-5 md:gap-3 sm:gap-5">
          <img
            className="relative z-10"
            src={require("../assets/mitra1.png")}
            alt="lulu"
          />
          <img
            className="relative z-10"
            src={require("../assets/mitra2.png")}
            alt="budiman"
          />
          <img
            className="relative z-10"
            src={require("../assets/mitra3.png")}
            alt="pasarbuah"
          />
          <img
            className="relative z-10"
            src={require("../assets/mitra4.png")}
            alt="oleholeh"
          />
          <img
            className="relative z-10"
            src={require("../assets/mitra5.png")}
            alt="christine"
          />
          <img
            className="relative z-10"
            src={require("../assets/mitra6.png")}
            alt="chip"
          />
          <img
            className="relative z-10"
            src={require("../assets/mitra7.png")}
            alt="miniku"
          />
          <img
            className="relative z-10"
            src={require("../assets/mitra8.png")}
            alt="haiswal"
          />
          <img
            className="hidden xl:hidden lg:hidden md:grid sm:hidden"
            src={require("../assets/mitra9.png")}
            alt="haiswal"
          />
        </div>
        <div className="flex xl:flex lg:flex md:hidden sm:flex items-center justify-center text-center mx-auto">
          <img
            className="relative z-10 w-60 xl:w-80 lg:w-64 md:w-80 sm:w-60 xl:flex lg:flex md:hidden sm:flex"
            src={require("../assets/mitra9.png")}
            alt="haimart"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-40rem)] lg:top-[calc(100%-40rem)] md:top-[calc(100%-40rem)] sm:top-[calc(100%-40rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(11% 100%, 11% 56%, 6% 48%, 2% 44%, 0% 46%, 0% 89%)",
          }}
          className="relative left-[calc(50%+32rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+56rem)] sm:w-[72.1875rem] xl:left-[calc(50%+70rem)] lg:left-[calc(50%+70rem)] md:left-[calc(50%+60rem)]"
        />
      </div>
    </div>
  );
};

export default Partner;
