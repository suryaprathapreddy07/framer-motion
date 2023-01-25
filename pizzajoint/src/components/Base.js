import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const baseContainerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 120,
      duration: 1,
    },
  },
  exit:{
    x:'-100vw',transition:{ease:'easeInOut'}
  }
};

const nextButtonVariants={
  hidden:{opacity:0,x:'100vw'},
  visible:{opacity:1,x:0,
  transition:{duration:1,type:'spring',stiffness:120}
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={baseContainerVariants}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "yellow" }}
              transition={{ type: "spring", stiffness: 120 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
        variants={nextButtonVariants}
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px #fff",
                boxShadow: "0 0 8px #fff",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
