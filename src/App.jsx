import React from 'react'
import Quiz from './components/Quiz'
import { Route, Routes } from 'react-router-dom'
import background from "./assets/background.jpg";
import Home from './components/Home'

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/quiz' element={<Quiz/>}/>
       </Routes>
    </div>
  )
}

export default App
