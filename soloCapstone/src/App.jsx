import Login from "./components/Login"
import Registration from "./components/Registration"
import Nav from "./components/Nav"
import Games from "./components/Games"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Contact from "./components/contact"
import Header from "./components/Header"
import AddReview from "./components/addReview"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header />
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/Games" element={<Games/>}/>
      <Route path= "/Login" element={<Login/>}/>
      <Route path= "/Registration" element={<Registration/>}/>
      <Route path= "/About" element={<About/>}/>
      <Route path= "/Contact" element={<Contact/>}/>
      <Route path="/addReview" element={<addReview />}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
