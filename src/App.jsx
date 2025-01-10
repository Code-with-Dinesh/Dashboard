import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <BrowserRouter>
      <div className='sidebarmenu'>
        <div className='sidebar'>
           
        <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     
         </Routes> 
        </div>
        <div className='sidewraper flex '>
          <div className=' w-64 h-[90vh]'>
        <Sidebar/>

          </div>
        <div className='w-screen overflow-x-hidden '>
     
            <Dashboard/>
          
        </div> 
        </div>
        
      </div>
     
    </BrowserRouter>
  )
}

export default App