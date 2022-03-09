import {useState, useContext} from "react"
import {Context} from "./../Context/AuthContext"

function Home (){

    const {findUser} = useContext(Context)

    const hendleButton = () => {
        window.localStorage.removeItem('userData')
        window.location.reload()
    }

    return(
        <>
            <h1>Welcome {findUser?.userName}</h1>

            <button onClick={hendleButton}>LogOut</button>
        </>
    )
}

export default Home;