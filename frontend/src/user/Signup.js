import React , {useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
 import {signup} from "../auth/helper/index"


const Signup = () =>{

    const [values, setvalues] = useState({
        name : "",
        email : "", 
        password : "",
        error : "",
        success : false
    })

    const { name , email , password , error , success} = values

    const handleChange = name => event => {
        setvalues({
            ...values,
            error : false,
            [name] : event.target.value 
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setvalues({...values, error : false})
        signup({name , email , password})
        .then(data=>{
            console.log(data)
            if(data.error){
                setvalues({...values , error : data.error , success: false})
            } else {
                setvalues({
                    ...values,
                    name : "",
                    email : "", 
                    password : "",
                    error : "",
                    success : true
                })
            }
        })
    }

    const successMessage = () =>{
       // console.log(success)
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                        <div className="alert alert-success" style={{display:success? "" : "none"}}>
                            New account was created successfully. Please <Link to="/signin">Login Here </Link>
                        </div>
                </div>
            </div>
        )
    }

    const errorMessage = () =>{
       // console.log(error)
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                        <div className="alert alert-danger" style={{display:error? "" : "none"}}>
                            {error}
                        </div>
                </div>
            </div>
        )
    }


    const SignupForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input value={name} onChange={handleChange("name")} type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input value={email}  onChange={handleChange("email")} type="email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input value={password}  onChange={handleChange("password")} type="password" className="form-control"/>
                        </div>

                        <button onClick={handleSubmit} className="btn btn-success btn-block">
                            Submit
                        </button>


                    </form>
                </div>
            </div>
        )
    }


    return(
        <Base>
            {successMessage()}
            {errorMessage()}
            {SignupForm()}
        </Base>
    )
}

export default Signup