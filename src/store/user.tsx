import React, { useEffect, useReducer } from 'react'

interface CONTEXT_USER {
    token?: string
    uid?: number
    nickname?: string
    privilege?: number[]
}

const User = (): CONTEXT_USER => {
    let local = localStorage.getItem('user')
    if (local) {
        return JSON.parse(local)
    }
    return {}
}

const UserContext = React.createContext({
    user: User(),
    setUser: (arg: any): any => {},
})

const userReducer = (state: any, action: any) => {
    if (action.type) {
        return false
    }
    state = {
        ...state,
        ...action,
    }
    localStorage.setItem('user', JSON.stringify(state))
    return state
}

const UserProvider = (props: any) => {
    const [user, setUser] = useReducer(userReducer, User())
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>
        </>
    )
}

export { UserContext, UserProvider, type CONTEXT_USER }
