import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="z-20 sticky top-0 bg-[#E8B86D] opacity-100 shadow-sm text-[#200000]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[90rem] items-center justify-between p-6 lg:px-12"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={require("../assets/logo2.png")}
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-24"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:text-base lg:text-right xl:text-left lg:pl-20 xl:pl-0 xl:text-lg lg:gap-x-8 xl:gap-x-12">
          <a
            href="/"
            className="font-semibold leading-6 text-gray-900 hover:underline"
          >
            Beranda
          </a>
          <a
            href="/aboutus"
            className="font-semibold leading-6 text-gray-900 hover:underline"
          >
            Tentang Kami
          </a>
          <a
            href="catalogue"
            className="font-semibold leading-6 text-gray-900 hover:underline"
          >
            Katalog Produk
          </a>

          <a
            href="/expo"
            className="font-semibold leading-6 text-gray-900 hover:underline"
          >
            Expo
          </a>
          <a
            href="/awards"
            className="font-semibold leading-6 text-gray-900 hover:underline"
          >
            Penghargaan
          </a>
          <a
            href="/partner"
            className="font-semibold leading-6 text-gray-900 hover:underline"
          >
            Kemitraan
          </a>
          <a
            href="contactus"
            className="font-semibold leading-6 text-gray-900 hover:underline"
          >
            Kontak Kami
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden xl:hidden"
      >
        <div className="fixed inset-0 z-20 backdrop-blur-md" />
        <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-[#E8B86D] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="logo"
                src={require("../assets/logo2.png")}
                className="h-12 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#ffeedc]/50"
                >
                  Beranda
                </a>
                <a
                  href="/aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#ffeedc]/50"
                >
                  Tentang Kami
                </a>
                <a
                  href="/catalogue"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#ffeedc]/50"
                >
                  Katalog Produk
                </a>
                <a
                  href="/expo"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#ffeedc]/50"
                >
                  Expo
                </a>
                <a
                  href="/awards"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#ffeedc]/50"
                >
                  Penghargaan
                </a>
                <a
                  href="partner"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#ffeedc]/50"
                >
                  Kemitraan
                </a>
                <a
                  href="contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#ffeedc]/50"
                >
                  Kontak Kami
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
