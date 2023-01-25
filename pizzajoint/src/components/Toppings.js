import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const containerVariants = {
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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
            whileHover={{scale:1.3,originX:0,color:'yellow'}}
            transition={{type:'spring',stiffness:120,duration:'200ms'}}
            key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        whileHover={{scale:1.1,textShadow:'0 0 8px #fff',boxShadow:'0 0 8px #fff'}}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;