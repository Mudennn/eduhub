import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ModulNFT from '../components/ModulNFT'
import Sidebar from '../components/Sidebar'

const Modul = () => {
  return (
    
    <div className='flex m:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto'>
        
        <Sidebar />
        <Routes>
            <Route path="/modulenft" element={<ModulNFT />}/>
        </Routes>
        
    </div>
    
  )
}

export default Modul