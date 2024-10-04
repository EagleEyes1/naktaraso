import React from "react";

const Partner = () => {
  return (
    <div className="mx-auto px-52 bg-[#fff8ee]">
      <div className="pb-32">
        <h1 className="pt-16 text-center text-3xl font-bold">Mitra Kami</h1>
        <div className="grid grid-cols-4 items-center">
          <img src={require("../assets/mitra1.png")} alt="lulu" />
          <img src={require("../assets/mitra2.png")} alt="budiman" />
          <img src={require("../assets/mitra3.png")} alt="pasarbuah" />
          <img src={require("../assets/mitra4.png")} alt="oleholeh" />
          <img src={require("../assets/mitra5.png")} alt="christine" />
          <img src={require("../assets/mitra6.png")} alt="chip" />
          <img src={require("../assets/mitra7.png")} alt="miniku" />
          <img src={require("../assets/mitra8.png")} alt="haiswal" />
        </div>
        <div className="flex items-center justify-center text-center mx-auto">
          <img
            className="w-80"
            src={require("../assets/mitra9.png")}
            alt="haimart"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(11% 100%, 11% 56%, 6% 48%, 2% 44%, 0% 46%, 0% 89%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] xl:left-[calc(50%+70rem)]"
        />
      </div>
    </div>
  );
};

export default Partner;
