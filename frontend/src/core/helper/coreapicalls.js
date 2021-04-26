const API = "http://localhost:9000/api"


export const getProducts = ()=>{
    return fetch(`${API}/products`, {
        method: "GET"
    })
    .then(res => res.json())
    .catch(error => console.log(error))
}
