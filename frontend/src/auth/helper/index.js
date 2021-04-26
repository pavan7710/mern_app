const API = "http://localhost:9000/api"

export const signup = user => {
    return fetch(`${API}/signup` , {
        method : "POST",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const signin = user => {
    return fetch(`${API}/signin` , {
        method : "POST",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    })

    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const authenticate = (data , next) => {
    if(typeof window !== "undefined"){
        // console.log( window)
        localStorage.setItem("jwt" , JSON.stringify(data))
        next()
    }
}

export const isauthenticated = ()=> {
    if(typeof window == "undefined"){
      //  console.log(typeof window)

        return false
    }

    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
} 

export const signout = next => {
    if(typeof window !== "undefined"){
      //  console.log(typeof window)

        localStorage.removeItem("jwt")
        next();

        return fetch(`${API}/signout` , {
            method:"GET"
        })
        .then(res => console.log("signout success"))
        .catch(err => console.log(err))
    }
}