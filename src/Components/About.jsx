
import principal from "../assets/images/teacher2-elementor-io-optimized.jpeg"
import {FaRocket} from "react-icons/fa6"
import {Link} from "react-router-dom"

function AboutPage(){
    return(
        <section className="aboutpage">
            
             <div className="aboutpage-banner container">
                <h2>About Us</h2>
                <p>Starlite International is school is a family focused school with a vision to recover dying morals society one held to. We are committed to deploying latest technologies to drive our vision. We firmly believe in the total wellness of the child - emotionally,spiritually, and physically.</p>
                <Link to="/contact" className="btn-contact">Contact Us</Link>
             </div>


             <div className="welcome-container">
                    <h2>Meet Our Principal</h2>
                    <div className="welcome-card-wrapper">
                        <img src={principal} alt="" />
                        <div className="welcome-note">
                            <h3>Principals Welcome Note</h3>
                            <p>Welcome to Starlite International School,
                                 where every child is encouraged to learn,
                                  grow, and shine. We are committed to 
                                  creating a safe, inspiring, and supportive
                                   environment where students can discover 
                                   their potential and build a bright future.
                                    We are delighted to have you join our school community.
                                 Welcome to Starlite School!</p>
                        </div>
                    </div>

                </div>                  
            

             <div className="cta-container">
                <div className="cta">
                    <FaRocket className="cta-icon"/>
                     <h3>Why not hurry now and enroll your child/children today!</h3>
                    <p>Admission is in Progress</p>

              <Link to="/contact" className="btn-admission">Admission Form</Link>
             
                </div>
           
        </div>
            
            
        </section>
    )
}
export default AboutPage