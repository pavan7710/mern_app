import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getCategories } from './helper/adminapicall'


const ManageCategory = () => {

    const [categories, setcategories] = useState([])
    const {user , token} = isauthenticated()

    const preload = () => {
        getCategories().then(data => {
            if(data.error){
                console.log(data.error)
            } else {
                console.log(data)
                setcategories(data)
            }
        })
    }

    useEffect(() => {
       preload()
    }, [])
    return (
       <Base title="Welcome admin " description="Manage Products Here">
           <h2 className="mb-4">All products</h2>
            <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span>Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">Total 3 products</h2>
                    {categories.map((cate , index)=>{
                        return (
                            <h3 className="text-white" key={index}>
                                {cate.name}
                            </h3>
                        )
                    })}
                    <div className="row text-center mb-2">
                        <div className="col-4">
                            <h3>I Write Code </h3>
                        </div>

                        <div className="col-4">
                            <Link className="btn btn-success" to={`/admin/product/update/productId`}>
                            <span>Update</span>
                            </Link>
                        </div>

                        <div className="col-4">
                            <button onClick={()=> {}} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
       </Base>
    )
}

export default ManageCategory
