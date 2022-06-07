import React from 'react'
import Back from '../../assets/images/back1.svg'
import Logo from '../../assets/images/logo.png'
import B360 from '../../assets/images/360b.png'
import Style from './login.module.less'
import LoginPanel from '../../components/loginpanel/loginpanel'
import LoginExhitions from '../../components/loginexhitions/loginexhitions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    return (
        <>
            <LogoDiv Style={{ zIndex: 1 }} />
            <BackDiv Style={{ zIndex: 1 }} />
            <LoginPanel
                Style={{ zIndex: 10 }}
                logined={() => {
                    navigate('/')
                }}
            />
            <LE />
            <FooterTip Style={{ zIndex: 2 }} />
        </>
    )
}

//背景图
const BackDiv = (props: any) => {
    return (
        <div style={props.Style} className={Style.back}>
            <img src={Back} />
        </div>
    )
}

//logo
const LogoDiv = (props: any) => {
    return (
        <div style={props.Style} className={Style.LogoDiv}>
            <img src={Logo} />
        </div>
    )
}

//底部说明
const FooterTip = (props: any) => {
    return (
        <div style={props.Style} className={Style.footertip}>
            <div className={Style.b360}>
                <img src={B360} />
                <span> 360极速浏览器</span>
            </div>
            <div className={Style.copyright}>@刘尧夫 2022</div>
        </div>
    )
}

const LE = () => {
    const style = {
        width: '100%',
        height: '100%',
        background: '#f2f6fe',
        position: 'absolute',
        right: 0,
    }
    return <LoginExhitions Style={style} />
}

export default Login
