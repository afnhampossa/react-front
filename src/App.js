import { Routes, Route, Link  } from "react-router-dom"
import Index from "./views/Index"
import Contact from "./views/Contact"
import Navbar from './views/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App