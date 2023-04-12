import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styled from 'styled-components';
import { useState, useEffect } from 'react'

import useFetch from './util/useFetch.js';

import Navbar from './component/Navbar.js';
import Sidebar from './component/Sidebar.js';
import Home from "./component/Home.js";
import AllNotes from "./component/AllNotes.js";
import Important from "./component/Important.js";
import Deleted from "./component/Deleted.js";
import Create from "./component/Create.js";


const Center = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
  transition: 1s;
  
  &.show {
    display: block;
    transition: 1s;
  }
`

const Navi = styled(Navbar)`
  position: fixed;
`

const Fixer = styled.div`
  &.show-menu {
    transition: 1s;
    width: 25%;
    background-color: transparent;
  }

  &.hide-menu {
    transition: 1s;
    width: 0;
  }
`

function App() {
  const [isOpen, setMenu] = useState(false);

  const allNotes = useFetch("http://localhost:3002/allnotes/")
  const important = useFetch("http://localhost:3002/important/")
  const deleted = useFetch("http://localhost:3002/deleted/")

  console.log(allNotes);

  const [newMsg, setNewMsg] = useState('');
  const [notes, setNotes] = useState([]);

  console.log(notes);

  useEffect(() => {
    if (allNotes) {
      setNotes(allNotes);
    }
  }, [allNotes]);

  const handleCreateBtn = (event) => {
    const todo = {
      content: newMsg,
    }
    const newTodo = [todo, ...notes]
    setNotes(newTodo);
    setNewMsg('');
  }

  const handleChangeMsg = (event) => {
    setNewMsg(event.target.value);
  }


  return (
    <BrowserRouter>
      <Navi isOpen={isOpen} setMenu={setMenu} />
      <Overlay className={isOpen ? "show" : null}></Overlay>
      <Center>
        <Sidebar isOpen={isOpen} setMenu={setMenu} />
        <Fixer className={isOpen ? "show-menu" : "hide-menu"}></Fixer>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home
              isOpen={isOpen}
              setMenu={setMenu}
            />} />
            <Route path="/allnotes" element={<AllNotes notes={notes} />} />
            <Route path="/important" element={<Important important={important} />} />
            <Route path="/deleted" element={<Deleted deleted={deleted} />} />
            <Route path="/create" element={<Create
              newMsg={newMsg}
              handleChangeMsg={handleChangeMsg}
              handleCreateBtn={handleCreateBtn} />} />
          </Routes>
        </AnimatePresence>
      </Center>
    </BrowserRouter>
  );
}

export default App;
