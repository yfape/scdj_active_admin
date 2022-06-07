import React from 'react'
import Style from './actioncard.module.less'
import { Card } from 'antd'

const { Meta } = Card

const ActionCard = (props: any) => {
    return (
        <Card
            style={props.Style}
            hoverable
            className={Style.content}
            cover={<img alt='' src={props.src} />}
        >
            <Meta title={props.title} description={props.description} />
        </Card>
    )
}

export default ActionCard
