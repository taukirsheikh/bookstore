import React from 'react'
import Header from './components/Header'
import Shop from './pages/Shop'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main className='overflow-hidden bg-primary'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </main>
  )
}

export default App