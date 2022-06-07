import React, { useContext, useEffect } from 'react'
import Style from './menumain.module.less'
import { UserContext } from '../../store/user'
import { Menu, Avatar } from 'antd'
import {
    PieChartOutlined,
    SlidersOutlined,
    TeamOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const { SubMenu } = Menu

const MenuMain = () => {
    const { user, setUser } = useContext(UserContext)
    const location = useLocation()
    const selectKey = [location.pathname]

    const LoginOut = () => {
        localStorage.setItem('user', '')
        setUser({ token: '' })
    }
    const handleClick = (e: any) => {
        console.log(e)
    }

    return (
        <>
            <Menu
                // inlineCollapsed
                className={Style.content}
                selectedKeys={selectKey}
                onClick={handleClick}
                mode='vertical'
            >
                <Menu.Item style={{ margin: 0 }} key='/self' icon={<UserOutlined />}>
                    <Link to='/self'>{user.nickname}&emsp;</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key='/' icon={<PieChartOutlined />}>
                    <Link to='/'>数据中心</Link>
                </Menu.Item>
                <Menu.Item key='/control' icon={<SlidersOutlined />}>
                    <Link to='/control'>控制中心</Link>
                </Menu.Item>
                <Menu.Item key='/users' icon={<TeamOutlined />}>
                    <Link to='/users'>用户管理</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key='/setting' icon={<SettingOutlined />}>
                    <Link to='/setting'>设置&emsp;&emsp;</Link>
                </Menu.Item>
                <Menu.Item key='exit' danger icon={<LogoutOutlined />} onClick={LoginOut}>
                    退出&emsp;&emsp;
                </Menu.Item>
            </Menu>
        </>
    )
}

export default MenuMain
