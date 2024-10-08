import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMessage,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isConfirming, setConfirming] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true); // Open modal when form is submitted
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7f99m1t", "template_6ijswa5", form.current, {
        publicKey: "Y3WsT7DrGPel8vYrn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setModalOpen(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Pesan Berhasil Dikirim!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="mt-14 mx-auto pb-16 bg-[#fff8ee] px-8 xl:px-40 lg:px-20 md:px-32 sm:px-16 xl:pb-20 lg:pb-20 md:pb-14 sm:pb-16">
      <h1 className="text-4xl font-semibold pb-12 font-headertiga tracking-wider">
        Kontak Kami
      </h1>
      <div className="grid gap-y-16 md:gap-y-28 sm:gap-y-28 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
        <div className="pl-10 border-l-8 border-[#E8B86D]">
          <div>
            <h2 className="pb-3  font-semibold">Rumah Produksi :</h2>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-5" />
              Jl. Jambu Air Angat, Padang Belimbing, Koto Sani, Kec. X Koto
              Singkarak, Kabupaten Solok, Sumatera Barat, Indonesia
            </p>
          </div>
          <div>
            <h2 className="py-3 font-semibold">Kantor :</h2>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-5" />
              Jl. Jambu Air Angat, Padang Belimbing, Koto Sani, Kec. X Koto
              Singkarak, Kabupaten Solok, Sumatera Barat, Indonesia
            </p>
          </div>
          <div>
            <h2 className="py-3 font-semibold">Distribution Point 1 :</h2>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-5" />
              Jl. Berok 3, No 323 C, Pasar Pandan Air Mati, Kec. Tanjung
              Harapan, Kota Solok, Sumatera Barat, Indonesia
            </p>
          </div>
          <div>
            <h2 className="py-3 font-semibold">Distribution Point 2 :</h2>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-5" />
              Dukuh Zamrud, Blok R No 1, Mustika Jaya, Kota Bekasi, Jawa Barat
            </p>
          </div>
          <div className="pt-8">
            <h2 className="pb-5 font-semibold">Online Marketplace</h2>
            <div className="flex gap-x-8 pb-5">
              <a
                href="https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1"
                target="_blank"
              >
                <img
                  className="w-20 relative z-10"
                  src={require("../assets/shopee.png")}
                  alt=""
                />
              </a>

              <a href="https://www.tokopedia.com/nak-taraso" target="_blank">
                <img
                  className="w-20 relative z-10"
                  src={require("../assets/tokopedia.png")}
                  alt=""
                />
              </a>
            </div>
            <h2 className="font-semibold">More Information</h2>
            <div className="grid grid-cols-2">
              <div>
                <p>
                  <FontAwesomeIcon className="pr-3" icon={faComment} />
                  WhatsApp
                </p>
                <p>081275740024</p>
              </div>
              <div className="break-words">
                <p>
                  <FontAwesomeIcon className="pr-3" icon={faMessage} />
                  Email
                </p>
                <p>rendangnaktaraso@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center px-2 sm:px-10 lg:px-10 xl:px-8 md:px-10">
          <div className="bg-[#E8B86D] py-10 rounded-xl xl:px-10 px-7 sm:px-10 lg:px-10 md:px-14 relative z-10">
            <h1 className="text-center font-semibold pb-8">Formulir Kontak</h1>

            <form
              ref={form}
              onSubmit={handleFormSubmit}
              class="xl:max-w-md lg:max-w-md md:max-w-lg sm:max-w-md mx-auto"
            >
              <div class="relative z-0 w-full mb-5 group">
                <input
                  autocomplete="off"
                  type="text"
                  name="fname"
                  id="fname"
                  class="block pt-3 pb-2 lg:pt-3 lg:pb-2 xl:pt-3 xl:pb-3 md:pt-3 md:pb-2 sm:pt-3 sm:pb-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  for="fname"
                  class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nama Kamu
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  autocomplete="off"
                  type="email"
                  name="email"
                  id="email"
                  class="block pt-3 pb-2 lg:pt-3 lg:pb-2 xl:pt-3 xl:pb-3 md:pt-3 md:pb-2 sm:pt-3 sm:pb-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    autocomplete="off"
                    type="tel"
                    name="phone"
                    id="phone"
                    class="block pt-3 pb-2 lg:pt-3 lg:pb-2 xl:pt-3 xl:pb-3 md:pt-3 md:pb-2 sm:pt-3 sm:pb-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="phone"
                    class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    No. Telepon
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    autocomplete="off"
                    type="text"
                    name="company"
                    id="company"
                    class="block pt-3 pb-2 lg:pt-3 lg:pb-2 xl:pt-3 xl:pb-3 md:pt-3 md:pb-2 sm:pt-3 sm:pb-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="company"
                    class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Perusahaan
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <textarea
                  autocomplete="off"
                  rows={5}
                  name="message"
                  id="message"
                  class="block pt-3 pb-2 lg:pt-3 lg:pb-2 xl:pt-3 xl:pb-3 md:pt-3 md:pb-2 sm:pt-3 sm:pb-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  for="message"
                  class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Pesan
                </label>
              </div>

              <button
                data-modal-target="popup-modal"
                data-modal-toggle="popup-modal"
                type="submit"
                class="bg-[#ffeedc] hover:bg-[#ffeedc]/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-23rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-50rem)] lg:top-[calc(100%-50rem)] md:top-[calc(100%-35rem)] sm:top-[calc(100%-35rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(11% 100%, 11% 56%, 6% 48%, 2% 44%, 0% 46%, 0% 89%)",
          }}
          className="relative left-[calc(50%+33rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+56rem)] sm:w-[72.1875rem] xl:left-[calc(50%+80rem)] lg:left-[calc(50%+62rem)] md:left-[calc(50%+62rem)]"
        />
      </div>
      {isModalOpen && (
        <div
          id="popup-modal"
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setModalOpen(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Yakin mengirim pesan?
                </h3>
                <button
                  type="button"
                  onClick={(e) => {
                    sendEmail(e);
                    setModalOpen(false);
                  }}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Ya, saya yakin
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Belum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
