import React from "react";

const AboutUs = () => {
  return (
    <div className="mx-auto px-52 z-10 bg-[#fff8ee]">
      <h1 className="pt-10 text-center text-3xl font-bold">Tentang Kami</h1>
      <div className="pt-6">
        <p className="text-lg leading-8">
          CV. Arrayyan Global Inovasi merupakan perusahaan inovatif yang
          membawahi dan mengelola brand Nak Taraso. Nak Taraso merupakan brand
          makanan olahan yang inovatif. Berdiri pada tahun 2018 dengan moto
          lifestyle nutrition (solusi gaya hidup perkotaan) dengan mengusung
          konsep ’Makanan Sehat dan Praktis’. Lebih dari sebuah brand kami
          adalah pemberi kenikmatan dan kemudahan bagi masyarakat luas. Sejak
          berdiri dari tahun 2018, kami sudah mulai memasarkan produk dari
          lingkungan terdekat dengan mitra mitra lokal yang ada dalam satu
          daerah. Terus membuka diri dan berupaya adaptif terhadap teknolgi dan
          perkembangan zaman. Pada tahun 2019 kami beradaptasi dengan channel
          penjualan melalui e-commerce dan ditahun yang sama kami mampu mengirim
          produk ke pelanggan hampir di seluruh Indonesia. Dengan bangga kami
          sampaikan bahwa produk kami telah mendapatkan sertifikat halal dari
          LPPOM MUI. Produksi telah distandardisasi sesuai Good Manufacturing
          Practices (GMP) dan Hazar Analysis and Critical Control Point (HACCP).
          Setiap hari kami menerapkan standardisasi tersebut untuk mencapai
          produk berkualitas tinggi.
        </p>
      </div>
      <div className="pt-5 grid grid-cols-2">
        <div>
          <p className="text-lg leading-8">
            <b>Sejarah Perusahaan</b> <br /> 2018 : Memulai Usaha <br />
            2019 : Mendirikan Perusahaan Perorangan <br />
            2020 : Mendirikan perusahaan berbadan hukum <br /> <br />
            Memulai usaha dengan Nama Nak taraso. Nak Taraso secara bahasa
            merupakan bahasa Minang dengan makna agar lebih terasa. Filosofinya
            adalah jika masyarakat luas sudah banyak mencicipi makanan terutama
            rendang dan mendapakan rasa yang biasa saja, maka untuk itu mari
            mencoba produk Nak taraso agar lebih terasa nikmatnya dan
            kualitasnya.
          </p>
        </div>
        <div>
          <img
            className="w-[50rem] rounded-xl z-20"
            src={require("../assets/aboutuspict1.jpeg")}
          />
        </div>
      </div>
      <div className="text-lg leading-8 ">
        <h1 className="pt-7">
          <b>Visi, Misi dan Budaya</b>
        </h1>
        <h2 className="pt-5">Visi Kami</h2>
        <p className="pt-1">
          Menjadi Perusahaan Inovatif, Berkualitas dan Berkelanjutan dalam
          Menciptakan Produk Makanan Mendunia
        </p>

        <h2 className="pt-5">Misi</h2>
        <p className="pt-1">
          <ul className="list-decimal">
            <li>Menguasai pasar dunia tahun 2035</li>
            <li>
              Memberi sentuhan inovasi pada setiap produk sebagai jawaban
              terhadap masalah yang ada
            </li>
            <li>
              Mencipatkan susana kerja kondusif dan komitmen terhadap aturan
            </li>
            <li>Menaikkan taraf hidup orang banyak </li>
          </ul>
        </p>
        <h2 className="pt-5">Budaya</h2>
        <p className="pt-1 pb-20">
          <ul className="list-decimal">
            <li>
              <b>Innovative</b> : Memberikan sentuhan inovasi pada setiap produk
              sebagai jawaban terhadap masalah yang ada
            </li>
            <li>
              <b>Quality</b> : Menciptakan produk yang diterima masyarakat dunia
            </li>
            <li>
              <b>Sustainable</b> : Menjaga bahan baku dan lingkungan untuk
              keberlanjutan usaha
            </li>
            <li>
              <b>Higienic</b> : Menjaga kebersihan produk dari hulu sampai ke
              hilir
            </li>
          </ul>
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-40rem)]"
      >
        <div
          style={{
            clipPath: "polygon(0% 100%, 32% 57%, 61% 25%, 93% 5%, 87% 18%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff0400] to-[#ff9300] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] xl:left-[calc(50%+6rem)]"
        />
      </div>
    </div>
  );
};

export default AboutUs;
