import React from 'react'
import Style from './loginexhitions.module.less'
import ActionCard from '../actioncard/actioncard'

import Img_yq from '../../assets/images/yqmap.png'
import Img_tp from '../../assets/images/tp.gif'
import Img_dt from '../../assets/images/dt.gif'
import Img_h5 from '../../assets/images/h5.gif'
import Img_robot from '../../assets/images/robot.gif'
import Img_ebook from '../../assets/images/ebook.gif'
import Img_vr from '../../assets/images/vr.gif'

const Components = () => {
    return (
        <>
            <ActionCard
                src={Img_yq}
                title='疫情地图管理系统'
                description='AI智能控制，自动爬点，获取相关新闻，自动更新点位'
            />
            <ActionCard
                src={Img_tp}
                title='投票活动管理系统'
                description='可视化编辑投票页面，自动创建投票服务'
            />
            <ActionCard
                src={Img_dt}
                title='答题活动管理系统'
                description='可视化编辑答题页面，题库管理，题库自更新'
            />
            <ActionCard
                src={Img_h5}
                title='H5页面编辑器'
                description='可视化编辑H5页面，自动部署页面，自动存取组件库'
            />
            <ActionCard
                src={Img_robot}
                title='AI智能写作机器人系统'
                description='AI写作，探索AI科技'
            />
            <ActionCard
                src={Img_ebook}
                title='电子杂志管理系统'
                description='电子杂志管理，丰富接口服务'
            />
            <ActionCard
                src={Img_vr}
                title='VR场馆建设管理系统'
                description='可视化编辑VR场景，管理VR展示，VR引擎管理'
            />
        </>
    )
}

const LoginExhitions = (props: any) => {
    return (
        <>
            <div style={props.Style}>
                <div className={Style.content}>
                    <Components />
                    <Components />
                    <Components />
                    <Components />
                    <Components />
                </div>
            </div>
        </>
    )
}

export default LoginExhitions
