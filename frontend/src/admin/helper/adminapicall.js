const API = "http://localhost:9000/api"




export const createCategory = async (userId , token , category) => {
    try {
        const response = await fetch(`${API}/category/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}


export const getCategories = async () => {
    try {
        const res = await fetch(`${API}/categories`, {
            method: "GET"
        })
        return await res.json()
    } catch (err) {
        return console.log(err)
    }
}
// product calls 

// create product
export const createProduct  = (userId , token ,product) => {
   // console.log(product)
    return fetch(`${API}/product/create/${userId}`, {
        method : "POST", 
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body : product 
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

//get all products 

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method : "GET",
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}


// delete Product

export const deleteProduct = (productId , userId , token) => {
    return fetch(`${API}/product/${productId}/${userId}` , {
        method : "DELETE",
        headers : {
            Accept: "application/json",
            "content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))

}


//get a single product 

export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method : "GET"
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

export const updateProduct = (userId , productId , token , product) => {
    console.log(product)
    return fetch(`${API}/product/${productId}/${userId}`, {
        method : "PUT", 
        headers : {
            Accept: "application/json",
            // "content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body : product
    })

    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}