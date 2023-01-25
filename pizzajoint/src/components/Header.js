import React from 'react';
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
      drag
      dragConstraints={{top:0,bottom:0,left:0,right:0}}>
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
          initial={{opacity:0,pathLength:0}}
          animate={{opacity:1,pathLength:1,transition:{duration:2,ease:'easeInOut'}}}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
           initial={{opacity:0,pathLength:0}}
           animate={{opacity:1,pathLength:1,transition:{duration:2,ease:'easeInOut'}}}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </motion.div>
      <motion.div
      initial={{y:-100}}
      animate={{y:0}}
      transition={{delay:0.1,duration:1,type:'spring',stiffness:120}}
      className="title">
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;