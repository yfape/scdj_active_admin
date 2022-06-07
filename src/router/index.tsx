import React, { Suspense, useContext } from 'react'
import { HashRouter, BrowserRouter, useRoutes, Navigate } from 'react-router-dom'
import { routes, isHashRouter, routeFormat } from './config'
import { UserContext, CONTEXT_USER } from '../store/user'

const resoluteRoutes = (routes: routeFormat[], user: CONTEXT_USER) => {
    return routes.map((item) => {
        if (!('auth' in item)) {
            item.auth = true
        }
        if (item.children) {
            item.children = resoluteRoutes(item.children, user)
        }
        if (item.auth && !checkAuth(user)) {
            item.element = <Navigate to='/login' />
        } else {
            console.log()
            if (item.component._owner !== undefined) {
                item.element = item.component
            } else {
                item.element = (
                    <Suspense fallback={<div>加载中</div>}>
                        <item.component />
                    </Suspense>
                )
            }
        }
        return item
    })
}
const checkAuth = (user: CONTEXT_USER) => {
    return user.token ? true : false
}

const Router = () => {
    const { user, setUser } = useContext(UserContext)
    const Res = () => useRoutes(resoluteRoutes(routes, user))

    return isHashRouter ? (
        <HashRouter>
            <Res />
        </HashRouter>
    ) : (
        <BrowserRouter>
            <Res />
        </BrowserRouter>
    )
}
export default Router
