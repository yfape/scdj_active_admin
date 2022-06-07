import React from 'react'
import Style from './mainnav.module.less'
import './mainnav.css'
import { Menu, Avatar, Button } from 'antd'
import {
    PieChartOutlined,
    SlidersOutlined,
    TeamOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    PoweroffOutlined,
    HomeOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const { SubMenu } = Menu

const Mainnav = (props: any) => {
    const location = useLocation()
    const selectKey = [location.pathname]

    const LoginOut = () => {
        console.log('登出')
    }

    const handleClick = (e: any) => {
        // console.log(e)
    }

    return (
        <>
            <div className={Style.content}>
                <div>
                    <LogoBlock src={Logo} />
                    <Menu
                        className={Style.menu}
                        selectedKeys={selectKey}
                        onClick={handleClick}
                        mode='inline'
                    >
                        <Menu.Item key='/' icon={<HomeOutlined />}>
                            <Link to='/'>首页</Link>
                        </Menu.Item>
                        <Menu.Item key='/datacenter' icon={<PieChartOutlined />}>
                            <Link to='/datacenter'>数据中心</Link>
                        </Menu.Item>
                        <Menu.Item key='/control' icon={<SlidersOutlined />}>
                            <Link to='/control'>控制中心</Link>
                        </Menu.Item>
                        <Menu.Item key='/users' icon={<TeamOutlined />}>
                            <Link to='/users'>用户管理</Link>
                        </Menu.Item>
                        <Menu.Item key='/self' icon={<UserOutlined />}>
                            <Link to='/self'>我的信息</Link>
                        </Menu.Item>
                        <Menu.Item key='/setting' icon={<SettingOutlined />}>
                            <Link to='/setting'>设置</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={Style.exitbutton}>
                    <Menu className={Style.menu} mode='inline'>
                        <Menu.Item key='exit' icon={<PoweroffOutlined />} onClick={props.exitOut}>
                            安全退出
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        </>
    )
}

const LogoBlock = (props: any) => {
    return (
        <>
            <div className={Style.logoblock}>
                <img src={props.src} />
            </div>
        </>
    )
}

export default Mainnav
