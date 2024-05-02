import Icon from "../../public/icons.png";
import { downloadImage } from "../utils/DownloadImg";
import {useState} from "react"

function Popover({ imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" absolute top-0 right-0 p-2">
      <button
        className="flex items-center text-gray-600 focus:outline-none"
        onClick={togglePopover}
      >
        <img src={Icon} className=" w-10 h-8" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 right-3">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => downloadImage(imageUrl)}
            >
              Download
            </button>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Delete
            </a>
            <a
              href={imageUrl}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              ver
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popover;
