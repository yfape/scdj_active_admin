/*
 * @Author: yfape yfape@outlook.com
 * @Date: 2022-03-29 14:28:40
 * @LastEditors: yfape yfape@outlook.com
 * @LastEditTime: 2022-05-16 14:27:08
 * @FilePath: \scdj\src\pages\main\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect, useContext } from 'react'
import Style from './main.module.less'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Mainnav from '../../components/mainnav/mainnav'
import { UserContext } from '../../store/user'
import { Application } from '@splinetool/runtime'
import Splinecode from '../../assets/mod/scene.splinecode'

const { Header, Footer, Sider, Content } = Layout

const Main = () => {
    const { user, setUser } = useContext(UserContext)

    const exitOut = () => {
        localStorage.setItem('user', '')
        setUser({ token: '' })
    }

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                    width: '100vw',
                    background: '#F6F4FC',
                }}
            >
                <Layout>
                    <Sider style={{ background: 'transparent' }}>
                        <Mainnav exitOut={exitOut} />
                    </Sider>
                    <Outlet />
                </Layout>
            </Layout>
        </>
    )
}

export default Main
