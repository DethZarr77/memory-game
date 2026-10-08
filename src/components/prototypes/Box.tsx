import { motion } from "motion/react";
import type { MouseEventHandler } from "react";

type BoxProps = {
    handleShow: MouseEventHandler<HTMLDivElement>;
  };
  
  const Box = ({ handleShow }: BoxProps) => {
    return (
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 1.1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        className="cursor-pointer flex items-center justify-center h-20 w-20 bg-amber-400 hover:bg-amber-300 rounded-lg p-2"
        onClick={handleShow}
      >
        click me to destroy
      </motion.div>
    );
  };

  export default Box;