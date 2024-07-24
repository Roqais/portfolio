import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Skill from "./components/Skill"
import SkillDetail from "./components/Tools"

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <div className="font-poppins pt-16"> 

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/Tools" element={<SkillDetail />} />

          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App