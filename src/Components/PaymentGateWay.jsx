
import {useState} from "react"
import {useNavigate,Link} from "react-router-dom"

function PaymentGateWay(){

const navigate=useNavigate()

const[name,setName]=useState("")
const[cardNum,setCardNum]=useState("")
const[expiryDate,setExpiryDate]=useState("")
const[cvv,setCvv]=useState("")
const[email,setEmail]=useState("")
const[amount,setAmount]=useState("")
const[message,setMessage]=useState("")




function payFees(e){
    e.preventDefault()

let emailRegex=/[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;


    e.preventDefault()

    if(name=="" || cardNum=="" || expiryDate=="" || email=="" || cvv=="" || amount==""){
        setMessage("Please fill in all fields.")
        
    }
    else if(emailRegex.test(email) && cardNum.length==16 && cvv.length==3){
        setMessage("Please wait a moment...")
        setTimeout(()=>{
            setMessage("Transaction Successful✅")
            setTimeout(()=>{
                window.location.reload()
            },4000)
        },3000)
       
    }
    else{
        setMessage("Invalid input")
    }
}

    return(
        <section className="paymentgateway">
            <Link to="/logout" className="btn-logout">LogOut</Link>
            <h2>Simulated School Fees Payment Gate Way</h2>
            <p>Please note: this gate way is strictly for demo purposes. No real transactions are processed.</p>

            <form>
                 
                 <div className="form-group">

                      <input type="text" placeholder="Card holder's full name" onChange={(e)=>{setName(e.target.value)}}/>

                      <input type="text" placeholder="Card holder's email" onChange={(e)=>{setEmail(e.target.value)}} />

                 </div>
            
                            
                
                    
                    <input type="number" placeholder=" Card number 0000 0000 0000 0000" onChange={(e)=>{setCardNum(e.target.value)}}/>
            
                <div className="form-group">
                    
                        
                         <input type="text" placeholder="Expiry date 00/00" onChange={(e)=>{setExpiryDate(e.target.value)}} />
                               
                         <input type="number" placeholder="Cvv 000" onChange={(e)=>{setCvv(e.target.value)}}/>
               
                  </div>
                  <input type="number" placeholder="amount" onChange={(e)=>{setAmount(e.target.value)}}/>

                  <button onClick={payFees} type="submit">Pay</button>
                 <span id="msg">{message}</span>
                               
            </form>

            

        </section>
    )


}

export default PaymentGateWay