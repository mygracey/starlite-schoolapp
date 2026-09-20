
import {Link} from "react-router-dom"

function Footer(){

    return(
        <section className="footer container">
            
        <div className="card card1">
            <div className="footer-logo">
                <h3>Starlite</h3>
                <p>To inspire bright minds, nurture talents, and empower students to shine in an ever changing world.</p>
            </div>
        </div>
        <div className="card card2">
         
            <ul className="footer-navliks">
                <h4>Featured Links</h4>
                <li><Link to="/"className="link">Home</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/contact" className="link">Contact</Link></li>
                <li><Link to="/login" className="link">PaySchoolFees</Link></li>
            </ul>
        </div>
        <div className="card card3">
          
            <ul className="privacy-policy-links">
                <h4>Legal and Policy Links</h4>
                <li><Link to="/policy" className="link">Terms and Conditions</Link></li>
                <li><Link to="/policy" className="link">Cookie Policy</Link></li>
                <li><Link to="/policy" className="link">Privacy Policy</Link></li>
                <li><Link to="/policy" className="link">Disclaimer</Link></li>
            
                
            </ul>
        </div>
        <div className="card card4">
         
            <ul>
                <h4>Contact us</h4>
                <li>No.3, Demo mode street</li>
                <li>demomode@demo.com</li>
                <li>000-000-000</li>
                <li>000-000-000</li>
            </ul>
        </div>
                
            
        </section>
    )
}
export default Footer