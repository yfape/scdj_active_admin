/*
 * @Author: yfape yfape@outlook.com
 * @Date: 2022-04-21 10:37:28
 * @LastEditors: yfape yfape@outlook.com
 * @LastEditTime: 2022-05-17 15:50:23
 * @FilePath: \scdj\src\pages\index\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import Style from './index.module.less'
import { Typography, Button, Space, Row, Col } from 'antd'
import Personcard1 from '../../components/personcard1/personcard1'
import { UserContext } from '../../store/user'
import { ClockCircleOutlined, SyncOutlined, BarChartOutlined } from '@ant-design/icons'
import Dailytask from '../../components/dailytask/dailytask'
import Chart1 from '../../components/chart1/chart1'

const { Title, Text } = Typography

const Index = () => {
    const { user, setUser } = useContext(UserContext)
    const [task, setTask] = useState({ goal: 0, completed: 0 })

    const PersoncardItems = [
        { title: '未完成', icon: <ClockCircleOutlined />, num: 12 },
        { title: '上线中', icon: <SyncOutlined spin />, num: 4 },
        { title: '已完成', icon: <BarChartOutlined />, num: 24 },
    ]

    useEffect(() => {
        setTimeout(() => {
            setTask({
                goal: 16,
                completed: 9,
            })
        }, 300)
    }, [])

    return (
        <>
            <div className={(Style.content, 'base-padding')}>
                <Text type='secondary' style={{ fontSize: 18 }}>
                    今日概况
                </Text>
                <Personcard1
                    style={{ margin: '20px 0px', width: '100%' }}
                    items={PersoncardItems}
                />
                <Row gutter={20} justify='space-between' align='middle' wrap={false}>
                    <Col flex='none'>
                        <Dailytask
                            style={{ width: 300, height: 450 }}
                            goal={task.goal}
                            completed={task.completed}
                        />
                    </Col>
                    <Col flex='auto'>
                        <Chart1 width='100%' height={450} />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Index
