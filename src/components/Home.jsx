import React from "react";
import styles from "../assets/css/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className="bg-[#ffeedc] pb-20">
        <h1 className="pt-14 text-center text-3xl font-semibold">
          RENDANG INOVATIF INDONESIA
        </h1>
        <div className="mt-3 mb-10 text-center font-semibold">
          <i>
            Temukan aneka rendang inovatif dengan cita rasa nikmat, bermanfaat
            dan menggunakan bahan baku berkualitas
          </i>
        </div>
        <div className="mx-auto relative px-52 flex justify-center items-center text-center">
          <iframe
            className=" rounded-2xl"
            width="1000"
            height="570"
            src="https://www.youtube.com/embed/Q7KcoNmWyC0?si=A2VJ3QXKGDA_ucfl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="bg-[#fff8ee] relative">
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapefill}
            ></path>
          </svg>
        </div>
        <div className="container relative mx-auto py-28 px-32 grid grid-cols-2">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] bg-amber-800 opacity-50 rounded-full"></div>
          <div className="self-center z-10">
            <h1 className="pb-3 font-bold text-3xl">RENDANG FOR KIDS</h1>
            <i className="text-lg">
              ‘Rendang yang diolah secara khusus untuk anak anak, tidak pedas,
              tekstur gampang dikunyah anak dan berbahan baku berkualitas.
              Menjaga asupan protein dan nutrisi anak agar angka kecukupan gizi
              anak selalu baik’
            </i>
          </div>
          <div className="relative z-10">
            <img
              className="w-[32rem]"
              src={require("../assets/homepict1.png")}
            />
          </div>
        </div>

        <div className="container relative mx-auto px-32 grid grid-cols-2">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] bg-amber-800 opacity-50 rounded-full"></div>
          <div className="self-center z-10">
            <h1 className="pb-3 font-bold text-3xl">RENDANG SATSET</h1>
            <i className="text-lg">
              Rekomendasi rendang untuk para traveler, haji dan umroh.
              Memberikan kemudahan karena dikemasan per sachet per satu kali
              makan. Sangat higienis, praktis dan tidak belepotan’
            </i>
          </div>
          <div className="relative z-10">
            <img
              className="w-[32rem]"
              src={require("../assets/homepict2.png")}
            />
          </div>
        </div>

        <div className="container relative mx-auto px-32 grid grid-cols-2">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] bg-amber-800 opacity-50 rounded-full"></div>
          <div className="self-center z-10">
            <h1 className="pb-3 font-bold text-3xl">RENDANG CRACKERs</h1>
            <i className="text-lg">
              ‘Sensasi nikmatnya rendang yang dinikmati dalam renyahnya
              crackers’
            </i>
          </div>
          <div className="relative z-10">
            <img
              className="h-[40rem]"
              src={require("../assets/homepict3.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
