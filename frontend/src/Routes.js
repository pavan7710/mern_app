import React from "react"
import { BrowserRouter , Switch , Route} from "react-router-dom"
import Home from "./core/Home"
import Signin from "./user/Signin"
import Signup from "./user/Signup"
import AdminDashboard from "./user/AdminDashBoard"
import UserDashboard from "./user/UserDashBoard"
import AdminRoutes from "./auth/helper/AdminRoutes"
import PrivateRoutes from "./auth/helper/PrivateRoutes"
import AddCategory from "./admin/AddCategory"
import AddProducts from "./admin/AddProducts"
import ManageCategory from "./admin/ManageCategory"
import ManageProducts from "./admin/ManageProducts"
import Updateproduct from './admin/Updateproduct'





const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>
            <PrivateRoutes path="/user/dashboard" exact component={UserDashboard}/>
            <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard}/>
            <AdminRoutes path="/admin/create/category" exact component={AddCategory}/>
            <AdminRoutes path="/admin/create/product" exact component={AddProducts}/>
            <AdminRoutes path="/admin/categories" exact component={ManageCategory}/>
            <AdminRoutes path="/admin/products" exact component={ManageProducts}/>
            <AdminRoutes path="/admin/products/update/:productId" exact component={Updateproduct}/>
        </Switch>
        
        </BrowserRouter>
    )
}

export default Routes
