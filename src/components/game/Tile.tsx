import React from "react";

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

  if(matched){
    return (
        <div className="flex items-center justify-center h-20 transition-colors duration-200  border-4 border-dashed border-purple-200 text-2xl font-bold text-white rounded-lg">
            {text}
        </div>
    )
  }

  return (
    <div
      onClick={() => handleTileClick(id)}
      id={`tile-${id}`}
      className={[
        "flex items-center justify-center h-20   transition-colors duration-200  border-4 border-purple-400 text-2xl font-bold text-white rounded-lg",
        !selected ? "hover:bg-purple-400 bg-purple-600 cursor-pointer" : "",
        selected ? "bg-pink-800 cursor-not-allowed" : "",
      ].join(" ")}
    >
      {text}
    </div>
  );
};

export default Tile;
