import React, { CSSProperties, useEffect, useState, useRef, useMemo } from 'react'
import Style from './dailytask.module.less'
import { Typography, Progress, Space, Divider } from 'antd'
import { AuditOutlined, NodeIndexOutlined, HistoryOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

interface ForStatisTask {
    goal: number
    completed: number
    style?: CSSProperties
}

const StatisTask = (props: ForStatisTask) => {
    return (
        <>
            <Space
                align='center'
                split={<Divider type='vertical' />}
                size={30}
                style={{
                    ...props.style,
                    ...{ justifyContent: 'center', width: '100%', textAlign: 'center' },
                }}
            >
                <div>
                    <Title level={4}>{props.goal}</Title>
                    <Text type='secondary'>目标量</Text>
                </div>
                <div>
                    <Title level={4}>{props.completed}</Title>
                    <Text type='secondary'>已完成</Text>
                </div>
            </Space>
        </>
    )
}

const WorkBlocks = (props: any) => {
    return (
        <>
            <Space
                style={{ ...props.style, ...{ justifyContent: 'center', width: '100%' } }}
                size={20}
                align='center'
            >
                <WorkBlock icon={<AuditOutlined />} title='处理事务' />
                <WorkBlock icon={<NodeIndexOutlined />} title='发起协作' />
                <WorkBlock icon={<HistoryOutlined />} title='历史记录' />
            </Space>
        </>
    )
}

interface ForWorkBlock {
    icon: JSX.Element
    title: string
}

const WorkBlock = (props: ForWorkBlock) => {
    return (
        <>
            <div className={Style.workblock}>
                <div className={Style.icon}>{props.icon}</div>
                <div className={Style.text}>
                    <Text type='secondary'>{props.title}</Text>
                </div>
            </div>
        </>
    )
}

interface ForDailytask {
    style?: CSSProperties
    goal: number
    completed: number
}

const Dailytask = (props: ForDailytask) => {
    const getPercent = (): number => Math.ceil((props.completed / props.goal) * 100)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        console.log('task')
    }, [])

    return (
        <>
            <div className={Style.content} style={props.style}>
                <div>
                    <Text type='secondary' style={{ fontSize: 18 }}>
                        今日任务
                    </Text>
                </div>
                <div className={Style.info}>
                    <div className={Style.progress}>
                        <Progress
                            type='circle'
                            strokeColor={{
                                '0%': '#F4B78E',
                                '100%': '#C84348',
                            }}
                            percent={getPercent()}
                        />
                    </div>
                    <StatisTask goal={props.goal} completed={props.completed} />
                    <WorkBlocks />
                </div>
            </div>
        </>
    )
}

export default Dailytask
