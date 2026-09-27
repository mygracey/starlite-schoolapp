
import {useState} from "react"
import {sendPasswordResetEmail} from "firebase/auth"
import {FIREBASE_AUTH} from "./FirebaseConfig.js"

const auth=FIREBASE_AUTH;

function ResetPassword(){


const[email,setEmail]=useState("")
const[message,setMessage]=useState("")
  

function handleResetPassword(e){
    e.preventDefault()
    if(email==""){
        setMessage("Please enter your email.")
    }
    else{
        sendPasswordResetEmail(auth,email)
        setTimeout(()=>{
             setMessage("redirecting to password reset page.")
        },2000)
       
    }
}



    return(
        <section className="resetpassword">
            <h3>Hi, we learnt you forgot your password</h3>
            <p>Kindly enter your email address to reset your password 😊</p>

            <form>
                <input type="text" name="email" placeholder="Enter your email" /><br />
                <button onClick={handleResetPassword}>Reset Password</button>
            </form>
        </section>
    )

}

export default ResetPassword