import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const containerVariants={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  },
  exit:{
    x:'-100vw',
    transition:{ease:"easeInOut"}
  }
}

const loaderVariants={
  animationOne:{
    x:[-20,0, 20],y:[0,-20],
    transition:{
      x:{
        duration:0.5,
        yoyo:Infinity
      },y:{
        duration:0.25,
        yoyo:Infinity,
        ease:'easeOut'
      }
    },
  },
  animationTwo:{

    x:0,y:[0,-40],
    transition:{
      y:{
        duration:0.5,
        yoyo:Infinity,
        ease:'easeOut'
      }
    },
  }
}

const Home = () => {

  const [animation,cycleAnimation]=useCycle('animationOne','animationTwo')
 
  return (
    <motion.div
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
        whileHover={{scale:1.1,textShadow:'0 0 8px #fff',boxShadow:'0 0 8px #fff'}}
        // animate={{}}
        >Create Your Pizza</motion.button>
      </Link>
      <motion.div className="loader"
      variants={loaderVariants}
      animate={animation}></motion.div>
      <button className="loaderBtn" onClick={()=>{cycleAnimation()}}>change loader</button>
    </motion.div>
  );
};

export default Home;
