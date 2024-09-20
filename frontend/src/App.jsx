import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Workspace from './pages/Workspace'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/workspace' element={<Workspace/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
