import React, { useState ,useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Modal from './components/Modal';

// useCycle() hook is used to change animations based on user interactions

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal,setShowModal]=useState(false)
  const location=useLocation()

  
  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
    <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <Header />
    
    
      <AnimatePresence exitBeforeEnter onExitComplete={()=>{
        setShowModal(false)
      }}>
      <Switch location={location} key={location.key}>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} setShowModal={setShowModal} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;