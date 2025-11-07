import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

const MidMenu = () => {
  const liItems = [
    { pageTo: "/", head: "Solusi", onHover: true },
    { pageTo: "/", head: "Harga", onHover: false },
    { pageTo: "/", head: "Bahan gratis", onHover: true },
    { pageTo: "/", head: "Terbaru", onHover: true },
  ];

  return (
    <div className="flex gap-8 text-[#004751] text-sm">
      {liItems.map((e, i) => (
        <LinkItem key={i} pageTo={e.pageTo} head={e.head} onHover={e.onHover} />
      ))}
    </div>
  );
};

const LinkItem = ({ pageTo, head, onHover }) => {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);

  const openHover = () => {
    if (onHover) {
      clearTimeout(timeoutRef.current);
      setHovered(true);
    }
  };

  const closeHover = () => {
    // small delay prevents flicker when moving between link and card
    timeoutRef.current = setTimeout(() => setHovered(false), 320);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={openHover}
      onMouseLeave={closeHover}
    >
      <Link
        className="flex font-medium items-end cursor-pointer hover:text-teal-700"
        to={pageTo}
      >
        {head}
        {onHover &&
          (hovered ? (
            <ChevronUp size={16} strokeWidth={3} />
          ) : (
            <ChevronDown size={16} strokeWidth={3} />
          ))}
      </Link>

      {hovered && (
        <div
          className="
            fixed left-1/2 top-24 -translate-x-1/2 w-[80%] max-w-6xl 
            bg-[#f5fdfd] rounded-2xl p-6 z-40 text-lg
          "
          onMouseEnter={openHover} // keep visible when hovering card
          onMouseLeave={closeHover} // close only after leaving both
        >
          <div className="flex justify-around text-gray-800">
            <div className="flex items-center gap-2">
              <p className="font-medium">{head} — Hover Card Content</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MidMenu;
