import { useState, useCallback, useEffect } from "react";

const storage = 'UseData'
export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id)=>{
        setToken(jwtToken)
        setUserId(id)
        
        localStorage.setItem(storage, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [])
    const logout = useCallback(()=>{
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storage)
    }, [])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storage))
        if(data && data.token){
            login(data.token, data.userId)
        }
    }, [login])
    
    return { login, logout, token, userId }
}