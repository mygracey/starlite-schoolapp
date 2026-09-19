
import Logout from "./Components/Logout"
import PaymentGateWay from "./Components/PaymentGateWay"
import Contact from "./Components/Contact"
import Register from "./Components/Register"
import Login from "./Components/Login"
import Footer2 from "./Components/Footer2"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import AboutPage from "./Components/About"
import HomePage from "./Components/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App(){
  return(
    <section className="app">
      <Router>
        <Navbar />
          <Routes>

            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/payment" element={<PaymentGateWay/>} />
            <Route path="/logout" element={<Logout/>} />

          </Routes>
            <Footer/>
            <Footer2 />
      </Router>
    </section>
  )
}

export default App

