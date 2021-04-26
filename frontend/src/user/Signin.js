import React , {useState} from "react"
import Base from "../core/Base"
import {signin , isauthenticated, authenticate} from "../auth/helper/index"
import { Redirect } from "react-router"


const Signin = () =>{

    const [state , setState] = useState({
        email : "arun@gmail.com", 
        password : "12345",
        error : "",
        didRedirect : false 
    })

    const {email , password , error , didRedirect} =state
    const {user} = isauthenticated()
    const handleChange =  name => e => {
            setState({
                ...state,
                error : false ,
                [name] : e.target.value
            })
    }

    const handleSubmit = e => {
        e.preventDefault() 
        setState({...state , error: false })
        signin({email ,password})
        .then(data => {
            if(data.error){
                setState({...state , error : data.error})
            } else {
                authenticate(data , () => {
                    setState({
                        ...state,
                        didRedirect: true
                    })
                })
            }
        })
        .catch(console.log("sign in request failed"))
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" style={{display : error ? "" : "none"}}>
                        {error}
                    </div>
                </div>
            </div>
        )
    }

    const performRedirect = () => {
        if(didRedirect){
            if(user && user.role ===1){
                return <Redirect to="/admin/dashboard"/>
            }else {
                return <Redirect to="/user/dashboard"/>
            }
        } 
        if(isauthenticated()){
            return <Redirect to="/"/>
        }
    }


    const signInFrom = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-left">Email</label>
                            <input value={email} onChange={handleChange("email")} className="form-control" type="email"/>
                        </div>

                        <div className="form-group">
                            <label className="text-left">Password</label>
                            <input value={password} onChange={handleChange("password")} className="form-control" type="password"/>
                        </div>
                        <button onClick={handleSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }


    return(
        <Base>
        {errorMessage()}
        {signInFrom()}
        {performRedirect()}
        </Base>
    )
}

export default Signin