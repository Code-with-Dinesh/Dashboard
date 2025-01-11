import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
const App = () => {
   const [toggle,settoggle] = useState(true)
   const togglebar=()=>{
    settoggle(!toggle)
    
  }
  return (
    <BrowserRouter>
      <div className='sidebarmenu bg-zinc-300 '>
        <div className='sidebar'>
           
        <Routes>
      <Route path='/' element={<Header toggle={toggle} settoggle={settoggle} togglebar={togglebar}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     
         </Routes> 
        </div>
        <div className='sidewraper flex  '>
          <div className=' w-64 h-[90vh]'>
        <Sidebar toggle={toggle} settoggle={settoggle} togglebar={togglebar} />

          </div>
        <div className={`w-screen ${toggle === false ?'w-[400%]':''} transition-all ease-in overflow-x-hidden `}>
     
            <Dashboard toggle={toggle}/>
          
        </div> 
        </div>
        
      </div>
     
    </BrowserRouter>
  )
}

export default App