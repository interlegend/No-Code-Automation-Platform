import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import My_Automations from './pages/My_Automations.jsx'
import Templates from "./pages/Templates.jsx"
import Profile from "./pages/Profile.jsx"
import Create_Automation from "./pages/Create_Automation.jsx"
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
        <Route path="/create-automation" element={<Create_Automation search={Search} setsearch={setSearch} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
