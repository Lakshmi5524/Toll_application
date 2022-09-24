import "./App.css"
import Header from "./components/Header"
import Home from "./components/Home"
import { Routes, Route } from "react-router-dom"
import Add from "./components/Add"
import Edit from "./components/Edit"
import Viewentry from "./components/Viewentry"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/view" element={<Viewentry />} />
      </Routes>
    </>
  )
}

export default App
