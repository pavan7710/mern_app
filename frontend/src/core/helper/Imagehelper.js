import React from 'react'
const API = "http://localhost:9000/api"


const Imagehelper = ({product}) => {
    console.log( `${API}/product/photo/${product._id}`)
    const imageUrl = product ? `${API}/product/photo/${product._id}` : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`


  return (
      <div className="rounded border border-success p-2">
          <img className="mb-3 rounded"  src={imageUrl} alt="photo" style={{maxHeight:"100%" , maxWidth: "100%"}}/>
      </div>
    )
}

export default Imagehelper
