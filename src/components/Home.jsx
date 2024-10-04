import React, { useState, useRef, useEffect } from "react";
import styles from "../assets/css/Home.module.css";
import Lottie from "react-lottie";
import animationData from "../assets/youtube.json";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.requestFullscreen();
      }
    }, 100);
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#ffeedc] py-16">
        <h1 className="pt-14 text-center font-header text-5xl font-bold tracking-wide">
          RENDANG INOVATIF INDONESIA
        </h1>
        <div className="mt-3 mb-10 text-center font-semibold">
          <i>
            Temukan aneka rendang inovatif dengan cita rasa nikmat, bermanfaat
            dan menggunakan bahan baku berkualitas
          </i>
        </div>
      </div>

      <div className="bg-[#fff8ee] relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-90rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(84% 100%, 74% 57%, 54% 36%, 28% 22%, 9% 5%, 2% 1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] xl:left-[calc(50%+6rem)]"
          />
        </div>
        <div
          ref={containerRef}
          className="absolute left-1/2 z-10 -top-28 transform -translate-x-1/2 flex justify-center items-center text-center"
        >
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="play-button text-white rounded-full p-4 hover:opacity-75"
            >
              <Lottie options={defaultOptions} height={180} width={180} />
            </button>
          ) : (
            <iframe
              ref={iframeRef}
              id="videoIframe"
              className="rounded-2xl"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q7KcoNmWyC0?si=A2VJ3QXKGDA_ucfl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
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
        <div className="container z-10 relative mx-auto py-56 px-32 grid grid-cols-2">
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

        <div className="container z-10 relative mx-auto px-32 -top-12 grid grid-cols-2">
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

        <div className="container z-10 relative mx-auto px-32 grid grid-cols-2">
          <div className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] bg-amber-800 opacity-50 rounded-full"></div>
          <div className="self-center z-10">
            <h1 className="pb-3 font-bold text-3xl">RENDANG CRACKERs</h1>
            <i className="text-lg">
              ‘Sensasi nikmatnya rendang yang dinikmati dalam renyahnya
              crackers’
            </i>
          </div>
          <div className="relative z-10 ">
            <img
              className="h-[40rem] z-10"
              src={require("../assets/homepict3.png")}
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-55rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(11% 100%, 11% 56%, 6% 48%, 2% 44%, 0% 46%, 0% 89%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] xl:left-[calc(50%+1rem)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
