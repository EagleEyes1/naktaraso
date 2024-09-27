import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-52">
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
            className="w-[50rem] rounded-xl"
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
        <p className="pt-1">
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
    </div>
  );
};

export default AboutUs;
