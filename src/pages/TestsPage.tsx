import { AnimatePresence } from "motion/react";
import React, { useState } from "react";
import Box from "../components/prototypes/Box";

const TestsPage = () => {
  const boxes = 4;
  const [showMap, setShowMap] = useState(() =>
    Array.from({ length: boxes }, (_, index) => ({
      id: index,
      show: true,
    })),
  );

  const handleReset = () => {
    setShowMap(
      Array.from({ length: boxes }, (_, index) => ({
        id: index,
        show: true,
      })),
    );
  };

  const handleShow = (id: number, newShow: boolean) => {
    setShowMap((prev) =>
      prev.map((box) => (box.id === id ? { id: box.id, show: newShow } : box)),
    );
  };

  return (
    <React.Fragment>
      <h2>Destroy Animation Test</h2>
      <div className="flex flex-col gap-2">
        <button
          className="bg-red-400 text-white p-2 rounded-lg"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
        <div className="grid grid-rows-1 grid-cols-4">
          <AnimatePresence>
            {showMap
              .filter((box) => box.show)
              .map((box) => (
                <Box
                  key={box.id}
                  handleShow={() => handleShow(box.id, false)}
                />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestsPage;
