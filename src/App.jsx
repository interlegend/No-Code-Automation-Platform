import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import My_Automations from './My_Automations.jsx'
import Templates from "./Templates.jsx"
import Profile from "./Profile.jsx"
import { useState } from 'react'
function App() {

  const [Search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-automations" element={<My_Automations search={Search} setsearch={setSearch} />} />
        <Route path="/templates" element={<Templates search={Search} setsearch={setSearch} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
