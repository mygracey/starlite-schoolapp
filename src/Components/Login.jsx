

import {FIREBASE_AUTH} from "./FirebaseConfig.js"
import {signInWithEmailAndPassword} from "firebase/auth"
import{Link,useNavigate} from "react-router-dom"

import{useState} from "react"
 const auth=FIREBASE_AUTH;
 

function LoginPage(){
const navigate=useNavigate()
const[message,setMessage]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

let emailRegex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;
function login(e){
    e.preventDefault()
    if(email=="" || password==""){
        setMessage("Your email and password are required!")
    }
    else if(emailRegex.test(email) && password.length > 6 && password.length <=12){
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
                if(user){
                    setMessage("Please wait...")
                    setTimeout(()=>{
                        setMessage("Hi " + email + " you are logged in to the payment gateway.")
                        setTimeout(()=>{
                            navigate("/payment")
                        },3000)
                    },2000)
                }else{
                    setMessage("Unknown user!")
                }
        })
    }
    else{
        setMessage("Please check your password or email input.")
    }

}


    return(
        <section className="loginpage">
            <h2>Login Page</h2>
            <p>Login now to access the school fees payment gateway.</p>

            <form>
                <h4>{message}</h4>
                
                    <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/><br />
                
                
                    <input type="text" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/><br />

                    
                
                <button type="submit" onClick={login}>Login</button>
                <div className="account">
                     <p>Don't have an account?</p>
                <Link to="/register" className="create-one"> CreateOne.</Link>
                </div>
               
                
            </form>
        </section>
    )

}

export default LoginPage