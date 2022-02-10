import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useState } from 'react';
import Modal from './Components/Modal';


function App() {

  const [Name, setName] = useState("")
  const [Discription, setDiscription] = useState("")
  const [display, setdisplay] = useState({
    display: "none"
  })
 
  const openModal = (Name, Discription, Salary) => {
    setName(Name)
    setDiscription(Discription)
    setdisplay({
      display: "block"
    })
      }

      const closeModal = () => {
        setdisplay({
          display: "none"
        })
            }

  return (
    <>
    <Navbar />
    <Home openModal ={openModal} />
    <Modal display = {display} closeModal = {closeModal} Name = {Name} Discription = {Discription} />
    </>
  );
}

export default App;
