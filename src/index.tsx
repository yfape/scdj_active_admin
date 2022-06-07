import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { Button } from 'antd'
import Router from './router/index'
import { UserProvider } from './store/user'

ReactDOM.render(
    <>
        <div className='app'>
            <UserProvider>
                <Router />
            </UserProvider>
        </div>
        <div className='isphone'>不支持移动端访问</div>
    </>,
    document.getElementById('root')
)
