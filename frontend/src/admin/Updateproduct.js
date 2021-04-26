import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from '../core/Base'
import { createProduct, getCategories, getProduct, updateProduct } from './helper/adminapicall'




const Updateproduct = (props) => {
    const {user ,token} = isauthenticated()

    const [values, setvalues] = useState({
        name : "",
        description : "",
        price : "",
        stock : "",
        photo : "",
        categories : "",
        category :"",
        loading : false,
        error : "",
        createdProduct : "",
        getRedirect : false, 
        formData : ""
    })

    const {name ,
    description,
    price,
    stock,
    photo,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getRedirect,
    formData
    } = values


    // get Single Product 

    const preload = productId => {
        getProduct(productId).then(data=>{
            if(data.error){
                setvalues({
                    ...values,
                    error : data.error 
                })
            } else {
                preloadCategories()
                setvalues({
                    ...values,
                    name : data.name,
                    description : data.description,
                    price : data.price,
                    category : data.category._id,
                    stock : data.stock,
                    formData : new FormData() 
                })
            }
        })
    }

    useEffect(() => {
     preload(props.match.params.productId)
    }, [])

    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setvalues({ ...values, [name]: value });
      };

    
    const successMessage = () => {
      return(
        <div className="alert alert-success mt-3" style={{display : createdProduct ? "" : "none" }}>
          <h4>{createdProduct} updated successfully</h4>
        </div>
      )
 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setvalues({
            ...values,
            error :"",
            loading : true
        })
        updateProduct( user._id, props.match.params.productId , token , formData)
        .then(data=> {
            console.log(data)

            if(data.error){
                setvalues({
                    ...values, 
                    error : data.error
                })
            } else {
                setvalues({
                    ...values,
                    name : "",
                    description : "",
                    price : "",
                    photo : "",
                    stock :"",
                    loading :false,
                    createdProduct : data.name
                })
            }
        })
    }

    const preloadCategories = () => {
        getCategories().then(data => {
            if(data.error){
                setvalues({
                    ...values,
                    error : data.error
                })
            } else {
                setvalues({
                    categories :data,
                    formData : new FormData()
                })
            }
        })
    }

    const createProductForm = () => (
        <form>
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {categories &&
                categories.map((cate, index) => (
                  <option key={index} value={cate._id}>
                    {cate.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Stock"
              value={stock}
            />
          </div>
    
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-outline-success mb-3"
          >
            Update Product
          </button>
        </form>
      );
    return (
       <Base title="Update The Product Here" description="welcome to update Section" className="container bg-info p-4">
           <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">Admin Home</Link>
           <div className="row bg-dark text-white rounded">
               <div className="col-md-8 offset-md-2">
                 {successMessage()}
               {createProductForm()}
               </div>
           </div>
       </Base>
    )
}

export default Updateproduct
 