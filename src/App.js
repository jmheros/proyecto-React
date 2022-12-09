import React from 'react';
import { BrowserRouter, Routes, } from 'react-router-dom';


import Navbar from './components/Navbar'; 
import ItemListContainer from './components/ItemListContainer';





export default function App() {
  return (
    <div>
    <Navbar/>
    <ItemListContainer/>
    </div>
  );
}
