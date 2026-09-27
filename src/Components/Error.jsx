import {useNavigate} from "react-router-dom"

function Error(){
const navigate=useNavigate()

function returnHome(){
  navigate("/")
}

    return(
        <section className="errorpage">

            <h2>Ooops! 404 Error, Web Page Not Found.</h2>

                <button onClick={returnHome}>Return to Home Page</button>

        </section>
    )

}

export default Error