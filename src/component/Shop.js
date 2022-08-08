import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Main from './Main'
import Navbar from './Navbar'
import Products from './Products'

function Shop() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={ <Cart />} />
      </Routes>
    </div>
  )
}

export default Shop