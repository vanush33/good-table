import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Shop from './pages/shop'
import About from './pages/about'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App