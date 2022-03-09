import {useState, useContext} from "react"
import {Context} from "./../Context/AuthContext"
import {Link} from "react-router-dom"


function Login (){

    const {userData, setFindUser} = useContext(Context)

    const [inputNameValue, setInputNameValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')
    
    const hendleSubmit = (e) => {
        e.preventDefault()

        const findUser = userData?.find(u => u.userName === inputNameValue && u.password === inputPasswordValue)

        setFindUser(findUser || {})
    }

    return(
        <>
        <form onSubmit={e => hendleSubmit(e)}>
            <input onChange={e => setInputNameValue(e.target.value)} type="text" placeholder="username" />
            <input onChange={e => setInputPasswordValue(e.target.value)} type="text" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
        <Link to="/signup">SignUp</Link>
        </>
    )
}

export default Login;