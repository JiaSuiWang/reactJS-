/*
 * @Descripttion: 
 * @Author: Wei
 * @Date: 2021-04-20 23:20:40
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-21 00:41:45
 * @FilePath: \CycleProduction\src\pages\playBack\landingPage.tsx
 */
import { DatePicker, TimePicker } from 'antd';
import '../../style/landingPage.less';
import { MailOutlined } from '@ant-design/icons';

import React, { FC } from "react";

interface IBtnProps {
    icon: React.ReactNode;
    name: string;
}

const icons: IBtnProps[] = [
    {icon: <MailOutlined/>, name: 'Refresh'},
    {icon: <MailOutlined/>, name: 'Refresh'},
    {icon: <MailOutlined/>, name: 'Refresh'},
    {icon: <MailOutlined/>, name: 'Refresh'},
    {icon: <MailOutlined/>, name: 'Refresh'},
]

const LandingPage: FC = () => {
    return (
        <div>
            <div className="pc-query">
                <div className="pc-query-input">
                    <p>文字</p>
                    <div>
                        <MailOutlined/>
                        <DatePicker style={{ width: 370 }}/>
                        <MailOutlined/>
                        <MailOutlined/>
                    </div>
                </div>
                <div className="pc-query-btn">
                    {
                        icons.map(v => {
                            return (
                                <p key={v.name}>
                                    {v.icon}
                                    <span className='pc-query-btn-name'>{v.name}</span>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
            <TimePicker />,


        </div>
    )

}

export default LandingPage;
