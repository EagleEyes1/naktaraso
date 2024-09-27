import React from "react";
import styles from "../assets/css/Home.module.css";

const Home = () => {
  return (
    <div>
      <h1 className="mt-20 text-center text-3xl font-semibold">
        RENDANG INOVATIF INDONESIA
      </h1>
      <div className="mt-3 mb-10 text-center font-semibold">
        <i>
          Temukan aneka rendang inovatif dengan cita rasa nikmat, bermanfaat dan
          menggunakan bahan baku berkualitas
        </i>
      </div>
      <div className="relative">
        <img
          className="w-screen h-[35rem] opacity-80"
          src={require("../assets/rumah.jpeg")}
          alt="rumah"
        />
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className={styles.shapefill}
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className={styles.shapefill}
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className={styles.shapefill}
            ></path>
          </svg>
        </div>
      </div>

      <div className="container relative mx-auto py-28 px-32 grid grid-cols-2">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] bg-amber-800 opacity-50 rounded-full"></div>
        <div className="self-center z-10">
          <h1 className="pb-3 font-bold text-3xl">RENDANG FOR KIDS</h1>
          <i className="text-lg">
            ‘Rendang yang diolah secara khusus untuk anak anak, tidak pedas,
            tekstur gampang dikunyah anak dan berbahan baku berkualitas. Menjaga
            asupan protein dan nutrisi anak agar angka kecukupan gizi anak
            selalu baik’
          </i>
        </div>
        <div className="relative z-10">
          <img className="w-[32rem]" src={require("../assets/homepict1.png")} />
        </div>
      </div>

      <div className="container relative mx-auto px-32 grid grid-cols-2">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] bg-amber-800 opacity-50 rounded-full"></div>
        <div className="self-center z-10">
          <h1 className="pb-3 font-bold text-3xl">RENDANG SATSET</h1>
          <i className="text-lg">
            Rekomendasi rendang untuk para traveler, haji dan umroh. Memberikan
            kemudahan karena dikemasan per sachet per satu kali makan. Sangat
            higienis, praktis dan tidak belepotan’
          </i>
        </div>
        <div className="relative z-10">
          <img className="w-[32rem]" src={require("../assets/homepict2.png")} />
        </div>
      </div>

      <div className="container relative mx-auto px-32 grid grid-cols-2">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] bg-amber-800 opacity-50 rounded-full"></div>
        <div className="self-center z-10">
          <h1 className="pb-3 font-bold text-3xl">RENDANG CRACKERs</h1>
          <i className="text-lg">
            ‘Sensasi nikmatnya rendang yang dinikmati dalam renyahnya crackers’
          </i>
        </div>
        <div className="relative z-10">
          <img className="h-[40rem]" src={require("../assets/homepict3.png")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
