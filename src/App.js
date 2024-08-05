import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SingleProduct from './SingleProduct'
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const theme = {
    colors:{
      bg: "#000000"
    }
  }

  return (
    <ThemeProvider theme = {theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
        </Routes>
      </Router>
    </ThemeProvider>
)}

export default App