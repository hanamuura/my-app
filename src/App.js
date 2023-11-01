import './App.css';
import { Books } from './components/Books';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import axios from 'axios';
import {StartPage} from "./pages/StartPage";
import {Route, Routes} from "react-router-dom";
import {BookPage} from "./pages/BookPage";

function App() {
  return(
      <>
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/books/:id" element={<BookPage/>} />
        </Routes>
      </>
  )
}

export default App;