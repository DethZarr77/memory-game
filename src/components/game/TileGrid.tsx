import Tile from "./Tile";

type TileGridProps = {
  tiles: number[];
  matchedPairs: number[];
  selection: number[];
  onClick: (id: number) => void;
};

const TileGrid = ({
  matchedPairs,
  selection,
  tiles,
  onClick,
}: TileGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {tiles.map((item) => (
        <Tile
          key={`tile-key-${item}`}
          id={item}
          matched={matchedPairs.includes(item)}
          selected={selection.includes(item)}
          text={item.toString()}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default TileGrid;
