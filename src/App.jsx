import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
    
     <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     
     </Routes>
    </BrowserRouter>
  )
}

export default App