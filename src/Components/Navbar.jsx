
import {useState,useEffect} from "react"

import {FaBars} from "react-icons/fa6"

import {Link} from "react-router-dom"

function Navbar(){
const[sticky,setSticky]=useState(false);


useEffect(()=>{
    window.addEventListener("scroll",function(){
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
},[])


const[mobileMenu,setMobileMenu]=useState(false)



const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
}






    return(
        <section className={`navbar container ${sticky?'dark-nav':''}`}>
            <div className="logo"><h3>Starlite</h3></div>
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
                <Link to="/login" className="link btn-pay">PaySchoolFees</Link>
            </ul>

            <div className="open" onClick={toggleMenu}><FaBars/></div>
            

        </section>
    )

}

export default Navbar