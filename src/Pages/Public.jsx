import {Outlet, Navigate, useLocation} from "react-router-dom"
import {useContext} from "react"
import { Context } from "../Context/AuthContext";

function Public (){

    const {findUser} =  useContext(Context)
    const {pathname} = useLocation()

    if(findUser?.id && pathname === "/login" ){
        return <Navigate to="/"/> 
    }else if(findUser?.id && pathname === "/signup"){
        return <Navigate to="/"/>
    }

    return <Outlet/>
    
}

export default Public;