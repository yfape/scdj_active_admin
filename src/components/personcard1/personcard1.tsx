import React, { CSSProperties } from 'react'
import Style from './personcard1.module.less'
import { Row, Col, Typography, Space } from 'antd'
import Svgz4 from '../../assets/images/z4.svg'
import { ClockCircleOutlined, SyncOutlined, BarChartOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const setTimeSen = () => {
    let hours = new Date().getHours()
    let text = '你'
    switch (true) {
        case hours >= 4 && hours < 10:
            text = '早上'
            break
        case hours >= 10 && hours < 12:
            text = '上午'
            break
        case hours >= 12 && hours < 14:
            text = '中午'
            break
        case hours >= 14 && hours < 19:
            text = '下午'
            break
        case hours >= 19 && hours < 24:
            text = '晚上'
            break
        case hours >= 0 && hours < 4:
            text = '深夜'
            break
        default:
            text = '你'
    }
    text = text + '好'
    return text
}

interface ForTaskBlock {
    icon: JSX.Element
    title: string
    num: number
}

const TaskBlock = (props: ForTaskBlock) => {
    return (
        <>
            <Space className={Style.taskblock}>
                <div className={Style.taskimg}>{props.icon}</div>
                <div className={Style.taskinfo}>
                    <div className={Style.title}>{props.title}</div>
                    <div className={Style.num}>{props.num}</div>
                </div>
            </Space>
        </>
    )
}

interface ForPersoncard1 {
    items: ForTaskBlock[]
    style: CSSProperties
}

const Personcard1 = (props: ForPersoncard1) => {
    return (
        <>
            <div style={props.style} className={Style.content}>
                <Row style={{ marginTop: 20 }}>
                    <Col flex='1 1 600px' className={Style.info}>
                        <div>
                            <Title level={3} style={{ marginBottom: 6 }}>
                                {setTimeSen()}，愿你今天过得很好 :)
                            </Title>
                            <Text type='secondary'>2022年4月21日, 多云转晴</Text>
                        </div>
                        <Space className={Style.mininfo} align='end' size={32}>
                            {props.items.map((item, key) => (
                                <TaskBlock
                                    key={key}
                                    icon={item.icon}
                                    title={item.title}
                                    num={item.num}
                                />
                            ))}
                            {/* <TaskBlock
                                icon={<ClockCircleOutlined />}
                                title='待完成'
                                num={props.statis.uncompleted}
                            />
                            <TaskBlock
                                icon={<SyncOutlined spin />}
                                title='上线中'
                                num={props.statis.online}
                            />
                            <TaskBlock
                                icon={<BarChartOutlined />}
                                title='已完成'
                                num={props.statis.completed}
                            /> */}
                        </Space>
                    </Col>
                    <Col flex='0 1 400px'>
                        <img src={Svgz4} className={Style.z4} />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Personcard1
