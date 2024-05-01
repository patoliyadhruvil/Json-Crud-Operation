import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './Component/Create/Create'
import View from './Component/View/View'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './Component/Update/Update'
import Read from './Component/Read/Read'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Create/>}></Route>
            <Route path='/view' element={<View/>}></Route>
            <Route path='/Update/:id' element={<Update/>}></Route>
            <Route path='/Read/:id' element={<Read/>}></Route>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
