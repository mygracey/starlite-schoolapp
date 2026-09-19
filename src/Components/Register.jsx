

import {FIREBASE_AUTH} from "./FirebaseConfig.js"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {Link,useNavigate} from "react-router-dom"

import{useState} from "react"


const auth=FIREBASE_AUTH;

function RegisterPage(){
const navigate=useNavigate()
const[message,setMessage]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[cPassword,setCpassword]=useState("")


let emailRegex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;
function register(e){
e.preventDefault()

if(email=="" || password=="" || cPassword==""){
    setMesage("Please fill in all fields!")
}
else if(emailRegex.test(email) && password.length >6 && password.length <=12){
    createUserWithEmailAndPassword(auth,email,password)
    
        setMessage("Please wait...")
        setTimeout(()=>{
            setMessage("Hi " + email + " your account has been successfully created!")

            setTimeout(()=>{
                navigate("/login")
            },4000)
        },3000)
    
    
}
else{
    setMessage("Please check your password or email input")
}
    
}

    return(
        <section className="registerpage">
            <h2>Register Page</h2>
            <p>Create account to access the school fees payment gateway.</p>

            <form>
                     <h4>{message}</h4>
                
                    <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                
                
                    <input type="text" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/><br />

                    <input type="text" placeholder="Confirm your password" onChange={(e)=>{setCpassword(e.target.value)}}/><br />

                    
                
                <button type="submit" onClick={register}>Create Account</button>
                
                <div className="account">
                     <p>Already have an account?</p>
                <Link to="/login" className="login"> Login</Link>
                </div>
                  
            </form>
        </section>
    )

}

export default RegisterPage