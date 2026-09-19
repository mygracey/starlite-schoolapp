
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
                <li><Link to="#" className="link">Home</Link></li>
                <li><Link to="#" className="link">About</Link></li>
                <li><Link to="#" className="link">Contact</Link></li>
                <li><Link to="#" className="link">PaySchoolFees</Link></li>
            </ul>
        </div>
        <div className="card card3">
          
            <ul className="privacy-policy-links">
                <h4>Legal and Policy Links</h4>
                <li><Link to="#" className="link">Terms and Conditions</Link></li>
                <li><Link to="#" className="link">Cookie Policy</Link></li>
                <li><Link to="#" className="link">Re-payment Policy</Link></li>
                <li><Link to="#" className="link">Disclaimer</Link></li>
            
                
            </ul>
        </div>
        <div className="card card4">
         
            <ul>
                <h4>Contact us</h4>
                <li>Physical Address</li>
                <li>Email Address</li>
                <li>Contact Mobile Number</li>
                <li>WhatsApp</li>
            </ul>
        </div>
                
            
        </section>
    )
}
export default Footer