import React from 'react';
import { Component } from 'react';
import Header from '../Header/Header.js';
import ProductIntro from '../ProductIntro/ProductIntro.js';
import ProductArea from '../ProductArea/ProductArea.js'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ProductIntro />
      <ProductArea />
    </div>
  );
}

export default App;
