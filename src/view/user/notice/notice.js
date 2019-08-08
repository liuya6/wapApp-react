import React, { Component } from 'react';
import "./notice.less";
import Header from "@src/components/common/header/header.js";
// import { Button } from 'antd-mobile';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcement: [
                { seen: false, time: '2019-05-09 12:54', type: '系统后台', theme: '主题：尊贵的贵宾会员，您好！5月份的...~' },
                { seen: true, time: '2019-05-09 12:54', type: '系统后台', theme: '尊贵的贵宾会员，您好！5月份的第3周--主题：尊贵的贵宾会员，您好！5月份的...~' }
            ]
        }
    }

    render() {
        return (
            <div className={'notice flex'}>
                <Header title={'我的消息'} {...this.props} />
                <div className={'content'}>
                    <p>编辑</p>
                    {this.state.announcement.map((item, i) => {
                        return (
                            <div className={'list flexB ripple'} key={i}>
                                <div className={`ball ${item.seen ? null : 'red'}`}></div>
                                <div className={'box'}>
                                    <p>发件人：{item.type}{item.time}</p>
                                    <div>主题：{item.theme}</div>
                                </div>
                                <i className={'iconfont'}>&#xe629;</i>
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}