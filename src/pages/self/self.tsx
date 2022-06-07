import React, { useContext } from 'react'
import Style from './self.module.less'
import { Typography, Button } from 'antd'
import Personcard1 from '../../components/personcard1/personcard1'
import { UserContext } from '../../store/user'

const { Title, Text } = Typography

const Self = () => {
    const { user, setUser } = useContext(UserContext)

    return <>self</>
}

export default Self
