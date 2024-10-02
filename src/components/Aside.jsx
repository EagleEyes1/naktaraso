import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faPodcast,
  faNoteSticky,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  return (
    <aside className="fixed bottom-8 right-8">
      <div className="flex h-full">
        <ul className="flex flex-col m-auto p-2 bg-slate-600 items-center justify-center gap-4 rounded-lg">
          <li className="list-none">
            <a
              target="_blank"
              href="https://wa.me/+6281275740024"
              className="text-3xl text-white no-underline"
            >
              <FontAwesomeIcon icon={faEnvelope} />
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
