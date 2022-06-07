import React, { useEffect, useState } from 'react'
import Style from './usercard.module.less'
import { Typography, Space, Tag, Card } from 'antd'
import SvgMan from '../../assets/images/man.svg'
import { PhoneOutlined, CrownOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

const Usercard = (props: any) => {
    return (
        <>
            <div className={Style.content} style={props.style}>
                <img
                    className={Style.headimg}
                    src='https://img2.baidu.com/it/u=3610944201,1018827729&fm=253&fmt=auto&app=138&f=JPEG'
                />
                <div className={Style.info}>
                    <div className={Style.name}>
                        <div>
                            <Title level={5}>{props.name}&nbsp;</Title>
                        </div>
                        <div>
                            <Text type='secondary'>
                                <PhoneOutlined />
                                18190927136
                            </Text>
                        </div>
                    </div>
                    <div className={Style.des}>
                        <Space size={[0, 2]} align='start' wrap>
                            <Tag color='#87d068' icon={<CrownOutlined />}>
                                系统管理员
                            </Tag>
                            <Tag color='#46CEE7'>数据大屏评论家</Tag>
                            <Tag color='#99C20E'>食堂美食分析师</Tag>
                            <Tag color='#E39266'>大橘高级铲屎官</Tag>
                            <Tag color='#6CFF00'>集团员工进出门理事</Tag>
                        </Space>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Usercard
