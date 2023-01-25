import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.5, type: "spring", stiffness: 50, duration: 0.1 },
  },
};
const modalVariants = {
  hidden: { y: "-100vw" },
  visible: {
    y: "5vw",
    transition: { delay: 0.1, type: "spring", stiffness: 50, duration: 0.1 },
  },
  exit: { y: "-100vw" },
};

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          className="backdrop"
          exit="exit"
        >
          <motion.div
            variants={modalVariants}
            exit="exit"
            className="modalContainer"
          >
            <h1>Do you want to order more pizzas?</h1>
            <Link to="/">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Order more
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
