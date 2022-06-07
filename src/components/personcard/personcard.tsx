import React, { useState, useEffect } from 'react'
import Style from './personcard.module.less'
import { Typography, Space, Tag, Card, Skeleton, Avatar } from 'antd'
import {
    PhoneOutlined,
    CrownOutlined,
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
} from '@ant-design/icons'

const { Title, Text } = Typography
const { Meta } = Card

const Personcard = (props: any) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            <Card
                className={Style.content}
                style={props.style}
                actions={[
                    <SettingOutlined key='setting' />,
                    <EditOutlined key='edit' />,
                    <EllipsisOutlined key='ellipsis' />,
                ]}
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar
                                shape='square'
                                size={89}
                                src='https://img2.baidu.com/it/u=3610944201,1018827729&fm=253&fmt=auto&app=138&f=JPEG'
                            />
                        }
                        title={<Personinfo name={props.name} />}
                        description={
                            <>
                                <Space size={[0, 2]} align='start' wrap>
                                    <Tag color='#87d068' icon={<CrownOutlined />}>
                                        系统管理员
                                    </Tag>
                                    <Tag color='#46CEE7'>数据大屏评论家</Tag>
                                    <Tag color='#99C20E'>食堂美食分析师</Tag>
                                    <Tag color='#E39266'>大橘高级铲屎官</Tag>
                                    <Tag color='#6CFF00'>集团员工进出门理事</Tag>
                                </Space>
                            </>
                        }
                    />
                </Skeleton>
            </Card>
        </>
    )
}

const Personinfo = (props: any) => {
    return (
        <>
            <Space align='baseline'>
                <Title level={4} style={{ marginBottom: 5 }}>
                    {props.name}&nbsp;
                </Title>
                <Text type='secondary'>
                    <PhoneOutlined />
                    18190927136
                </Text>
            </Space>
        </>
    )
}

export default Personcard
