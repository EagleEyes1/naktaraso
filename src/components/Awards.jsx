import React from "react";

const Awards = () => {
  return (
    <div className="pt-14 mx-auto px-52 bg-[#fff8ee]">
      <h1 className="text-3xl font-semibold pb-12 text-center">Penghargaan</h1>

      <div className="grid grid-cols-3 gap-x-8 pb-12">
        <div className="flex flex-col text-center items-center justify-center relative">
          <img
            className="h-full w-full mb-3 object-cover relative rounded-3xl"
            src={require("../assets/award1.jpg")}
            alt="award1"
          />
          <div className="bg-[#E8B86D] p-4 absolute bottom-12 left-0 rounded-r-2xl ">
            <h2>Juara 1 Wirausaha Muda tahun 2019</h2>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center relative">
          <img
            className="h-full w-full mb-3 object-cover relative rounded-3xl"
            src={require("../assets/award2.jpeg")}
            alt="award2"
          />
          <div className="bg-[#E8B86D] p-4 absolute bottom-12 left-0 rounded-r-2xl">
            <h2>Juara 1 Wirausaha Muda tahun 2019</h2>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center relative">
          <img
            className="h-full w-full mb-3 object-cover relative rounded-3xl"
            src={require("../assets/award3.jpeg")}
            alt="award3"
          />
          <div className="bg-[#E8B86D] p-4 absolute bottom-12 left-0 rounded-r-2xl">
            <h2>Juara 1 Wirausaha Muda tahun 2019</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-8 pb-32">
        <div className="flex flex-col text-center items-center justify-center relative">
          <img
            className="h-full w-full mb-3 object-cover relative rounded-3xl"
            src={require("../assets/award4.jpeg")}
            alt="award4"
          />
          <div className="bg-[#E8B86D] p-4 absolute bottom-12 left-0 rounded-r-2xl">
            <h2>Juara 1 Wirausaha Muda tahun 2019</h2>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center relative">
          <img
            className="h-full w-full mb-3 object-cover relative rounded-3xl"
            src={require("../assets/award5.jpeg")}
            alt="award5"
          />
          <div className="bg-[#E8B86D] p-4 absolute bottom-12 left-0 rounded-r-2xl">
            <h2>Juara 1 Wirausaha Muda tahun 2019</h2>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center relative">
          <img
            className="h-full w-full mb-3 object-cover relative rounded-3xl"
            src={require("../assets/award6.jpg")}
            alt="award6"
          />
          <div className="bg-[#E8B86D] p-4 absolute bottom-12 left-0 rounded-r-2xl">
            <h2>Juara 1 Wirausaha Muda tahun 2019</h2>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center relative">
          <img
            className="h-full w-full mb-3 object-cover relative rounded-3xl"
            src={require("../assets/award7.jpg")}
            alt="award7"
          />
          <div className="bg-[#E8B86D] p-4 absolute bottom-12 left-0 rounded-r-2xl">
            <h2>Juara 1 Wirausaha Muda tahun 2019</h2>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-40rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(11% 100%, 11% 56%, 6% 48%, 2% 44%, 0% 46%, 0% 89%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] xl:left-[calc(50%-20rem)]"
        />
      </div>
    </div>
  );
};

export default Awards;
