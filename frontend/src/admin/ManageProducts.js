import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from '../core/Base'
import { deleteProduct, getProducts } from './helper/adminapicall'


const ManageProducts = () => {

    const [products, setproducts] = useState([])

    const {user , token} = isauthenticated()

    const preload = () => {
        getProducts().then(data => {
            if(data.error){
                console.log(data.error)
            } else {
                setproducts(data)
            }
        })
    }

    const deleteTheProduct = (productId) => {
        deleteProduct(productId , user._id , token).then(data=> {
            if(data.error){
                console.log(data.error)
            } else {
                preload()
            }
        })
    }

    useEffect(() => {
        preload()
    }, [])

    return (
       <Base title="Wwlcome admin" description="Manage Products Here">
           <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span>Admin Home</span>
           </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">Total 3 products</h2>
                </div>

                {products.map((product , index)=> {
                    return (
                        <div key={index} className="row text-center mb-2">
                            <div className="col-4">
                                <h3 className="text-white text-left">{product.name}</h3>
                            </div>

                            <div className="col-4">
                                <Link to={`/admin/products/update/${product._id}`} className="btn btn-success">
                                    <span>Update</span>
                                </Link>
                            </div>

                            <div className="col-4">
                               <button className="btn btn-danger" onClick={() =>deleteTheProduct(product._id)}>
                                   Delete
                               </button>
                            </div>
                        </div>
                    )
                })}

            </div>
       </Base>
    )
}

export default ManageProducts
