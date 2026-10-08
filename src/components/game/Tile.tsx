import React from "react";
import { motion } from "motion/react";

type TileProps = {
  id: number;
  selected: boolean;
  matched: boolean;
  text: string;
  onClick: (id: number) => void;
};

const Tile = ({ id, selected, matched, text, onClick }: TileProps) => {
  const handleTileClick = (id: number) => {
    if (!selected) {
      onClick(id);
    }
  };

  if (matched) {
    return (
      <div className="flex items-center justify-center h-20 transition-colors duration-200  border-4 border-dashed border-purple-200 text-2xl font-bold text-white rounded-lg">
        {text}
      </div>
    );
  }

  return (
    <motion.div
      initial={false}
      animate={{ rotateY: selected ? 180 : 0 }}
      id={`slot-${id}`}
      onClick={() => handleTileClick(id)}
      className={"h-full min-h-0 shadow-sm transition-colors duration-200  text-2xl font-bold text-white rounded-lg relative transform-3d bg-gray-200 cursor-pointer"}
    >
      {/* front */}
      <div className="rounded-lg front w-full h-full absolute top-0 bg-blue-600 rotate-y-0 backface-hidden">
        front
      </div>
      {/* back */}
      <div className="rounded-lg back w-full h-full absolute top-0 bg-red-600 rotate-y-180 backface-hidden">
        back
      </div>
    </motion.div>
  );
};

export default Tile;

/**
 * 
 * <motion.div
      initial={false}
      animate={{ rotateY: rotate }}
      id={`slot-${id}`}
      onClick={() => handleTileClick(id)}
      className={[
        "flex items-center justify-center, transition-colors duration-200  text-2xl font-bold text-white rounded-lg",
        "w-20 h-20 bg-gray-400 relative transform-3d",
        !selected ? "hover:bg-purple-400 bg-purple-600 cursor-pointer" : "",
        selected ? "bg-pink-800 cursor-not-allowed" : "",
      ].join(" ")}
    >
 * 
 * return (
    <div
      onClick={() => handleTileClick(id)}
      id={`slot-${id}`}
      className={[
        "flex items-center justify-center h-20 transition-colors duration-200  text-2xl font-bold text-white rounded-lg",
        !selected ? "hover:bg-purple-400 bg-purple-600 cursor-pointer" : "",
        selected ? "bg-pink-800 cursor-not-allowed" : "",
      ].join(" ")}
    >
      {text}
    </div>
  );
 */
