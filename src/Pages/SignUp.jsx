import {useState} from "react"
import {useContext} from "react"
import { Navigate } from "react-router-dom"
import { Context } from "../Context/AuthContext"


function SignUp (){

    const [inputNameValue, setInputNameValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')

    const {setFindUser} = useContext(Context)
   
    const hendleSubmit = (e) => {
        e.preventDefault()

        fetch('https://authenticatiion.herokuapp.com/users', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: new Date().getTime(),
                userName: inputNameValue,
                password: inputPasswordValue
            })
        })
        .then(res => res.json())
        .then(data => setFindUser(data))
    }



    return(
        <form onSubmit={e => hendleSubmit(e)}>
            <input onChange={e => setInputNameValue(e.target.value)} type="text" placeholder="username" />
            <input onChange={e => setInputPasswordValue(e.target.value)} type="text" placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp;