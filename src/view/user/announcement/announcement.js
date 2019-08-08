import React, { Component } from 'react';
import "./announcement.less";
import Header from "@src/components/common/header/header.js";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcement: [
                { time: '2019/05/01 12:30:12', title: '天天返水', text: '北京时间2019年05月21日【超级天天返水】、【电子得意彩金】已派发完毕，敬请大家留意查收，吉祥彩票全体员工祝您游戏愉快，多多盈利~' },
                { time: '2019/05/01 12:30:12', title: '周周俸禄派送通知', text: '尊贵的贵宾会员，您好！5月份的第3周--周周俸禄彩金已经自动派送完毕，请各位进入【账户明细】核对哦，加入吉祥彩票【尊贵象征VIP极致奢华】彩金累计高达3058530元，等着您来挑战！感谢您的支持，祝您游戏愉快！~' }
            ]
        }
    }

    render() {
        return (
            <div className={'announcement flex'}>
                <Header title={'公告'} {...this.props} />
                <div className={'content'}>
                {this.state.announcement.map((item,i) => {
                    return (
                        <div className={'list'} key={i}>
                            <p>{item.time}</p>
                            <div>
                                <p>{item.title}</p>
                                <div>{item.text}</div>
                            </div>
                        </div>
                    )
                })}
                </div>

            </div>
        );
    }
}