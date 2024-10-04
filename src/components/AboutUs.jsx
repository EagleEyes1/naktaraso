import React from "react";
import styles from "../assets/css/Home.module.css";

const AboutUs = () => {
  return (
    <>
      <div className="mx-auto px-48 z-10  bg-[#ffeedc] py-20">
        <div className="py-16 px-20 grid grid-cols-2 bg-[#E8B86D] rounded-2xl shadow-md">
          <div className="self-center">
            <h1 className="text-3xl font-bold pb-8">Tentang Kami</h1>
            <p className="text-lg leading-8">
              CV. Arrayyan Global Inovasi merupakan perusahaan inovatif yang
              membawahi dan mengelola brand Nak Taraso. Nak Taraso merupakan
              brand makanan olahan yang inovatif. Berdiri pada tahun 2018 dengan
              moto lifestyle nutrition (solusi gaya hidup perkotaan) dengan
              mengusung konsep ’Makanan Sehat dan Praktis’. Lebih dari sebuah
              brand kami adalah pemberi kenikmatan dan kemudahan bagi masyarakat
              luas. <br /> Sejak berdiri dari tahun 2018, kami sudah mulai
              memasarkan produk dari lingkungan terdekat dengan mitra mitra
              lokal yang ada dalam satu daerah. Terus membuka diri dan berupaya
              adaptif terhadap teknologi dan perkembangan zaman. Pada tahun 2019
              kami beradaptasi dengan channel penjualan melalui e-commerce dan
              ditahun yang sama kami mampu mengirim produk ke pelanggan hampir
              di seluruh Indonesia.
            </p>
          </div>
          <div className="pl-28">
            <img
              className="h-full w-full z-20 rounded-xl xl:rounded-xl"
              src={require("../assets/aboutuspict11.jpeg")}
            />
          </div>
        </div>
      </div>
      <div className="relative">
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
      </div>
      <div className="mx-auto px-48 z-10 bg-[#fff8ee] pt-36">
        <div className="grid pb-5">
          <div>
            <p className="text-lg leading-8">
              Dengan bangga kami sampaikan bahwa produk kami telah mendapatkan
              sertifikat halal dari LPPOM MUI. Produksi telah distandardisasi
              sesuai Good Manufacturing Practices (GMP) dan Hazar Analysis and
              Critical Control Point (HACCP). Setiap hari kami menerapkan
              standardisasi tersebut untuk mencapai produk berkualitas tinggi.
              <br />
            </p>
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-lg pb-5">
            <b>Sejarah Perusahaan</b>
          </h1>
          <div className="text-lg leading-8 grid gap-y-3">
            <div className="pl-5 border-l-8 border-[#E8B86D]">
              2018 : Memulai Usaha
            </div>
            <div className="pl-5 border-l-8 border-[#E8B86D]">
              2019 : Mendirikan Perusahaan Perorangan
            </div>
            <div className="pl-5 border-l-8 border-[#E8B86D]">
              2020 : Mendirikan perusahaan berbadan hukum
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div className="text-lg leading-8">
            Memulai usaha dengan Nama Nak taraso. Nak Taraso secara bahasa
            merupakan bahasa Minang dengan makna agar lebih terasa. Filosofinya
            adalah jika masyarakat luas sudah banyak mencicipi makanan terutama
            rendang dan mendapakan rasa yang biasa saja, maka untuk itu mari
            mencoba produk Nak taraso agar lebih terasa nikmatnya dan
            kualitasnya.
          </div>
        </div>
      </div>

      <div className="text-lg leading-8 bg-[#fff8ee] px-48 pt-5 pb-48 relative z-0">
        <div className="pt-7 grid grid-cols-3 gap-x-10">
          <div className="bg-[#E8B86D] p-10 rounded-xl">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Visi Kami</h2>
              <p className="pt-1">
                Menjadi Perusahaan Inovatif, Berkualitas dan Berkelanjutan dalam
                Menciptakan Produk Makanan Mendunia
              </p>
            </div>
          </div>

          <div className="bg-[#E8B86D] p-10 rounded-xl">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Misi</h2>
              <p className="pt-1">
                <ul className="list-decimal">
                  <li>Menguasai pasar dunia tahun 2035</li>
                  <li>
                    Memberi sentuhan inovasi pada setiap produk sebagai jawaban
                    terhadap masalah yang ada
                  </li>
                  <li>
                    Mencipatkan susana kerja kondusif dan komitmen terhadap
                    aturan
                  </li>
                  <li>Menaikkan taraf hidup orang banyak </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="bg-[#E8B86D] p-10 rounded-xl">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Budaya</h2>
              <p className="pt-1">
                <ul className="list-decimal">
                  <li>
                    <b>Innovative</b> : Memberikan sentuhan inovasi pada setiap
                    produk sebagai jawaban terhadap masalah yang ada
                  </li>
                  <li>
                    <b>Quality</b> : Menciptakan produk yang diterima masyarakat
                    dunia
                  </li>
                  <li>
                    <b>Sustainable</b> : Menjaga bahan baku dan lingkungan untuk
                    keberlanjutan usaha
                  </li>
                  <li>
                    <b>Higienic</b> : Menjaga kebersihan produk dari hulu sampai
                    ke hilir
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-5rem)]"
      >
        <div
          style={{
            clipPath: "polygon(0% 100%, 32% 57%, 61% 25%, 93% 5%, 87% 18%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] xl:left-[calc(50%+60rem)]"
        />
      </div>
    </>
  );
};

export default AboutUs;
