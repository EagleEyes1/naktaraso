import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faPodcast,
  faNoteSticky,
  faEnvelope,
  faComment,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  return (
    <aside className="fixed bottom-32 xl:bottom-32 lg:bottom-24 md:bottom-28 sm:bottom-28 right-5 xl:right-8 lg:right-8 md:right-5 sm:right-5 z-10">
      <div className="flex h-full z-50">
        <ul className="flex flex-col m-auto p-2 z-50 bg-[#E8B86D]/100 items-center justify-center gap-4 rounded-lg">
          <li className="list-none hover:opacity-90">
            <a
              target="_blank"
              href="https://wa.me/+6281275740024"
              className="text-3xl text-white no-underline"
            >
              <img
                className="w-10 h-10"
                src={require("../assets/whatsapp.png")}
                alt="wa"
              />
            </a>
          </li>
          <li className="list-none hover:opacity-90">
            <a
              href="/aboutus#sertif"
              className="text-3xl text-white no-underline"
            >
              <FontAwesomeIcon icon={faCertificate} />
            </a>
          </li>
          <li className="list-none hover:opacity-90">
            <a href="/contactus" className="text-3xl text-white no-underline">
              <FontAwesomeIcon icon={faNoteSticky} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
