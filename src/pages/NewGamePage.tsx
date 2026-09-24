import React, { useState } from "react";
import TileGrid from "../components/game/TileGrid";

const TILE_COUNT = 12;
const matchMap = new Map();
const tiles = Array.from({ length: TILE_COUNT }, (v, i) => i + 1);

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const randomizeMatchMap = () => {
  const availableTiles = Array.from(tiles);
  const returnArray = [];

  do {
    const randomIndex = getRandomInt(availableTiles.length);
    returnArray.push(availableTiles[randomIndex]);
    availableTiles.splice(randomIndex, 1);
  } while (availableTiles.length);

  console.log("Randomized Array");
  console.log(returnArray);
  convertRandomArrayToMatchMap(returnArray);
};

const convertRandomArrayToMatchMap = (randomized: number[]) => {
  let counter = 1;

  // Just take two elements at a time out of the array and join
  for (let i = 0; i < randomized.length; i += 2) {
    const portion = randomized.slice(i, i + 2);
    const sortedPortion = portion.toSorted((a, b) => a - b);

    matchMap.set(
      sortedPortion.join(":"),
      counter.toString(),
    );
    counter++;
  }

  console.log(matchMap);
};

randomizeMatchMap();

const NewGamePage = () => {
  // console.log("Rendering Game");
  const [selection, setSelection] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [gameTiles] = useState<number[]>(tiles);

  const checkMatch = (pairs: number[]) => {

    if (pairs.length > 1) {
      const matchKey = pairs.toSorted((a, b) => a - b).join(":");
      if (matchMap.get(matchKey)) {
        const newMatchedPairs = matchedPairs.concat(pairs);
        setMatchedPairs(newMatchedPairs);
        setSelection([]);

        // Win Condition
        if(newMatchedPairs.length === (matchMap.size * 2)){
          alert("Congratulations, you've won !!!");
        }
      }
    }
  };

  const handleSelectionBuffer = (id: number) => {
    let next: number[];

    if (selection.length === 0) {
      next = [id];
    } else if (selection.length === 1) {
      next = [...selection, id];
    } else {
      next = [id];
    }

    setSelection(next);
    checkMatch(next);
  };

  const handleTileClick = (id: number) => {
    // console.log("Clicked on tile with ID", id);
    handleSelectionBuffer(id);
  };

  return (
    <React.Fragment>
      <h1>Match the pairs!</h1>
      <span>{selection.length ? selection.toString() : "-"}</span>
      <TileGrid
        tiles={gameTiles}
        matchedPairs={matchedPairs}
        selection={selection}
        onClick={handleTileClick}
      />
    </React.Fragment>
  );
};

export default NewGamePage;
