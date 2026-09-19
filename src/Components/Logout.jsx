
import {Link} from "react-router-dom"
import {FIREBASE_AUTH} from "./FirebaseConfig.js"
import {signOut} from "firebase/auth"
function LogoutPage(){
    return(
      <section className="logoutpage">
            <h2>You have been Logged Out</h2>
            <Link to="/login" className="btn-loginagain">Login again?</Link>
            <p>or</p>
            <Link to="/" className="btn-return">return to home page</Link>
            
      </section>

    )
}

export default LogoutPage