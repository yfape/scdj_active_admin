import React, { lazy } from 'react'
import Main from '../pages/main/main'

interface routeFormat {
    path?: string
    component: any
    auth?: boolean
    children?: routeFormat[]
    index?: boolean
    element?: JSX.Element
}

//采用 Hashrouter，否则 BrowserRouter
const isHashRouter = true

//路由配置
const routes: routeFormat[] = [
    {
        path: '/login',
        component: lazy(() => import('../pages/login/login')),
        auth: false,
    },
    {
        path: '/',
        component: <Main />,
        children: [
            {
                index: true,
                component: lazy(() => import('../pages/index/index')),
            },
            {
                path: 'datacenter',
                component: lazy(() => import('../pages/datacenter/datacenter')),
            },
            {
                path: 'control',
                component: lazy(() => import('../pages/control/control')),
            },
            {
                path: 'users',
                component: lazy(() => import('../pages/users/users')),
            },
            {
                path: 'setting',
                component: lazy(() => import('../pages/setting/setting')),
            },
            {
                path: 'self',
                component: lazy(() => import('../pages/self/self')),
            },
        ],
    },
    {
        path: '*',
        component: lazy(() => import('../pages/error404/error404')),
        auth: false,
    },
]

export { routes, isHashRouter, type routeFormat }
