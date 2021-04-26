import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from '../core/Base'
import { createCategory } from './helper/adminapicall'


const AddCategory = () => {
    const {token , user} = isauthenticated()
    const [name , setname ] = useState()
    const [error, seterror] = useState(false)
    const [success, setsuccess] = useState(false)


    const handleChange =  e => {
        seterror("")
        setname(e.target.value)
    }

    const goBack = () => {
      return(
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
         </div>
      )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        seterror("")
        setsuccess(false)

        // backend request fired 

        createCategory(user._id , token , {name})
        .then(data => {
          //  console.log(data)
            if(data.error){
                seterror(true)
            } else {
                seterror("")
                setsuccess(true)
                setname("")
            }
        })
    }

    const successMessage = () => {
        if (success){
            return <h4>CAtegory created Successfully</h4>
        }
    }

    const warningMessage = () => {
        if (error){
            return <h4> Failed To create category </h4>
        }
    }

    const myCategoryFrom = () => (
        <form>
            <div className ="form-group">
                    <p className="lead">Enter The Category</p>
                    <input onChange={handleChange} type="text" className="form-control"/>
                    <button onClick={handleSubmit} className="btn btn-outline-info">Create Category</button>
            </div>
        </form>
    )

  

    return (
       <Base title="Create a category here" description="Add a new category for new tshirts" className="container bg-info p-4">
           <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                        {successMessage()}
                        {warningMessage()}
                        {myCategoryFrom()}
                        {goBack()}
                </div>
           </div>
       </Base>
    )
}

export default AddCategory
