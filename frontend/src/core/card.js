import React, { useEffect, useState } from 'react'
import ImageHelper from './helper/Imagehelper'



const Card = ({product}) => {



    const cartTitle = product ? product.name : "A Photo From Pexels"
    const cartDescription = product ? product.description : "Default description"
    const cartPrice = product ? product.price : "DEFAULT"




    return (
        <div className="card text-white bg-dark border border-info">
            <div className="card-header lead">
                {cartTitle}
            </div>
            <div className="card-body">
                    {/* some_code */}
                    {/* {getRedirect(redirect)}
                    */}
                    <ImageHelper product={product}/> 
                    <p>{cartDescription}</p>
                    <p className="btn btn-success rounded btn-sm px-4">{cartPrice}</p>
                    <div className="row">

                    </div>
            </div>
        </div>
    )
}

export default Card
