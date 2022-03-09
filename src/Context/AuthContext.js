import  {createContext, useEffect, useState } from "react";

const Context = createContext()

function Provider({children}){

    const [userData, setUserData] = useState([])
    const [findUser, setFindUser] = useState(JSON.parse(window.localStorage.getItem('userData')) || {})

    useEffect(() => {
        window.localStorage.setItem('userData', JSON.stringify(findUser))
    }, [findUser])

    useEffect(() => {
        fetch('https://authenticatiion.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUserData(data))
    }, [userData])

    return(
        <Context.Provider value={{userData, setUserData, setFindUser, findUser}}>{children}</Context.Provider>
    )
}

export {Context, Provider}
