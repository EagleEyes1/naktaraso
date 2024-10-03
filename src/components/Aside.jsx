import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faPodcast,
  faNoteSticky,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  return (
    <aside className="fixed bottom-8 right-8 z-50">
      <div className="flex h-full z-50">
        <ul className="flex flex-col m-auto p-2 z-50 bg-[#E8B86D]/100 items-center justify-center gap-4 rounded-lg">
          <li className="list-none">
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
          <li className="list-none">
            <a href="#" className="text-3xl text-white no-underline">
              <FontAwesomeIcon icon={faPodcast} />
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="text-3xl text-white no-underline">
              <FontAwesomeIcon icon={faNoteSticky} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
