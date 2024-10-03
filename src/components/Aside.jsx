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
        <ul className="flex flex-col m-auto p-2 bg-[#E8B86D] items-center justify-center gap-4 rounded-lg">
          <li className="list-none">
            <a
              target="_blank"
              href="https://wa.me/+6281275740024"
              className="text-3xl text-white no-underline"
            >
              <FontAwesomeIcon icon={faComment} />
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
