import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("halo");
    emailjs
      .sendForm("service_7f99m1t", "template_6ijswa5", form.current, {
        publicKey: "Y3WsT7DrGPel8vYrn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="mt-14 mx-auto px-52">
      <h1 className="text-5xl font-extrabold pb-12">Kontak Kami</h1>
      <div className="grid grid-cols-2">
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
                  className="w-20"
                  src={require("../assets/shopee.png")}
                  alt=""
                />
              </a>

              <img
                className="w-20"
                src={require("../assets/tokopedia.png")}
                alt=""
              />
            </div>
            <h2 className="font-semibold">More Information</h2>
            <div className="grid grid-cols-2">
              <div>
                <p>WhatsApp</p>
                <p>081275740024</p>
              </div>
              <div>
                <p>Email</p>
                <p>rendangnaktaraso@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center px-10">
          <div className="bg-[#E8B86D] py-10 rounded-xl">
            <h1 className="text-center pb-8">Formulir Kontak</h1>

            <form ref={form} onSubmit={sendEmail} class="max-w-md mx-auto">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
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
                  type="email"
                  name="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
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
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="phone"
                    id="phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="phone"
                    class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="company"
                    class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company (Ex. Google)
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <textarea
                  rows={5}
                  name="message"
                  id="message"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
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
                type="submit"
                class="bg-[#ffeedc] hover:bg-[#ffeedc]/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
