import React from 'react'
import { Link } from 'react-router-dom'
import { isauthenticated } from '../auth/helper'
import Base from "../core/Base"


const AdminDashBoard = () => {
  
 const {user} = isauthenticated()
  const adminLeftSide = () => {
      return (
          <div className="card">
              <h4 className="card-header bg-dark text-white">Admin Naviation</h4>
              <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/create/category" className="nav-link text-success">Create Categories</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/categories" className="nav-link text-success">Manage Categories</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/create/product" className="nav-link text-success">Create Product</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/products" className="nav-link text-success">Manage Products</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/" className="nav-link text-success">Manage Orders</Link>
                </li>
              </ul>
          </div>
      )
    }


    const adminRightSide = () => {
        return (
            <div className= "card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:</span>{user.name}
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:</span>{user.email}
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Admin Area</span>
                    </li>
                </ul>
            </div>
        )
    }



    return (
        <Base className="container bg-success p-4" title="Welcome To admin area" description="Manage all of your Products Here ">
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>
        </Base>
    )
}

export default AdminDashBoard
