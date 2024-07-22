import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <div className="pt-16"> {/* Adjust the padding to match the height of your fixed navbar */}

          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App