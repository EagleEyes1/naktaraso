import React from "react";
import sapiImage from "../assets/sapi.jpeg";
import belutImage from "../assets/belut.jpeg";
import tunaImage from "../assets/tuna.jpeg";
import leleImage from "../assets/lele.jpeg";
import satsetImage from "../assets/satset.png";
import crackerImage from "../assets/telur.jpg";

const products = [
  {
    id: 1,
    name: "RENDANG SAPI FOR KIDS",
    href: "https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1",
    price: "RP. 45000",
    imageSrc: sapiImage,
    imageAlt: "Rendang Sapi",
  },
  {
    id: 2,
    name: "RENDANG BELUT FOR KIDS",
    href: "https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1",
    price: "RP. 45000",
    imageSrc: belutImage,
    imageAlt: "Rendang Belut",
  },
  {
    id: 3,
    name: "RENDANG TUNA FOR KIDS",
    href: "https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1",
    price: "RP. 40000",
    imageSrc: tunaImage,
    imageAlt: "Rendang Tuna",
  },
  {
    id: 4,
    name: "RENDANG LELE FOR KIDS",
    href: "https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1",
    price: "RP. 35000",
    imageSrc: leleImage,
    imageAlt: "Rendang Lele",
  },
  {
    id: 5,
    name: "RENDANG SATSET DAGING SAPI",
    href: "https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1",
    price: "RP. 65000",
    imageSrc: satsetImage,
    imageAlt: "Rendang Satset",
  },
  {
    id: 6,
    name: "RENDANG CRACKERS",
    href: "https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1",
    price: "RP. 25000",
    imageSrc: crackerImage,
    imageAlt: "Rendang Crackers",
  },
];

const Catalogue = () => {
  return (
    <div className="pt-14 text-center bg-[#fff8ee]">
      <h1 className="text-4xl font-semibold font-headertiga tracking-wider">
        Katalog Produk
      </h1>
      <div className="bg-transparent lg:pb-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 xl:pt-12">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                target="_blank"
                className="group z-10"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem) xl:top-[calc(100%-40rem)]"
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

export default Catalogue;
