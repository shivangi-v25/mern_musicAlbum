import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar'
import Add from './component/Add'
import Editmus from './component/Editmus'
import Homee from './component/Homee'
import Footer from './component/Footer'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homee />} ></Route>
          <Route path='/add' element={<Add />} ></Route>
          <Route path='/edit/:id' element={<Editmus />} ></Route>


        </Routes>
        <Footer />
      </BrowserRouter >

    </>
  )
}

export default App
