import React from "react";

const Catalogue = () => {
  return (
    <div className="pt-14 text-center">
      <h1 className="pb-10 text-4xl font-semibold">KATALOG PRODUK</h1>
      <div className="flex flex-col py-8 items-center justify-center">
        <img className="w-2/5" src={require("../assets/sapi.jpeg")} />
        <p className="pt-5 font-semibold">
          RENDANG SAPI FOR KIDS
          <br />
          Rp. 45000
        </p>
      </div>
      <div className="flex flex-col py-8 items-center justify-center">
        <img className="w-2/5" src={require("../assets/belut.jpeg")} />
        <p className="pt-5 font-semibold">
          RENDANG BELUT FOR KIDS
          <br />
          Rp. 45000
        </p>
      </div>
      <div className="flex flex-col py-8 items-center justify-center">
        <img className="w-2/5" src={require("../assets/tuna.jpeg")} />
        <p className="pt-5 font-semibold">
          RENDANG TUNA FOR KIDS
          <br />
          Rp. 40000
        </p>
      </div>
      <div className="flex flex-col py-8 items-center justify-center">
        <img className="w-2/5" src={require("../assets/lele.jpeg")} />
        <p className="pt-5 font-semibold">
          RENDANG LELE FOR KIDS
          <br />
          Rp. 35000
        </p>
      </div>
      <div className="flex flex-col py-8 items-center justify-center">
        <img className="w-2/5" src={require("../assets/satset.png")} />
        <div className="mt-5 border-4 border-black">
          <p className="px-10 font-semibold">
            RENDANG SATSET DAGING SAPI
            <br />
            (Rendang Dewasa dalam kemasan sachet)
            <br />
            Rp. 65000
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-8 pb-16 items-center justify-center">
        <img className="w-2/5" src={require("../assets/telur.jpg")} />
        <p className="pt-5 font-semibold">
          RENDANG CRACKERS
          <br />
          Rp. 25000
        </p>
      </div>
    </div>
  );
};

export default Catalogue;
