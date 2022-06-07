import React, { useContext, useState } from 'react'
import Style from './loginpanel.module.less'
import Exhition1 from '../../assets/images/z1.svg'
import Minlogo from '../../assets/images/minlogo.svg'
import { Button, Card, Form, Input, Checkbox, message } from 'antd'
import http from '../../utils/http'
import { UserContext } from '../../store/user'
import Logo from '../../assets/images/logo.png'
import { OmitProps } from 'antd/lib/transfer/ListBody'

interface LoginData {
    username: string
    password: string
    isdurable: boolean
}

//登录面板
const LoginPanel = (props: any) => {
    const [logindata, setLoginData] = useState({
        username: '',
        password: '',
        isdurable: false,
    })
    const [loading, setLoading] = useState(false)
    const { user, setUser } = useContext(UserContext)

    const onFinish = (callback: any) => {
        setLoading(true)
        http('post', '/login', logindata)
            .then((res: any) => {
                setLoading(false)
                message.success('登录成功')
                callback(res)
                props.logined()
            })
            .catch((err) => {
                setLoading(false)
                message.error(err)
            })
    }
    const onFinishFailed = (error: any) => {
        console.log(error)
    }
    const onValueChange = (changedValues: any, allValues: LoginData) => {
        setLoginData(allValues)
    }

    return (
        <>
            <div style={props.Style} className={Style.panel}>
                <Exhition />
                <div className={Style.form}>
                    <div className={Style.mlogo}>
                        <img src={Logo} />
                    </div>
                    <div className={Style.welcome}>
                        你好，{user.nickname ? user.nickname : '陌生人'}
                    </div>
                    <div className={Style.minlogo}>
                        <img src={Minlogo} />
                        <span> 活动集成管理系统</span>
                    </div>
                    <Form
                        name='login'
                        autoComplete='off'
                        size='middle'
                        colon={false}
                        initialValues={logindata}
                        onFinish={(e) => {
                            onFinish(setUser)
                        }}
                        onFinishFailed={onFinishFailed}
                        onValuesChange={onValueChange}
                    >
                        <Form.Item
                            label='账号'
                            name='username'
                            rules={[{ required: true, message: '请输入您的账号' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='密码'
                            name='password'
                            rules={[{ required: true, message: '请输入您的密码' }]}
                            style={{ marginBottom: '12px!important' }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name='isdurable'
                            valuePropName='checked'
                            style={{ marginBottom: '12px' }}
                        >
                            <Checkbox>勾选下次免登录</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' block htmlType='submit' loading={loading}>
                                登 录
                            </Button>
                        </Form.Item>
                    </Form>

                    <div className={Style.forget}>
                        <span>忘记密码</span>
                    </div>
                </div>
            </div>
        </>
    )
}

//展示图片
const Exhition = () => {
    return (
        <div className={Style.exhitions}>
            <img src={Exhition1} />
        </div>
    )
}

export default LoginPanel
