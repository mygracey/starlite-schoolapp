import male1 from "../assets/images/facemale1-elementor-io-optimized.jpeg"
import female1 from "../assets/images/facefemale1-elementor-io-optimized.jpeg"
import female2 from "../assets/images/teacher3-elementor-io-optimized.jpeg"
import male2 from "../assets/images/teacher8-elementor-io-optimized.jpeg"
import {FaBus} from "react-icons/fa6"
import {FaChalkboardUser} from "react-icons/fa6"
import {FaUtensils} from "react-icons/fa6"
import {FaBookOpen} from "react-icons/fa6"
import {FaRocket} from "react-icons/fa6"
import {Link} from "react-router-dom"

function HomePage(){

    return(
        <section className="homepage">
            <div className="slider-container">
                <div className="slider">
                    <div className="slide slide1">
                        <div className="caption">
                            <h1><span className="starlite">StarLite</span> International School</h1>
                            <p>A place for Teaching and Learning, were we groom the best and the brightest academically and morally.</p>
                            <Link to="/about" className="btn-learn-more">Learn more</Link>
                        </div>
                    </div>

                    <div className="slide slide2">
                        <div className="caption">
                            <h1>Our Elementary School</h1>
                            <p>We emphasis laying a solid foundation for our secondary education</p>
                             <Link to="/about" className="btn-learn-more">Learn more</Link>
                            
                        </div>
                    </div>

                    <div className="slide slide3">
                        <div className="caption">
                            <h1>Our Science Laboratory</h1>
                            <p>We understand that scientific research drives technological innovation, medical cures, and our fundamental understanding of the physical world.</p>
                             <Link to="/about" className="btn-learn-more">Learn more</Link>
                        </div>
                    </div>

                    <div className="slide slide4">
                        <div className="caption">
                            <h1>Our Sports Facilities</h1>
                            <p>We understand that all work and no play (excerices) can make any child dull. Our sports facilities are world class. Installed to make our children happy, healthy and physically fit.</p>
                             <Link to="/about" className="btn-learn-more">Learn more</Link>
                        </div>
                    </div>
                    
                    <div className="slide slide1">
                        <div className="caption">
                                <h1>StarLite International School</h1>
                               <p>A place for Teaching and Learning, were we groom the best and the brightest academically and morally.</p>
                                <Link to="/about" className="btn-learn-more">Learn more</Link>
                        </div>
                         
                    </div>
                </div>
             </div>

             <div className="our-services-container container">
                <h2>Our Services</h2>
             
             <div className="card-wrapper">
                    <div className="card">
                        <div className="icon-circle">
                            <FaBus className="icon"/>
                        </div>
                    
                    <p>Transportation</p>
                 </div>

                 <div className="card">
                    <div className="icon-circle">
                            <FaChalkboardUser className="icon"/>
                        
                        </div>
                         <p>Online Tutoring</p>
                 </div>

                 <div className="card">
                     <div className="icon-circle">
                            <FaUtensils className="icon"/>
                        
                        </div>
                         <p>School Cafetria</p>
                 </div>

                 <div className="card">
                    <div className="icon-circle">
                            <FaBookOpen className="icon"/>
                        
                        </div>
                         <p>School Library</p>
                 </div>
              </div>
                
             </div>


        <div className="testimonial-container container">
            <h2>Testimonials</h2>
            <p id="testimonypara">Read amazing testimonials from our clients.</p>

            <div className="slider-container">
                <div className="slides">
                    <div id="card1" className="card">
                        
                              <img src={male1} alt="" />
                              <h4>Kunle Martins</h4>
                        
                      
                        <p>My son will be turing 10 next month, and I must say, ever since he was 2 years old, he began finding it difficult relating well with others. Since he started attending this school, his whole life has changed. He was voted the friendlies student in his class. I thank God, and his class teacher impacting him positively.</p>
                    </div>

                    <div id="card2" className="card">
                        
                            <img src={female1} alt="" />
                            <h4>Paulina Yusuf</h4>
                        
                        
                        <p>I and my husband Charles, were trying to homeschool our only child Dorcas cos of the poor morals we see today in society until we heard about Starlite and what they stand for. Today, we are nit regreting our decision because the school has lived up to its values. Thank you Starlite!</p>
                    </div>

                    <div id="card3" className="card">
                        
                            <img src={male2} alt="" />
                            <h4>Marcus Mark</h4>
                        
                   
                        <p>I really like this school alot because of its homely and cosy environment and state of the art classes. Its really a global standard school, and the children can compete confidently with their counterparts in any part of the world.</p>
                    </div>

                    <div id="card4" className="card">
                        
                            <img src={female2} alt="" />
                            <h4>Heather Alfonzo</h4>
                        
                   
                        <p>I am truly grateful for the way the nursery section carers took care of our little boy when he was around 2 years old. My wife and I would drop him off at the day care and those kind Nannies would carry him in their arms and just love him. He grew so used to them that even now that he has turned 11, still maintains a cordial relationship with them. He is a very healthy and stable young man. I just want to say a big Thank you to the carers at the Day care.</p>
                    </div>
                    
                </div>

                <div className="nav-links">
                    <a href="#card1"></a>
                    <a href="#card2"></a>
                    <a href="#card3"></a>
                    <a href="#card4"></a>
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
export default HomePage